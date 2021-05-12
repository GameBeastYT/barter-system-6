import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    HomeScreen
                </Text>
                
            </View>
        )
    }
}