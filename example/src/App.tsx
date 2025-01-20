import { View, Text } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import { MyWebView } from 'react-native-demo-sdk';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import WebView from 'react-native-webview';

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        marginBottom: insets.bottom,
      }}
    >
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          // navigation.push('MyWebView')
          /* 1. Navigate to the Details route with params */
          // navigation.navigate('MyWebView');
          navigation.navigate(
            'MyWebView',

            {
              navigation: navigation,
              itemId: 86,
              otherParam: 'anything you want here',
              // uri: 'https://reactnative.dev/'
              uri: 'https://test22.mobio.vn/?id=67860a34f091f14b3bb27db2&domain=https://t1.mobio.vn/&email=nam@gmail.com&name=nam&phone=09337737373&team-id=ahshssh&full-screen=true',
              // uri: "https://test22.mobio.vn/?id=64dae67aae41e75dbd6c1d21&domain=https://t1.mobio.vn%2F&full-screen=true"
            }
          );
        }}
      >
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen({ route }) {
  const navigation = useNavigation();

  /* 2. Get the param */
  const { itemId, otherParam } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
      }}
    >
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      >
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

// function LiveChatScreen() {
//   const injectScript = ` const meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'); document.head.appendChild(meta); `;
//   return <View style={{flex: 1}}>
//     <WebView
//             // ref={(ref) => (this.webview = ref)}
//             // style={{
//             //   paddingBottom: Device.BottomBar,
//             // }}
//             // containerStyle={{
//             //   paddingBottom: Device.BottomBar,
//             //   // paddingHorizontal: 5,
//             //   // width: 0,
//             //   // height: 1
//             // }}
//             // source={{ uri: 'https://codepen.io/rossmartin/full/XJmpQr' }}
//             // source={{ uri: 'https://test22.mobio.vn/?id=64dae67aae41e75dbd6c1d21&domain=https:%2F%2Ft1.mobio.vn%2F&full-screen=true' }}
//             // source={{ uri: 'https://test22.mobio.vn/?id=64dae67aae41e75dbd6c1d21&domain=https:%2F%2Ft1.mobio.vn%2F&full-screen=true' }}
//             source={{ uri: "https://test22.mobio.vn/?id=676d235df091f14b3b05b8b1&domain=https://t1.mobio.vn/&email=nam@gmail.com&name=nam&full-screen=true" }}
//             injectedJavaScript={injectScript}
//             // source={{ uri: 'https://ck.mobio.io/web-public/chattool/?id=61dcf156bd1eefb65090ef62&domain=https://ck.mobio.io' }}
//             // injectedJavaScriptBeforeContentLoaded={injectScript}
//             // source={{ html }}
//             // source={{ uri: 'https://webview-keyboard-issue.vercel.app' }}

//             // injectedJavaScript={injectScript}
//             // scalesPageToFit={false}
//             // scrollEnabled={false}
//             // bounces={false}
//             // automaticallyAdjustContentInsets={false}
//             onMessage={(event) => {
//               console.log('event', event);

//             }}
//           // onMessage={() => {

//           // }}
//           />

//   </View>

// }

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
    MyWebView: {
      screen: MyWebView,
      options: {
        headerShown: false,
        // title: 'Supporter'
        // headerShown: false
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
