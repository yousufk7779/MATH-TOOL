
import React, { memo, useCallback, useState } from 'react';
import { useWindowDimensions, View, StyleSheet } from 'react-native';
import RenderHtml, { CustomRendererProps, TBlock } from 'react-native-render-html';
import { WebView } from 'react-native-webview';

const KATEX_CSS = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasYb726Ls" crossorigin="anonymous">`;
const KATEX_JS = `<script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyZQrcCnjQ5t+stJLeAFspe+5GeUnIXXkqBCsnV4KFCW1pk7Tpad8I5nIphOdy" crossorigin="anonymous"></script>`;

const generateKatexHtml = (formula: string, displayMode: boolean, fontSize: number = 18, color: string = 'black') => `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    ${KATEX_CSS}
    ${KATEX_JS}
    <style>
        body, html { margin: 0; padding: 0; background-color: transparent; overflow: hidden; }
        .katex-html { display: none; } /* accessibility */
        #math { 
            display: inline-block; 
            font-size: ${fontSize}px; 
            color: ${color};
            padding: 2px 0;
        }
    </style>
</head>
<body>
    <div id="math"></div>
    <script>
        try {
            katex.render(${JSON.stringify(formula)}, document.getElementById('math'), {
                displayMode: ${displayMode},
                throwOnError: false
            });
            // Send height to RN
            const height = document.getElementById('math').offsetHeight;
            const width = document.getElementById('math').offsetWidth;
            window.ReactNativeWebView.postMessage(JSON.stringify({ height: height + 8, width: width })); 
        } catch (e) {
            window.ReactNativeWebView.postMessage(JSON.stringify({ error: e.message }));
        }
    </script>
</body>
</html>
`;

const KatexRenderer = ({ tnode, style }: CustomRendererProps<TBlock>) => {
    // Extract info from tnode attributes
    // we expect <katex formula="..." displayMode="true/false"> or text content?
    // In our generator we wrapped as <katex inline="true">formula</katex>
    // So the formula is in tnode.data or children.

    // tnode.init.domNode.children[0].data contains the text if specific structure.
    // simpler: pass formula as attribute or extract from text content.
    // RenderHTML text content extraction can be tricky.
    // Let's rely on attributes if possible, but our generator wrapped text.
    // <katex inline="true">formula</katex>

    // extract text content
    const formula = tnode.domNode?.children?.[0]?.data || "";
    // Wait, domNode might not be available directly in all versions, checking tnode props.
    // tnode.data is invalid. tnode.children[0].data.

    // Check if formula is empty
    if (!formula) return null;

    const displayMode = tnode.attributes.inline !== "true";
    const [height, setHeight] = useState(40);
    const [width, setWidth] = useState(0);

    const onMessage = useCallback((event: any) => {
        try {
            const data = JSON.parse(event.nativeEvent.data);
            if (data.height) setHeight(data.height);
            if (data.width) setWidth(data.width);
        } catch (e) { }
    }, []);

    const cssStyle = StyleSheet.flatten(style);
    const fontSize = cssStyle.fontSize || 16;
    const color = cssStyle.color || 'black';

    return (
        <View style={{ height: height, width: width || undefined, alignSelf: displayMode ? 'center' : 'flex-start', marginVertical: displayMode ? 8 : 0 }}>
            <WebView
                originWhitelist={['*']}
                source={{ html: generateKatexHtml(formula, displayMode, Number(fontSize), String(color)) }}
                onMessage={onMessage}
                style={{ backgroundColor: 'transparent' }}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const renderers = {
    katex: KatexRenderer
};

const processedHtml = (html: string) => {
    if (!html) return "";
    // Regex to wrap \(...\) and \[...\] with <katex>
    // Note: JS regex lookbehind/lookahead support is good in RN.
    // We already converted class="fraction" to \(\frac{}{}\) in generator.
    // So we just look for \( ... \) and \[ ... \]

    return html
        .replace(/\\\[([\s\S]*?)\\\]/g, '<katex inline="false">$1</katex>')
        .replace(/\\\(([\s\S]*?)\\\)/g, '<katex inline="true">$1</katex>');
};

interface MathRenderProps {
    html: string;
    style?: any;
    baseStyle?: any;
    tagsStyles?: any;
    classesStyles?: any;
    ignoredTags?: string[];
}

export const MathRender = memo(({ html, style, baseStyle, tagsStyles, classesStyles, ignoredTags }: MathRenderProps) => {
    const { width } = useWindowDimensions();
    const content = processedHtml(html);

    return (
        <RenderHtml
            contentWidth={width}
            source={{ html: content }}
            renderers={renderers}
            baseStyle={{ fontFamily: 'Nunito', fontSize: 16, color: '#333', ...baseStyle }}
            tagsStyles={{
                p: { marginBottom: 8 },
                b: { fontFamily: 'Nunito_700Bold' },
                strong: { fontFamily: 'Nunito_700Bold' },
                img: { maxWidth: '100%' },
                ...tagsStyles
            }}
            classesStyles={classesStyles}
            ignoredDomTags={ignoredTags}
        />
    );
});
