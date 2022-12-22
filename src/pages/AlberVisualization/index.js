import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { IBack, ILogoo } from "../../assets/icons";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';
import { Input } from "../../assets/components/atom";

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

});

export default AlberVisualization;

