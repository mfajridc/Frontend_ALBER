import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

const Form = () => {
    return(
        <View style={style.container}>
        <Text style={style.label}>No Order</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        marginBottom:10
    },
    label:{
        marginVertical:5,
        fontSize:16,
        color:'#858585',
    }
});

export default Form;