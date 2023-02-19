import React, { Component } from "react";
import{View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Button} from "react-native";
import { IGambarLogo } from "../../assets/images";
import { BtnLogin, Input } from "../../assets/components/atom";
import {WelcomePage} from "../WelcomePage";
import axios from 'axios';


export default class Register extends Component 
{
    constructor(props){
        super(props);
        this.state={
            FullName:'',
            UserName:'',
            Password:''
        };
    }

    login = () => {
        var FullName = this.state.FullName;
        var UserName = this.state.UserName;
        var Password = this.state.Password;


        if ((FullName.length == 0) || (Password.length == 0) || (UserName.length == 0)) {
            alert("Required Field Is Missing!");
        } else if (Password.length < 8) {
            alert("Minimum 08 characters required!!!");
        }

        else {
            var InsertAPIURL ="http://192.168.43.95/backend/register.php";

            var headers = {
                'Access-Control-Allow-Origin': 'true',
                'Content-Type': 'application/json',
            };

            var Data = {
                FullName: FullName,
                UserName: UserName,
                Password: Password
            };


            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body: JSON.stringify(Data)
                })
                .then((response) => response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                    this.props.navigation.navigate("WelcomePage");
                })
                .catch((error)=>
                {
                    alert("Error"+error);
                })

            // axios.post('http://10.14.16.38/backend/register.php', JSON.stringify(Data), headers)
            //     .then((response) => {
            //         console.log(response);
            //         console.log(response.data[0].Message)
            //         if (response.data[0].Message == "Registered successfully!") {
            //             this.props.navigation.navigate("WelcomePage");
            //         }
            //     });

        }
    }


    render() 
    {
    return(
        <ScrollView style={style.container}>
            <View style={style.wrapper}>
                <Image source={IGambarLogo} style={style.gambar} />
                <Text style={style.name}>
                    Register
                </Text>
            </View>
            <Input label="Full Name" 
            placeholder="Input Full Name" 
            onChangeText={FullName=>this.setState({FullName})}
            />
            <Input label="Username" placeholder="Input Username" 
                onChangeText={UserName =>this.setState({UserName})}
            />
            <Input label="Password" placeholder="Input Password" password 
                onChangeText={Password =>this.setState({Password})}
            />
            
            <TouchableOpacity style={style.btn} title={"Register"}
            onPress={this.login} >
            <Text style={style.text}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

}

const style = StyleSheet.create({
    container: { flex: 1, padding: 25 },
    wrapper: { alignItems: 'center', marginBottom: 10 },
    gambar: { height: 42, width: 309, marginBottom: 34, marginTop: 70 },
    name: { fontSize: 22, fontWeight: '700', color: '#3C3C3C' },
    forgotPassword: { fontSize: 14, fontWeight: '400', color: '#707070', marginTop: 5 },
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


// AppRegistry.registerComponent('Register', () => Register);