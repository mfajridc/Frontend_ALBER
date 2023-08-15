import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { fonts } from "../../assets/fonts";
import { ILogo } from "../../assets/icons";

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => { 
            navigation.replace('WelcomePage');
        }, 2000);
    }, []);
    return (
        <View style={style.container}>
            <Image source={ILogo} style={{ width: 70, height: 70 }}/>
            <Text style={style.name}> alber.
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color:'#06AC4D', 
        fontFamily: 'Poppins-Bold',
        marginTop: 8
    }
});

export default SplashScreen;