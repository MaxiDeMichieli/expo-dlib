import { StyleSheet, Text, View } from 'react-native';

import * as ExpoDlib from 'expo-dlib';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoDlib.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
