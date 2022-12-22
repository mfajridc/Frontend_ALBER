import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { IBack, ILogoo, IArrow, IArroww } from "../../assets/icons";
import { IUser } from "../../assets/images";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';

const Setting = ({ navigation }) => {

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
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 20, color: "#3C3C3C" }}>Setting Application</Text>
                <Image source={IUser}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100,
                        borderWidth: 6,
                        borderColor: '#fff',
                        marginTop: 10
                    }} />
                <Text style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: '#6D6D6D', marginTop: 6
                }}>Dermawan
                </Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#6D6D6D',
                    fontFamily: 'Poppins-Black'
                }}>Admin PG</Text>
            </View>
        
        <View style={{flex:1, padding:24, alignItems:'flex-start'}}>
            <Text style={style.set}>Akun</Text>
                <View style={style.hairline} />
        </View>
        <View> 
        <View style={style.text}>
            <Text style={style.ting}>Ganti Password</Text>
                <Image source={IArroww} style={{
                    width: 20,
                    height: 20,
                    marginRight:20,
                    alignItems:'center',
                    marginTop:3
                }} />
        </View>
            <View style={style.text1}>
                <Text style={style.ting}>Ganti Foto Profil</Text>
                <Image source={IArroww} style={{
                    width: 20,
                    height: 20,
                    marginRight: 20,
                    alignItems: 'center',
                    marginTop: 3
                }} />
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
    set:{
        fontWeight:'bold',
        color:'#000000',
        fontSize:18
    },
    hairline: {
        alignItems: 'center',
        backgroundColor: '#838383',
        height: 1,
        width: 325,
        marginTop:10,
        marginLeft:-7
    },
    ting:{
        fontWeight: '400',
        fontSize:18,
        color:'#6D6D6D',
    },
    text:{
        alignItems:'flex-start',
        marginStart:20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    text1: {
        alignItems: 'flex-start',
        marginStart: 20,
        marginBottom:280,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

});

export default Setting;

