import { NativeModules, Platform, Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

// import MyWebView from './MyWebView';

const LINKING_ERROR =
  `The package 'react-native-demo-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const DemoSdk = NativeModules.DemoSdk
  ? NativeModules.DemoSdk
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

export function multiply(a: number, b: number): Promise<number> {
  return DemoSdk.multiply(a, b);
}

const TexTer = () => {

  return (
    <View>
      <Text>You pressed 3 times</Text>
    </View>
  )
}

const MyWebView = ({ route }: { route: any }) => {

  const { uri } = route.params;
  return (
    <View style={styles.container}>
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
      <WebView
        style={styles.webview}
        source={{ uri }}
        automaticallyAdjustContentInsets={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "blue" },
  webview: { flex: 1 }
});

export { TexTer, MyWebView }

