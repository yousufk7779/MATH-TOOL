import React from 'react';
import { StyleSheet, useWindowDimensions, ViewStyle, TextStyle } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { WebView } from 'react-native-webview';
import { JiguuColors } from '@/constants/theme';

interface ParsedTextProps {
    children: string;
    style?: any;
    Component?: React.ComponentType<any>;
    accentColor?: string;
    [key: string]: any;
}

// Global styles for HTML content tags
const tagsStyles = {
    body: {
        fontSize: 18,
        color: JiguuColors.textPrimary,
        fontFamily: 'Kalam_400Regular',
        lineHeight: 28,
    },
    p: {
        marginBottom: 8,
        marginTop: 0,
        fontFamily: 'Kalam_400Regular',
    },
    b: {
        fontFamily: 'Kalam_700Bold',
    },
    strong: {
        fontFamily: 'Kalam_700Bold',
    },
    i: {
        fontStyle: 'italic',
        fontFamily: 'Kalam_400Regular',
    },
    em: {
        fontStyle: 'italic',
        fontFamily: 'Kalam_400Regular',
    },
    div: {
        marginBottom: 4,
        fontFamily: 'Kalam_400Regular',
    },
    span: {
        fontFamily: 'Kalam_400Regular',
    }
};

const classesStyles = {
    'fraction': {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginHorizontal: 4,
        fontFamily: 'Kalam_400Regular',
    },
    'numerator': {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingHorizontal: 2,
        textAlign: 'center',
        fontFamily: 'Kalam_700Bold',
        fontSize: 16,
    },
    'denominator': {
        paddingTop: 1,
        textAlign: 'center',
        fontFamily: 'Kalam_700Bold',
        fontSize: 16,
    },
    'formula': {
        color: '#2E7D32',
        fontFamily: 'Kalam_700Bold',
        fontSize: 18,
    },
    'bold': {
        fontFamily: 'Kalam_700Bold',
    }
};

// Helper to generate CSS from style object
const generateCSS = (classesStyles: any) => {
    let css = '';
    if (!classesStyles) return css;

    for (const className in classesStyles) {
        css += `.${className} { `;
        const style = classesStyles[className];
        for (const prop in style) {
            const cssProp = prop.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
            let val = style[prop];
            if (typeof val === 'number') val = `${val}px`;
            css += `${cssProp}: ${val}; `;
        }
        css += `} `;
    }
    return css;
};

// MathJax WebView Component
const MathJaxWebView = ({ content, style, classesStyles }: { content: string, style: any, classesStyles?: any }) => {
    const flattenedStyle = StyleSheet.flatten(style) || {};
    const fontSize = flattenedStyle.fontSize || 18;
    const color = flattenedStyle.color || JiguuColors.textPrimary;
    const fontFamily = 'Kalam'; // Enforce Kalam

    // Simple height management
    const [height, setHeight] = React.useState(100);

    const dynamicCSS = generateCSS(classesStyles);

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet">
            <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
            <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            <style>
                body {
                    font-family: '${fontFamily}', cursive;
                    font-size: ${fontSize}px;
                    color: ${color};
                    margin: 0;
                    padding: 8px; /* Add some padding */
                    background-color: transparent;
                    display: flex; /* Flexbox for better alignment */
                    flex-direction: column;
                }
                .math-content {
                    width: 100%;
                }
                ${dynamicCSS}
            </style>
        </head>
        <body>
            <div id="content" class="math-content">
                ${content}
            </div>
            <script>
                // Post message periodically to update height
                function postHeight() {
                    const height = document.body.scrollHeight;
                    window.ReactNativeWebView.postMessage(height);
                }
                
                // Initial post
                window.onload = postHeight;
                
                // Post after MathJax renders
                if (window.MathJax) {
                    MathJax.startup.promise.then(() => {
                        postHeight();
                        // Additional check after rendering
                        setTimeout(postHeight, 500);
                    });
                } else {
                    setTimeout(postHeight, 1000);
                }
            </script>
        </body>
        </html>
    `;

    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: htmlContent }}
            style={{ height, backgroundColor: 'transparent', opacity: 0.99 }} // Opacity hack for Android rendering issues sometimes
            scrollEnabled={false}
            onMessage={(event) => {
                setHeight(Number(event.nativeEvent.data));
            }}
            showsVerticalScrollIndicator={false}
            javaScriptEnabled={true}
            androidLayerType="software" // Important for complex rendering on Android
        />
    );
};


export const ParsedText = ({ children, style, Component, accentColor, classesStyles, ...rest }: ParsedTextProps) => {
    const { width } = useWindowDimensions();

    if (!children) return null;

    // Check for LaTeX delimiters
    const isMathContent = children.includes('\\(') || children.includes('\\[');

    // Flatten incoming style to apply to base body style
    const flattenedStyle = StyleSheet.flatten(style) || {};

    // If it's math content, render with MathJax WebView
    if (isMathContent) {
        return <MathJaxWebView content={children} style={flattenedStyle} classesStyles={classesStyles} />;
    }

    // Merge incoming styles with default tag styles
    const dynamicTagsStyles = {
        ...tagsStyles,
        body: {
            ...tagsStyles.body,
            ...flattenedStyle,
            marginBottom: 0,
        }
    };

    // Use passed classesStyles or default
    const dynamicClassesStyles = {
        ...classesStyles, // Passed from parent (e.g. QuestionCard)
        // Add defaults if needed
    };

    // Wrap in a div to ensure body styles apply if content is just text
    const htmlContent = `<body>${children}</body>`;

    return (
        <RenderHtml
            contentWidth={width - 48}
            source={{ html: htmlContent }}
            tagsStyles={dynamicTagsStyles as any}
            classesStyles={dynamicClassesStyles as any}
            baseStyle={flattenedStyle as any}
            enableExperimentalMarginCollapsing={true}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({});
