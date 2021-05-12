import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import db from '../config'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import exchangeScreen from '../screens/exchangeScreen'
import homeScreen from '../screens/homeScreen'
import SettingScreen from '../screens/settingScreen'

export const BottomTabNavigator = createBottomTabNavigator({
    home: {screen:homeScreen},
    exchange: {screen:exchangeScreen},
    Settings: {screen:SettingScreen}
})