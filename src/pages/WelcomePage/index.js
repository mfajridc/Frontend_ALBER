import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Button } from "../../assets/components/atom";
import { ISplash } from "../../assets/images"

const WelcomePage = ({navigation}) => {
    return(
        <ImageBackground source={ISplash} style={style.container}>
            <Text>
                 
            </Text>
            <View style={style.parent}> 
            <Button 
            label={"Log In"} type={"accent"} 
            onPress={() => {
                navigation.navigate('Login');
                }} 
                /> 
            <Button label={"Register"} type={"primary"} 
                onPress={() => {
                    navigation.navigate('Register');
                }}
            />
            </View>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    parent:{
        flex:1,
        flexDirection:"row",
        padding:12,
        justifyContent:"space-around",
    }
});

export default WelcomePage;