import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function HomeScreen() {

  const insets = useSafeAreaInsets();


  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1, justifyContent: 'start', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 40, color: 'white' }}>Hello</Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
