import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BtnLogin = ({label}) => {
    return(
        <TouchableOpacity style={style.btn}>
        <Text style={style.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    btn:{
        marginTop:20,
        height:55,
        width:'100%',
        backgroundColor:'#F0D800',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{fontSize:20,fontWeight:'700',color:'#fff'}
});
export default BtnLogin;