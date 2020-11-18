
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// COMPONENTS
import Home from './src/Pages'
import MainStack from './src/Pages/MainStack'

export default function App() {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={ styles.container }>
      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFF',
    width: 400,
    height: 550,
  },
});
