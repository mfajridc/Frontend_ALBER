import React, { Component } from "react";
import {View, Text, StyleSheet,Image, ScrollView, TouchableOpacity, Keyboard, Alert} from 'react-native';
import { IGambarLogo } from "../../assets/images";
import {BtnLogin, Input} from "../../assets/components/atom";
import Loading from 'react-native-whc-loading';

export default class Login extends Component 
{ 
    constructor(props) {
        super(props)
        this.state = {
            UserName: '',
            Password: ''
        };
    }

    login = () => {
        var UserName = this.state.UserName;
        var Password = this.state.Password;
        var InsertAPIURL = "http://192.168.43.95/backend/login.php";

        var headers = {
            'Access-Control-Allow-Origin': 'true',
            'Content-Type': 'application/json',
        };

        var Data = {
            UserName: UserName,
            Password: Password
        };

        fetch(InsertAPIURL,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data)
        })
        .then((response) => response.json())
        .then((response) => {
            if (response === 'Data Matched') {
                alert("Successfully Login");
                this.props.navigation.navigate("HomeScreen");
            } else {
                alert("Incorrect");
            }
        })
        .catch((error)=>{
            console.error(error);
        });

        Keyboard.dismiss();
    }

    render(){

    return(
        <ScrollView style={style.container}>
            <View style={style.wrapper}>
            <Image source={IGambarLogo} style={style.gambar} />
            <Text style={style.name}>
              Log In
            </Text>
            </View>
            <Input label="Username" placeholder="Input Username"
                onChangeText={UserName => this.setState({ UserName })}
            />
            <Input label="Password" placeholder="Input Password" password 
                onChangeText={Password => this.setState({ Password })}
            />
            <Text style={style.forgotPassword}>Forgot Password?</Text>
            <TouchableOpacity style={style.btn} title={"Register"}
                onPress={this.login} >
                <Text style={style.text}>Login</Text>
            </TouchableOpacity>
        </ScrollView>
    );
    }
};

const style = StyleSheet.create({
    container: {flex:1, padding:25},
    wrapper: {alignItems: 'center', marginBottom: 10},
    gambar:{height: 42, width: 309, marginBottom:34, marginTop:70},
    name:{fontSize: 22, fontWeight: '700', color:'#3C3C3C'},
    forgotPassword: { fontSize: 14, fontWeight: '400', color:'#707070', marginTop:5},
    btn: {
        marginTop: 20,
        height: 55,
        width: '100%',
        backgroundColor: '#F0D800',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: { fontSize: 20, fontWeight: '700', color: '#fff' }
});
 