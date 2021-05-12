import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/signUpLoginScreen'
import {BottomTabNavigator} from './components/bottomTabNavigator'
import {createAppContainer} from 'react-navigation'
import homeScreen from './screens/homeScreen'
import exchangeScreen from './screens/exchangeScreen'
import DrawerNavigator from './components/drawerNavigator'
import Drawer from 'react-navigation-drawer'

export default function App() {
  return (
   <appContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Drawer : { screen: DrawerNavigator }
})

const appContainer = createAppContainer(BottomTabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
