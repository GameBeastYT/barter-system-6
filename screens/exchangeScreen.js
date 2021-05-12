import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class Exchange extends React.Component {
    constructor() {
        super()
        this.state = {
            title = "",
            description = "",
            userID: firebase.auth().currentUser.email
        }
    }

addItem = (title, description)=>{
db.collection("items").add({
    item_name: title,
    item_description: description,
    userID: this.state.userID
})
this.setState({title: "", description: ""})
}

    render() {
        return (
            <View>
                <TextInput style={styles.inputBox}
                    placeholder="Item Name"
                    onChangeText={text=>{this.setState({title:text})}} />

                <TextInput style={styles.inputBox}
                    placeholder="Item Description"
                    multiline={true}
                    onChangeText={text=>{this.setState({description:text})}} />

                    <TouchableOpacity style={styles.buttton}
                    onPress={()=>{this.addItem(this.state.title, this.state.description)}}>
                        <Text>
                            Add Item
                        </Text>
                    </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        width: 200,
        height: 50
    },
    buttton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 3,
        borderWidth: 1,
        height: 30,
        width: 100


    }
})