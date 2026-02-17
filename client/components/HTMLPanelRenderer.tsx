
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
        // If no target, show everything and report full height
        document.body.style.display = 'block';
        window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'contentSize',
            height: document.body.scrollHeight || document.documentElement.scrollHeight
        }));
        return;
    }

    // Hide everything first
    document.body.style.display = 'none';

    // Find the target element
    // We handle different selectors: ID, or class based if structured that way.
    // The requirement says "Extract only selected .question block via DOM"
    // Since IDs are usually unique, let's assume valid IDs or specific classes
    
    // Attempt 1: Get by ID
    let element = document.getElementById(targetId);

    // Attempt 2: If ID not found, maybe search inside questions
    if (!element) {
        // Fallback or specific logic for class-based selection
        // For now, let's assume we pass a valid ID or selector
    }

    if (element) {
      // Clone the element to isolate it
      const clone = element.cloneNode(true);
      
      // Clear body and append only the clone
      document.body.innerHTML = '';
      document.body.appendChild(clone);
      document.body.style.display = 'block'; // Show body again

      // Optional: Add some padding/styling for the panel view
      document.body.style.padding = '20px';
      document.body.style.backgroundColor = '#fff';
      
      // Notify RN that content is ready/height changed
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'contentSize',
        height: document.body.scrollHeight
      }));
    } else {
       // Start empty if not found
       document.body.innerHTML = '<div style="padding:20px;">Content not found</div>';
       document.body.style.display = 'block';
    }
  }

  // Listen for messages from RN to update target
  window.document.addEventListener('message', function(e) {
    const data = JSON.parse(e.data);
    if (data.targetId) {
        showOnlyTarget(data.targetId);
    }
  });

  // Initial Check (if targetId passed via URL param or similar, though better via inject)
})();
`;

export const HTMLPanelRenderer = memo(({ htmlUri, htmlContent, targetId, style }: RenderPanelProps) => {
    const webviewRef = useRef<WebView>(null);
    const [height, setHeight] = useState(100);

    const script = INJECTED_SCRIPT + ` showOnlyTarget('${targetId}');`;

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
                scrollEnabled={false} // Panel usually adjusts height to content
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
