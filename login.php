import React, { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import { IBack, ILogoo } from "../../assets/icons";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList} from 'react-native-gesture-handler';
import alatberat from '../../assets/components/atom/Alber/alatberat' ;
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/components/atom/colors';

const NewRequest = ({navigation, route}) => {

    const [currentSelected, setCurrentSelected] = useState([0])

    const AlatBeratCard = ({alatberats, index}) => {
        return(
            <TouchableOpacity
                activeOpacity={0.8} onPress={() => navigation.navigate("WheelLoader", alatberats)}>
                <View style={{
                    padding: 15,
                    height: 150,
                    backgroundColor: '#F6F6F6',
                    width: 150,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderRadius: 10, }}>
                    <View style={{ alignItems: 'center' }}>
                        <View
                            style={{
                                height: 70,
                                alignItems: 'center',
                            }}>
                            <Image
                                source={alatberats.image}
                                style={{ flex: 1, resizeMode: 'contain', alignItems: 'center' }}
                            />
                        </View>
                        <Text style={{ fontWeight: '800', fontSize: 16, marginTop: 16, 
                        textAlign: 'center', color: '#3C3C3C' }}>
                            {alatberats.name}
                        </Text>

                    </View>

                </View>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={style.header}>
                <Pressable onPress={() => navigation.goBack()}>
                <Image source={IBack} style={{
                    width: 32,
                    height: 32
                    }}  />
                </Pressable>
                <Image source={ILogoo} style={{width:208, height:30}} />               
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 30, color: "#3C3C3C"}}>New Request</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <FlatList
                    columnWrapperStyle={{ justifyContent: 'center' }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 20,
                        paddingBottom: 50,
                    }}
                    numColumns={2}
                    data={alatberat}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <AlatBeratCard alatberats={item} />}
                />

            </View>

        </SafeAreaView>
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

export default NewRequest;

