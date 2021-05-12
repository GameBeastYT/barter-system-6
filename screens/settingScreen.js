import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class SettingScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            FirstName: '',
            LastName: '', Address: '',
            Email: '',
            PhoneNumber: '',
            DocID: ''
        }
    }

    getUserDetails = () => {
        var user = firebase.auth().currentUser.email
        db.collection('users').where('email_id', '==', user).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    var data = doc.data()
                    this.setState({
                        Email: data.email_id,
                        FirstName: data.first_name,
                        LastName: data.last_name,
                        Address: data.address,
                        PhoneNumber: data.contact,
                        DocID: doc.id
                    })
                })
            })
    }

    update = () => {
        db.collection('users').doc(this.state.DocID).update({
            'First Name': this.state.FirstName,
            'last Name': this.state.Last_Name,
            'Address': this.state.Address,
            'Mobile Number': this.state.Mobile_Number
        })
    }

    componentDidMount(){
        this.getUserDetails()
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder={'First Name'}
                    onChangeText={ (text)=>{this.setState({FirstName: text})} }
                    value={ this.state.FirstName } />

<TextInput
                    placeholder={'Last Name'}
                    onChangeText={ (text)=>{this.setState({LastName: text})} }
                    value={ this.state.LastName } />

<TextInput
                    placeholder={'Address'}
                    onChangeText={ (text)=>{this.setState({Address: text})} }
                    value={ this.state.Address } />

<TextInput
                    placeholder={'Contact'}
                    onChangeText={ (text)=>{this.setState({PhoneNumber: text})} }
                    value={ this.state.PhoneNumber } />

                    <TouchableOpacity
                    onPress={()=>{this.update()}}>
                        <Text>
                            Save
                        </Text>
                    </TouchableOpacity>

            </View>
        )
    }
}