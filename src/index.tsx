// import { useNavigation } from '@react-navigation/core';
import {
  NativeModules,
  Platform,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';
// import DeviceInfo from 'react-native-device-info';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useRef } from 'react';
// const { StatusBarManager } = NativeModules;

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
  );
};

const MyWebView = ({ route }: { route: any }) => {
  // const insets = useSafeAreaInsets();
  // const webViewRef = useRef(null);
  // const injectScript = ` const meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'); document.head.appendChild(meta); `;
  // const injectScript1 = `
  //   const meta = document.createElement('meta');
  //   meta.setAttribute('name', 'viewport');
  //   meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  //   document.head.appendChild(meta);
  // `;
  // const injectedJavaScript = `
  //   (function() {
  //     const metaTag = document.createElement('meta');
  //     metaTag.name = 'viewport';
  //     metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
  //     document.head.appendChild(metaTag);
  //   })();
  //   true; // Đảm bảo script không bị lỗi trên Android
  // `;

  const { uri, navigation } = route.params;
  // const navigation = useNavigation();
  // const barHeight = StatusBarManager.HEIGHT;
  const barHeight = getStatusBarHeight();
  const headerHeight = 44;
  // const platformIOS = Platform as PlatformIOSStatic
  return (
    <View style={[styles.container, { paddingBottom: 0 }]}>
      {/* <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
      <StatusBar translucent barStyle={'dark-content'} />
      <View style={{
        width: '100%',
        height: barHeight + headerHeight,
        paddingTop: barHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>Vikki Care</Text>
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
      <WebView
        style={styles.webview}
        source={{ uri }}
        // injectedJavaScript={injectScript}
        // onLoadEnd={() => {
        //   // webViewRef.current?.
        //   if (webViewRef?.current) {
        //     webViewRef.current.injectJavaScript(injectScript);
        //   }
        // }}
        // scalesPageToFit={false}
        // scrollEnabled={false}
        // bounces={false}
        // automaticallyAdjustContentInsets={false}
        // javaScriptEnabled={true}
        // domStorageEnabled={true}
        // scalesPageToFit={false} // Ngăn trang tự động thay đổi kích thước
        // originWhitelist={['*']}
        startInLoadingState={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingBottom:
    // backgroundColor: 'transparent',
    // paddingBottom: insets.bottom
  },
  webview: { flex: 1 },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export { TexTer, MyWebView };
