import { StyleSheet, Text, View } from 'react-native';



export const TexTer = () => {

  return (
    <View style={styles.container}>
      <Text>You pressed 3 times</Text>
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