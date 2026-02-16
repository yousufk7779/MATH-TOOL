import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';

interface MathJaxWebViewProps {
    content: string;
    textColor?: string;
    fontFamily?: string;
    fontSize?: number;
}

const MathJaxWebView = ({ content, textColor = '#000000', fontFamily = 'Kalam', fontSize = 18 }: MathJaxWebViewProps) => {
    const [height, setHeight] = useState(100);

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            <style>
                body {
                    font-family: '${fontFamily}', cursive;
                    font-size: ${fontSize}px;
                    color: ${textColor};
                    margin: 0;
                    padding: 0;
                    background-color: transparent;
                    overflow: hidden;
                }
                .math-content {
                    padding: 2px;
                }
            </style>
        </head>
        <body>
            <div id="content" class="math-content">
                ${content}
            </div>
            <script>
                window.onload = function() {
                    setTimeout(function() {
                        var height = document.getElementById('content').scrollHeight;
                        window.ReactNativeWebView.postMessage(height);
                    }, 500); // Small delay to ensure rendering
                };
            </script>
        </body>
        </html>
    `;

    return (
        <View style={{ height, backgroundColor: 'transparent' }}>
            <WebView
                originWhitelist={['*']}
                source={{ html: htmlContent }}
                style={{ backgroundColor: 'transparent' }}
                scrollEnabled={false}
                onMessage={(event) => {
                    setHeight(Number(event.nativeEvent.data));
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default MathJaxWebView;
