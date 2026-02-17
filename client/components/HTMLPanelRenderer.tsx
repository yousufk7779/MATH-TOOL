
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
  // Inject CSS dynamically to ensure it works for both String and URI content
  const style = document.createElement('style');
  style.innerHTML = \`
    @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
    
    /* Universal Dark Theme Reset */
    * { color: #E0E0E0 !important; } 
    
    body { 
        font-family: 'Kalam', cursive, sans-serif !important; 
        background-color: #1A1A2E !important; 
        margin: 0; 
        padding: 0;
        font-size: 18px;
    }

    /* Container Styling */
    #active-display {
        background-color: #1A1A2E !important;
        padding: 20px;
    }

    /* Override specific classes from original HTML to separate them from background */
    .content-box {
        background-color: #1A1A2E !important; 
        border: none !important;
        padding: 10px 0;
        margin-bottom: 20px;
    }

    .question {
        font-family: 'Kalam', cursive, sans-serif !important;
        font-weight: 700 !important;
        font-size: 1.2em !important;
        color: #FFFFFF !important; /* Pure White */
        margin-bottom: 15px;
    }

    .sub-question {
        font-family: 'Kalam', cursive, sans-serif !important;
        font-weight: 600 !important;
        color: #FFD700 !important; /* Gold for sub-headers */
        margin-left: 0 !important; /* Reset margin for cleaner mobile look */
        margin-top: 15px;
    }

    .step {
        font-family: 'Kalam', cursive, sans-serif !important;
        color: #E0E0E0 !important; /* Off-white for body text */
        line-height: 1.6 !important;
        margin-bottom: 10px;
        background: #16213E !important; /* Card-like background for steps */
        padding: 10px;
        border-radius: 8px;
        border-left: 4px solid #E94560; /* Accent Border */
    }

    .solution-header {
        color: #4CAF50 !important; /* Green for 'Solution:' */
        font-weight: bold !important;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .final-answer {
        color: #4CAF50 !important;
        background-color: rgba(76, 175, 80, 0.1) !important;
        padding: 10px;
        border-radius: 8px;
        margin-top: 15px;
        font-weight: bold;
    }

    .formula {
        color: #FF4081 !important; /* Pink for formulas */
    }

    /* MathJax Overrides */
    .mjx-chtml { color: #FFFFFF !important; outline: none !important; }
    .mjx-math { color: #FFFFFF !important; }
    
    /* Images */
    img { 
        max-width: 100%; 
        height: auto; 
        background: #fff; /* Keep white bg for diagrams so they are visible */
        padding: 5px;
        border-radius: 8px;
        display: block;
        margin: 10px auto;
    }
    
    b, strong { color: #FFD700 !important; }
  \`;
  document.head.appendChild(style);

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
    // copying children carefully to avoid moving the scripts or styles we just added?
    // Actually, we should only move 'content' elements.
    // But simplistic approach: move everything that is NOT our new containers.
    // To be safe, let's iterate backwards or use a specific selector if possible?
    // HTML structure usually has <div class="content-box"> etc.
    // Let's move all DIVs that are not our IDs.
    
    // Better strategy: Move ALL children initially, then append display and stash.
    const children = Array.from(document.body.children);
    children.forEach(child => {
        if (child.id !== 'MathJax-script' && child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') {
             stash.appendChild(child);
        }
    });

    document.body.appendChild(display);
    document.body.appendChild(stash);
  }

  window.showOnlyTarget = function(targetId) {
    initStructure();
    
    const stash = document.getElementById('full-content-stash');
    const display = document.getElementById('active-display');
    
    if (!stash || !display) return;

    display.innerHTML = '';
    
    if (!targetId) {
        // Show everything
        Array.from(stash.children).forEach(child => {
            display.appendChild(child.cloneNode(true));
        });
    } else {
        const target = document.getElementById(targetId); 
        // Note: getElementById finds elements in stash even if hidden.
        
        if (target && stash.contains(target)) {
             display.appendChild(target.cloneNode(true));
        } else {
             // Fallback: search in stash by query selector if getElementById failed or node moved weirdly
             const deepTarget = stash.querySelector('[id="' + targetId + '"]');
             if (deepTarget) {
                 display.appendChild(deepTarget.cloneNode(true));
             } else {
                 display.innerHTML = '<div style="padding:20px; text-align:center; color:#888;">Select a question to view details.</div>';
             }
        }
    }
    
    setTimeout(function(){
        window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'contentSize',
            height: display.scrollHeight + 60
        }));
    }, 200);
  };
})();
`;

export const HTMLPanelRenderer = memo(({ htmlUri, htmlContent, targetId, style }: RenderPanelProps) => {
    const webviewRef = useRef<WebView>(null);
    const [height, setHeight] = useState(300);

    const runScript = (id: string) => {
        const js = `
            if (window.showOnlyTarget) {
                window.showOnlyTarget('${id}');
            } else {
                window.pendingTarget = '${id}';
                // Retry
                setTimeout(() => { if(window.showOnlyTarget && window.pendingTarget) window.showOnlyTarget(window.pendingTarget); }, 500);
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
            // Minimal injection for MathJax, CSS handled by JS now
            let content = htmlContent;
            if (!content.includes('MathJax')) {
                const mathJaxScript = `
                <script type="text/javascript" id="MathJax-script" async
                  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
                </script>
                <script>
                window.MathJax = {
                  tex: { inlineMath: [['\\\\(', '\\\\)'], ['$', '$']] },
                  startup: { typeset: false }
                };
                window.addEventListener('load', () => {
                   if(window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise();
                });
                </script>`;
                if (content.includes('</head>')) {
                    content = content.replace('</head>', `${mathJaxScript}</head>`);
                } else {
                    content = `<html><head>${mathJaxScript}</head><body>${content}</body></html>`;
                }
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
                            // Ensure min height
                            setHeight(Math.max(data.height, 300));
                        }
                    } catch (e) { }
                }}
                style={styles.webview}
                scrollEnabled={false}
                onLoadEnd={() => runScript(targetId)}
                androidLayerType="hardware"
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
