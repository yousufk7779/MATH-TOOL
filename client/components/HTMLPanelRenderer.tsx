
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
                overflow-x: hidden !important;
                max-width: 100vw !important;
            }
            * { 
                color: #E0E0E0 !important; 
                max-width: 100% !important;
                word-wrap: break-word !important;
                overflow-wrap: break-word !important;
            }

            body { 
                font-family: 'Kalam', cursive, sans-serif !important; 
                font-size: 18px;
                padding: 10px;
                box-sizing: border-box !important;
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
                color: #E0E0E0 !important;
                padding: 15px; 
                border-radius: 12px; 
                border-left: 5px solid #E94560; 
                margin-bottom: 15px; 
                box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            }
            .solution-header { color: #4CAF50 !important; font-weight: bold; margin-top: 10px; font-size: 1.1em; }
            .final-answer { color: #4CAF50 !important; font-weight: bold; margin-top: 15px; font-size: 1.1em; }
            .mjx-chtml { color: #FFFFFF !important; font-size: 110% !important; }
            mjx-container { color: #FFFFFF !important; font-size: 110% !important; }
            mjx-container svg { fill: #FFFFFF !important; }
            img { 
                background: #FFFFFF !important; 
                padding: 10px; 
                border-radius: 10px; 
                width: 100%; 
                max-width: 320px; 
                height: 180px !important; 
                object-fit: contain; 
                margin: 15px auto; 
                display: block; 
                cursor: pointer; 
                box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
            
            /* Tables */
            table { 
                width: 100%; 
                border-collapse: collapse; 
                margin-bottom: 15px; 
                background: transparent !important; 
                table-layout: fixed !important; 
                word-wrap: break-word !important; 
            }
            th, td { 
                border: 1px solid #555 !important; 
                padding: 4px; 
                text-align: center; 
                color: #E0E0E0 !important; 
                background: transparent !important; 
                word-wrap: break-word !important;
                overflow-wrap: break-word !important;
            }
            th { background-color: #16213E !important; font-weight: bold; }
            
            /* Zoomable Image Modal */
            #image-modal {
                display: none; position: fixed; z-index: 9999; left: 0; top: 0;
                width: 100%; height: 100%; background-color: rgba(0,0,0,0.9);
                align-items: center; justify-content: center;
            }
            #modal-img {
                max-width: 95vw; max-height: 90vh; object-fit: contain;
                background: #fff; padding: 15px; border-radius: 12px;
                animation: zoom 0.3s ease;
            }
            @keyframes zoom { from {transform:scale(0.8); opacity:0;} to {transform:scale(1); opacity:1;} }
            #modal-close {
                position: absolute; top: 15px; right: 25px; color: #f1f1f1;
                font-size: 40px; font-weight: bold; cursor: pointer; z-index: 10000;
            }
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
            
            // Add Modal HTML if not exists
            if (!document.getElementById('image-modal')) {
                var modal = document.createElement('div');
                modal.id = 'image-modal';
                modal.innerHTML = '<span id="modal-close">&times;</span><img id="modal-img">';
                document.body.appendChild(modal);
                
                modal.onclick = function() {
                    modal.style.display = 'none';
                };
            }

            // Attach zoom click handlers to all images
            var images = document.getElementsByTagName('img');
            for(var i=0; i<images.length; i++) {
                if(images[i].id === 'modal-img') continue;
                images[i].onclick = function() {
                    var m = document.getElementById('image-modal');
                    var mImg = document.getElementById('modal-img');
                    m.style.display = 'flex';
                    mImg.src = this.src;
                }
            }
            
            setTimeout(function() {
                window.ReactNativeWebView.postMessage(JSON.stringify({type: 'contentSize', height: document.body.scrollHeight}));
            }, 100);
        }

        function handleMathJaxAndShow() {
            showContent();
            if (!window.MathJax) {
                window.MathJax = {
                    tex: {
                        inlineMath: [['\\\\(', '\\\\)'], ['$', '$']],
                        displayMath: [['\\\\[', '\\\\]'], ['$$', '$$']]
                    },
                    svg: { fontCache: 'global' },
                    startup: {
                        pageReady: function() {
                            return MathJax.startup.defaultPageReady().then(function() {
                                setTimeout(function() {
                                    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'contentSize', height: document.body.scrollHeight}));
                                }, 500);
                            });
                        }
                    }
                };
                var script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
                script.async = true;
                document.head.appendChild(script);
            } else {
                MathJax.typesetPromise().then(function() {
                    setTimeout(function() {
                        window.ReactNativeWebView.postMessage(JSON.stringify({type: 'contentSize', height: document.body.scrollHeight}));
                    }, 500);
                });
            }
        }
        
        // Run immediately or on load
        if (document.readyState === 'complete') {
            handleMathJaxAndShow();
        } else {
            window.addEventListener('load', handleMathJaxAndShow);
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
                cacheEnabled={true}
                cacheMode="LOAD_CACHE_ELSE_NETWORK"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                bounces={false}
                overScrollMode="never"
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
