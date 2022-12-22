import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { Colors } from '../colors';

const TYPES = ['primary', 'secondary', 'accent'];


export default function Button({
    children,
    onPress,
    type,
    label,
}) {

    const btnType = TYPES.includes(type) ? type : 'primary';

    const btnStyle ={
        marginTop: 540,
        height: 50, 
        width: '46%',
        borderRadius:9,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 
            btnType === 'primary'
            ? Colors.primary : btnType === 'secondary'
            ? Colors.secondary : Colors.accent,
        marginHorizontal: 40,
    }
    return (
        <TouchableOpacity 
        style={btnStyle} onPress={onPress}>
            <Text style={{color: '#000', fontSize:14, fontWeight:'bold'}}>{label}</Text>
        </TouchableOpacity>
    )
}
