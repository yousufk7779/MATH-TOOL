
import React, { memo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

interface RenderPanelProps {
    htmlUri?: string; // The local file path (e.g., file:///...)
    htmlContent?: string; // Direct HTML content string
    targetId: string; // ID of the question/block to show
    style?: any;
}

const INJECTED_SCRIPT = `
(function() {
  function initStructure() {
    if (document.getElementById('full-content-stash')) return;
    
    // Create stash and display containers
    const stash = document.createElement('div');
    stash.id = 'full-content-stash';
    stash.style.display = 'none';
    
    const display = document.createElement('div');
    display.id = 'active-display';
    display.style.padding = '20px';
    display.style.minHeight = '100px';
    
    // Move all body children to stash
    while (document.body.firstChild) {
        stash.appendChild(document.body.firstChild);
    }
    
    document.body.appendChild(display);
    document.body.appendChild(stash);
  }

  window.showOnlyTarget = function(targetId) {
    initStructure();
    
    const stash = document.getElementById('full-content-stash');
    const display = document.getElementById('active-display');
    
    // Clear previous display
    display.innerHTML = '';
    
    if (!targetId) {
        // Show everything (clone back from stash)
        // Actually for full view we might just want to show stash content? 
        // Cloning huge content might be heavy. 
        // Let's just clone all children of stash to display
        // Or better, for "Overview" mode, maybe we don't use this component in filtered mode? 
        // But the requirement implies we do.
        // Let's just clone everything from stash to display for now.
        Array.from(stash.children).forEach(child => {
            display.appendChild(child.cloneNode(true));
        });
    } else {
        // Find specific target in stash
        const target = stash.querySelector('#' + targetId);
        if (target) {
            display.appendChild(target.cloneNode(true));
        } else {
            display.innerHTML = '<div style="padding:20px; text-align:center; color:#666;">Content not found for ID: ' + targetId + '</div>';
        }
    }
    
    // Send height update
    setTimeout(function(){
        window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'contentSize',
            height: display.scrollHeight + 40 // Add buffer
        }));
    }, 100);
  };

  // Initial Check
  if (window.pendingTarget) {
      window.showOnlyTarget(window.pendingTarget);
      window.pendingTarget = null;
  }
})();
`;

export const HTMLPanelRenderer = memo(({ htmlUri, htmlContent, targetId, style }: RenderPanelProps) => {
    const webviewRef = useRef<WebView>(null);
    const [height, setHeight] = useState(200);

    const runScript = (id: string) => {
        const js = `
            if (window.showOnlyTarget) {
                window.showOnlyTarget('${id}');
            } else {
                window.pendingTarget = '${id}';
            }
            true;
        `;
        webviewRef.current?.injectJavaScript(js);
    };

    // Update view when targetId changes
    React.useEffect(() => {
        runScript(targetId);
    }, [targetId]);

    // Construct source object
    const source = React.useMemo(() => {
        if (htmlContent) {
            // Inject MathJax if not present
            let content = htmlContent;
            if (!content.includes('MathJax')) {
                const mathJaxScript = `
                <script type="text/javascript" id="MathJax-script" async
                  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
                </script>
                <script>
                window.MathJax = {
                  tex: {
                    inlineMath: [['\\\\(', '\\\\)'], ['$', '$']],
                    displayMath: [['\\\\[', '\\\\]'], ['$$', '$$']]
                  },
                  startup: {
                    typeset: false 
                  }
                };
                // Trigger typeset after dynamic content change
                window.addEventListener('load', () => {
                   if(window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
                });
                </script>
                `;
                if (content.includes('</head>')) {
                    content = content.replace('</head>', `${mathJaxScript}</head>`);
                } else {
                    content = `<html><head>${mathJaxScript}</head><body>${content}</body></html>`;
                }
            }
            // Add custom CSS for professional look
            const customCSS = `
            <style>
                body { 
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                    background-color: #ffffff; 
                    margin: 0; 
                    padding: 0;
                }
                #active-display {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #333;
                }
                .question-step {
                    margin-bottom: 15px;
                    padding: 10px;
                    background: #f9f9f9;
                    border-radius: 8px;
                    border-left: 4px solid #6200EA;
                }
                img { max-width: 100%; height: auto; }
            </style>
            `;
            content = content + customCSS;

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
                            // Ensure min height
                            setHeight(Math.max(data.height, 200));
                        }
                    } catch (e) { }
                }}
                style={styles.webview}
                scrollEnabled={false}
                onLoadEnd={() => runScript(targetId)}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
        overflow: 'hidden',
    },
    webview: {
        backgroundColor: 'transparent',
    },
});
