import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeartRate from '../HeartRate/HeartRate';

const Home = () => {
  // const [showMenu, setShowMenu] = useState(false);
  // const [menuIconRotation] = useState(new Animated.Value(0));

  // const toggleMenu = () => {
  //   if (!showMenu) {
  //     setShowMenu(true);
  //     Animated.timing(menuIconRotation, {
  //       toValue: 1,
  //       duration: 200,
  //       useNativeDriver: true,
  //     }).start();
  //   } else {
  //     Animated.timing(menuIconRotation, {
  //       toValue: 0,
  //       duration: 200,
  //       useNativeDriver: true,
  //     }).start(() => setShowMenu(false));
  //   }
  // }

  // const menuStyle = [
  //   styles.menu,
  //   { top: 60 },
  //   { transform: [{ translateX: showMenu ? 0 : -200 }, { scaleY: showMenu ? 1 : 0 }] },
  //   { zIndex: 999 },
  // ];

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={{marginTop: 10, marginLeft: 10}}>
          <Animated.View style={{ transform: [{ rotate: menuIconRotation.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }] }}>
            <Ionicons name="menu-outline" size={30} color="white" />
          </Animated.View>
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
      </View> */}
      <HeartRate />
      {/* <View style={menuStyle}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Option 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Hello, world!</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 999,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4a90e2',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize:   20,
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    left: 0,
    width: 200,
    height: '120%',
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ddd',
    opacity: 1,
  },
  menuItem: {
    padding: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
