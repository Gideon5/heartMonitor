import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header/Header';
import Bottom from '../components/BottomNav/Bottom';
import Status from '../components/Status/Status';
import { SafeAreaView } from 'react-navigation';
import SessionAction from '../components/SessionBtn/SessionAction';


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
      <Header title="My App" />
      {/* <HomePage /> */}
      < SessionAction />
      <Status />
      <Bottom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
