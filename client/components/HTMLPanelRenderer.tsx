
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
  function showOnlyTarget(targetId) {
    if (!targetId) {
        // If no target, show everything
        document.body.style.display = 'block';
        setTimeout(function(){
            window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'contentSize',
                height: document.body.scrollHeight || document.documentElement.scrollHeight
            }));
        }, 100);
        return;
    }

    // Hide everything first
    document.body.style.display = 'none';

    let element = document.getElementById(targetId);

    if (element) {
      const clone = element.cloneNode(true);
      document.body.innerHTML = '';
      document.body.appendChild(clone);
      document.body.style.display = 'block';
      document.body.style.padding = '20px';
      document.body.style.backgroundColor = '#fff';
      
      // Notify RN that content is ready/height changed
      setTimeout(function(){
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'contentSize',
            height: document.body.scrollHeight
          }));
      }, 100);
    } else {
       document.body.innerHTML = '<div style="padding:20px;">Content not found</div>';
       document.body.style.display = 'block';
    }
  }

  // Listen for messages from RN to update target
  window.document.addEventListener('message', function(e) {
    try {
        const data = JSON.parse(e.data);
        if (data.targetId) {
            showOnlyTarget(data.targetId);
        }
    } catch(err) {}
  });
})();
`;

export const HTMLPanelRenderer = memo(({ htmlUri, htmlContent, targetId, style }: RenderPanelProps) => {
    const webviewRef = useRef<WebView>(null);
    const [height, setHeight] = useState(100);

    const script = INJECTED_SCRIPT + ` showOnlyTarget('${targetId}');`;

    // Construct source object
    const source = htmlContent
        ? { html: htmlContent, baseUrl: '' }
        : { uri: htmlUri || '', baseUrl: '' };

    return (
        <View style={[styles.container, style, { height }]}>
            <WebView
                ref={webviewRef}
                originWhitelist={['*']}
                allowFileAccess={true}
                allowFileAccessFromFileURLs={true}
                allowUniversalAccessFromFileURLs={true}
                source={source}
                injectedJavaScript={script}
                onMessage={(event) => {
                    try {
                        const data = JSON.parse(event.nativeEvent.data);
                        if (data.type === 'contentSize' && data.height) {
                            setHeight(data.height);
                        }
                    } catch (e) { }
                }}
                style={styles.webview}
                scrollEnabled={false}
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
