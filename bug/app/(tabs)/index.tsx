
import {  StyleSheet, View } from 'react-native';


import WebView from 'react-native-webview';
const defaultMenuItems = [
  { label: "Tweet", key: "tweet" },
  { label: "Save", key: "save" },
  { label: "Highlight", key: "highlight" },
  { label: "Copy", key: "copy" },
  { key: "red", label: "Red" },
  { key: "green", label: "Green" },
  { key: "blue", label: "Blue" },
];

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>WebView Menu Test</title>
    <style>
      body {
        font-family: sans-serif;
        padding: 24px;
        line-height: 1.7;
      }
      .highlight {
        background: yellow;
      }
    </style>
  </head>
  <body>
    <h1>WebView Menu Test</h1>
    <p>
      This is a long paragraph of text for testing the custom context menu in your React Native WebView. 
      You can select any part of this text to trigger the menu. Try selecting different sentences, words, or even this entire paragraph to see how your menu behaves.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. 
      Suspendisse potenti. Proin ac neque nec sapien dictum ultricies. 
      <span class="highlight">This sentence is highlighted for visibility.</span>
      Vivamus euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.
    </p>
    <p>
      More sample text: The quick brown fox jumps over the lazy dog. 
      The five boxing wizards jump quickly. 
      Pack my box with five dozen liquor jugs.
    </p>
    <p>
      End of test content. Select any text to see your custom menu in action!
    </p>
  </body>
</html>
`;
export default function HomeScreen() {
   const handleCustomMenuSelection = (event) => {
    const { key } = event.nativeEvent;
    console.log(`Selected menu item: ${key}`);
  };
  return (
   <View style={styles.container}>
      <WebView
        style={{ flex: 1 }}
        source={{ html }}
        menuItems={defaultMenuItems}
        onCustomMenuSelection={handleCustomMenuSelection}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

