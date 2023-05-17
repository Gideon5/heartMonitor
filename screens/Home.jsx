import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from '../components/BottomNav/Tabs';
import { SafeAreaView } from 'react-navigation';


// const HomePage = () => {
//   return (
//     <View style={styles.container}>
//         <Text style={styles.welcome}>sWelcome Home!</Text>
//     </View>
//   );
// };

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Tabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
