import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { IBack, ILogoo } from "../../assets/icons";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';
import { Input } from "../../assets/components/atom";
import { IExcav,IForklift, IWheelouder } from "../../assets/images";

const AlberVisualization = ({ navigation }) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={style.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={IBack} style={{
                        width: 32,
                        height: 32
                    }} />
                </Pressable>
                <Image source={ILogoo} style={{ width: 208, height: 30 }} />
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 20, color: "#3C3C3C" }}>Alber Visualization</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop:20}}>

            <View style={style.box}>
                <Image source={IExcav} style={{  width: 120, height: 92, marginTop: 10, marginLeft:10}} />
                <Text style={style.text}>3 Excavator</Text>
            </View>
            <View style={style.box}>
                <Image source={IForklift} style={{  width: 120, height: 92, marginTop: 10, marginLeft:10}} />
                <Text style={style.text}>3 Forklift</Text>
            </View>

            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop:20}}>

            <View style={style.box}>
                <Image source={IWheelouder} style={{  width: 120, height: 92, marginTop: 10, marginLeft:10}} />
                <Text style={style.text}>3 Wheel Loader</Text>
            </View>

            </View>


        </View>
    );

};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box:{
        borderRadius:10,
        width:140,
        height:130,
        backgroundColor:'#F6F6F6'
    },
    text:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'bold'
    }

});

export default AlberVisualization;

