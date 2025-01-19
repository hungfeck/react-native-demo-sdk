import { NativeModules, Platform, Text, View } from 'react-native';

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

export { TexTer }
