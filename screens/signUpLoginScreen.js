import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "", password: "",
            First_Name: "",
            Last_Name: "",
            Username: "",
            Email: "",
            Password: "",
            Confirm_Password: "",
            Mobile_Number: '',
            Is_Modal_Visible: 'false',
            Address: ''

        }
    }

    showModal = () => {
        return (
            <Modal transparent={false}
                visible={this.state.Is_Modal_Visible}
            >

                <View style={styles.container}>
                    <ScrollView style={{ width: '100%' }}>
                        <KeyboardAvoidingView >
                            <Text>
                                Register Here
</Text>

                            <TextInput style={styles.inputBox}
                                placeholder={"First Name"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ First_Name: text }) }} />

                            <TextInput style={styles.inputBox}
                                placeholder={"Last Name"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Last_Name: text }) }} />

                            <TextInput style={styles.inputBox}
                                placeholder={"Address"}
                                multiline={true}
                                onChangeText={text => { this.setState({ Address: text }) }} />

                            <TextInput style={styles.inputBox}
                                placeholder={"Username"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Username: text }) }} />

                            <TextInput style={styles.inputBox}
                                placeholder={"Email"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Email: text }) }} />

                            <TextInput style={styles.inputBox}
                                placeholder={"Password"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Password: text }) }}
                                secureTextEntry={true} />

                            <TextInput style={styles.inputBox}
                                placeholder={"Confirm Pasword"}
                                maxLength={20}
                                onChangeText={text => { this.setState({ Confirm_Password: text }) }}
                                secureTextEntry={true} />

                            <TextInput style={styles.inputBox}
                                placeholder={"Phone Number"}
                                maxLength={10}
                                onChangeText={text => { this.setState({ Mobile_Number: text }) }}
                                keyboardType={'numeric'} />
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', margin: 20, borderRadius: 40 }}>
                                <TouchableOpacity onPress={() => { this.userSignUp(this.state.email, this.state.password, this.state.Confirm_Password) }}
                                    style={[styles.buttton, { backgroundColor: 'green' }]}>
                                    <Text>
                                        Sign Up
                                    </Text>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => { this.setState({ Is_Modal_Visible: false }) }}
                                    style={[styles.buttton, { backgroundColor: 'red' }]}>
                                    <Text>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>

            </Modal>
        )


    }

    userSignUp = (email, password, Confirm_Password) => {
        // if (password === Confirm_Password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                // Signed in 
                db.collection("users").add({
                    'First_Name': this.state.First_Name,
                    'Last_Name': this.state.Last_Name,
                    'Email': this.state.Email,
                    'Username': this.state.Username,
                    'Password': this.state.Password,
                    "Confirm_Password": this.state.Confirm_Password,
                    'Number': this.state.Mobile_Number,
                    'Address': this.state.Address
                })
                return (
                    Alert.alert("Account created!")
                )
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            });
        //     } 
        //   else
        //   Alert.alert("The password doesn't match")

    }

    userLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                return Alert.alert("User Logged In Successfully")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            });
    }

    render() {
        return (
            <View style={styles.container}>

                {this.showModal()}

                <TextInput placeholder="email address"
                    keyboardType="email-adress"
                    onChangeText={text => { this.setState({ email: text }) }}
                    style={styles.inputBox} />

                <TextInput placeholder="password"
                    secureTextEntry={true}
                    onChangeText={text => { this.setState({ password: text }) }}
                    style={styles.inputBox} />

                <TouchableOpacity onPress={() => { this.userLogin(this.state.email, this.state.password) }}
                    style={styles.button} >
                    <Text>
                        Login
                        </Text>
                </TouchableOpacity>
                <Text>
                    If you don't have an account, create one now by signing up!
</Text>
                <TouchableOpacity onPress={() => { this.setState({ Is_Modal_Visible: true }) }}
                    style={styles.button} >
                    <Text>
                        Sign Up
                        </Text>
                </TouchableOpacity>
            </View >
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