
import React, { memo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

interface RenderPanelProps {
    htmlUri?: string; // The local file path (e.g., file:///...)
    htmlContent?: string; // Direct HTML content string
    targetId: string; // ID of the question/block to show
    style?: any;
}

export const HTMLPanelRenderer = memo(({ htmlUri, htmlContent, targetId, style }: RenderPanelProps) => {
    const webviewRef = useRef<WebView>(null);
    const [height, setHeight] = useState(300);

    const INJECTED_SCRIPT = `
    (function() {
        var targetId = "${targetId}";
        
        // Style injection for Dark Mode + Kalam Font
        var style = document.createElement('style');
        style.innerHTML = \`
            @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
            
            /* Aggressive Dark Theme Overrides */
            html, body {
                background-color: #1A1A2E !important; 
                margin: 0; padding: 0;
            }
            * { color: #E0E0E0 !important; }

            body { 
                font-family: 'Kalam', cursive, sans-serif !important; 
                font-size: 18px;
                padding: 10px;
            }

            /* Hide original containers/cards styling */
            .content-box { 
                display: none; 
                background: transparent !important; 
                border: none !important; 
                box-shadow: none !important; 
                margin: 0 !important;
                padding: 0 !important;
            } 
            .content-box.active { display: block !important; } 
            
            /* Make theorem/example boxes transparent or dark */
            div:not(.step):not(#active-display):not(.content-box) {
                background-color: transparent !important;
                border: none !important;
            }

            /* Specific component styling */
            .question { 
                color: #FFFFFF !important; 
                font-weight: 700; 
                font-size: 1.3em; 
                margin-bottom: 20px; 
                border-bottom: 1px solid #333;
                padding-bottom: 10px;
            }
            .sub-question { 
                color: #FFD700 !important; 
                font-weight: 600; 
                font-size: 1.1em;
                margin-top: 20px; 
                margin-bottom: 10px;
            }
            .step { 
                background: #16213E !important; 
                padding: 15px; 
                border-radius: 12px; 
                border-left: 5px solid #E94560; 
                margin-bottom: 15px; 
                box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            }
            .solution-header { color: #4CAF50 !important; font-weight: bold; margin-top: 10px; font-size: 1.1em; }
            .final-answer { color: #4CAF50 !important; font-weight: bold; margin-top: 15px; font-size: 1.1em; }
            .mjx-chtml { color: #FFFFFF !important; font-size: 110% !important; }
            img { background: #fff; padding: 8px; border-radius: 8px; max-width: 100%; margin: 10px 0; }
        \`;
        document.head.appendChild(style);

        // Content logic
        function showContent() {
            if (targetId) {
                var target = document.getElementById(targetId);
                if (target) {
                    // Hide all direct children of body except scripts/styles
                    Array.from(document.body.children).forEach(function(child) {
                        if (child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') {
                            child.style.display = 'none';
                        }
                    });
                    
                    // Show target and its parents
                    var currentEl = target;
                    while(currentEl && currentEl !== document.body) {
                        currentEl.style.display = 'block';
                        currentEl = currentEl.parentElement;
                    }
                }
            } else {
                // Show everything
                 Array.from(document.body.children).forEach(function(child) {
                        if (child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') {
                            child.style.display = 'block';
                        }
                 });
            }
            
            setTimeout(function() {
                window.ReactNativeWebView.postMessage(JSON.stringify({type: 'contentSize', height: document.body.scrollHeight}));
            }, 100);
        }
        
        // Run immediately or on load
        if (document.readyState === 'complete') {
            showContent();
        } else {
            window.addEventListener('load', showContent);
        }
    })();
    true;
    `;

    // Construct source object
    const source = React.useMemo(() => {
        if (htmlContent) {
            let content = htmlContent;
            // Ensure base format for string content
            if (!content.includes('<html>')) {
                content = `<html><head></head><body>${content}</body></html>`;
            }
            return { html: content, baseUrl: 'file:///' };
        }
        return { uri: htmlUri || '', baseUrl: '' };
    }, [htmlContent, htmlUri]);

    return (
        <View style={[styles.container, style, { height }]}>
            <WebView
                ref={webviewRef}
                originWhitelist={['*']}
                allowFileAccess={true}
                allowFileAccessFromFileURLs={true}
                allowUniversalAccessFromFileURLs={true}
                source={source}
                injectedJavaScript={INJECTED_SCRIPT}
                onMessage={(event) => {
                    try {
                        const data = JSON.parse(event.nativeEvent.data);
                        if (data.type === 'contentSize' && data.height) {
                            setHeight(Math.max(data.height, 300));
                        }
                    } catch (e) { }
                }}
                style={styles.webview}
                scrollEnabled={false}
                androidLayerType="hardware"
            // Key prop to force reload on target change if needed, 
            // though injectJavaScript handles updates better.
            // key={targetId} 
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
        overflow: 'hidden',
        minHeight: 300,
    },
    webview: {
        backgroundColor: 'transparent',
    },
});
