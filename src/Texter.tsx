import * as React from 'react';
import { Button, NativeModules, StyleSheet, Text, useColorScheme, View } from 'react-native';

interface Props {
}



export const TexTer: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <Text>You pressed {count} times</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  }
})