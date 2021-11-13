import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Intro1 from './src/screens/Intro1';
import Intro2 from './src/screens/Intro2';
import Intro3 from './src/screens/Intro3';
import Intro4 from './src/screens/Intro4';
import Intro10 from './src/screens/Intro10';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      {/* <Intro1/> */}
      {/* <Intro2 /> */}
      {/* <Intro3 /> */}
      {/* <Intro4 /> */}
      <Intro10 />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
