import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity, Dimensions } from "react-native";
import { IBack, ILogoo } from "../../assets/icons";
import { ScrollView } from 'react-native-gesture-handler';
import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';
import { Input } from "../../assets/components/atom";

export default class ProcessOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            pekerjaan:'',
            kapal:'',
            no_order:'',
            data_create:'',
            listData:[],
        };
        this.url = "http://192.168.43.95/backend/api.php";
    }
    componentDidMount(){
        this.tampilData()
    }
    async tampilData(){
        await fetch(this.url)
        .then((response)=>response.json())
        .then((json)=>{
            console.log('Hasil yang didapat: '+JSON.
            stringify(json.data.result));
            this.setState({listData:json.data.result});
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render(){ 

        const { navigation } = this.props;

    return (
        <ScrollView style={{
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
                <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 30, color: "#3C3C3C" }}>Process Order</Text>
            </View>

            <View style={style.ViewWrapper}>
                <View style={style.ViewData}>
                {
                    this.state.listData.map((val,index)=>(
                        <View style={style.viewList} key= 
                        {index}>
                            <Text style={style.text}>Wheel Loader</Text>
                            <View style={style.txt}> 
                            <Text style={style.textList}>
                            {val.pekerjaan}</Text>
                            <View style={style.card}>
                                <Text style={style.txtList}>On Process</Text>
                            </View>
                            </View>
                            <Text style={style.textList}>Kapal:  
                             {val.kapal}</Text>
                             <Text style={style.textList}>No Order:  
                             {val.no_order}</Text>
                        </View>
                    ))
                }
                </View>
            </View>




        </ScrollView>
    );
    }

};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ViewWrapper:{
        marginTop:16,
        padding:6
    },
    viewList:{
        marginStart:6,
        marginBottom:8,
        width:335,
        height:110,
        backgroundColor:'#AAFF9C',
        borderRadius:10
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#117C00',
        marginLeft:10,
        marginTop:8
    },
    textList:{
        fontSize:16,
        fontWeight:'500',
        color:'#117C00',
        marginLeft:10,
    },
    txt:{
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    txtList:{
        fontSize:12,
        fontWeight:'bold',
        color:'#117C00',
        textAlign: 'center'
    },
    card:{
        width:80,
        height:20,
        backgroundColor:'#F0D800',
        marginRight:8
    }

});


