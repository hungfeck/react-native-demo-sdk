import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MyWebView = ({ uri }: { uri: string }) => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: uri }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'orange' },
  webview: { flex: 1 },
});

export default MyWebView;
