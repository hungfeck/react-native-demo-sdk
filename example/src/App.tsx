import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { multiply } from 'react-native-demo-sdk';
import WebView from 'react-native-webview';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Result: {result}</Text> */}
      <View style={{ height: 300, backgroundColor: 'red', width: 200 }}>
        <WebView source={{ uri: 'https://reactnative.dev/' }} />

      </View>
      {/* <MyWebView uri='https://www.npmjs.com/package/react-native-webview' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
});
