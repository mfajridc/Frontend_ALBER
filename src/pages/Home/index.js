import React from "react";
import { 
    View, 
    Text,  
    Image,
    StyleSheet, 
    SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import  {IGambarLogo, IUser} from "../../assets/images";
import { Colors } from '../../assets/components/atom/colors';
import {fonts} from '../../assets/fonts';
import { FlatList} from 'react-native-gesture-handler';
import albers from "../../assets/components/atom/Alber/alber";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home =({navigation}) => {
    const AlberCard = ({alber}) => {
        return (
            <TouchableOpacity 
            activeOpacity={0.8} onPress={() => navigation.navigate("NewRequest", alber)}>
              <View style={style.card}> 
              <View style={{alignItems:'center'}}>
                 <View
                   style={{
                    height: 70,
                     alignItems: 'center',
                      }}>
                    <Image
                     source={alber.image}
                     style={{ flex: 1, resizeMode: 'contain', alignItems: 'center' }}
                    />
                    </View>
                        <Text style={{ fontWeight: '800', fontSize: 15, marginTop:6, textAlign: 'center' }}>
                            {alber.name}
                        </Text>

              </View>

              </View> 
                </TouchableOpacity>
        );
    };

    return(
        <SafeAreaView style={{
            backgroundColor: "#fff",
            flex:1
        }}>
            <View style={{ alignItems: 'center'}}>

            <Image source={IGambarLogo} 
            style={{ height: 42, 
            width: 309, 
            marginBottom: 14, 
            marginTop: 20, 
            alignItems: 'center' }} /> 
            
            </View>
        
        <View style={{
            backgroundColor:'#f0d800',
            height: "32%",
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            paddingHorizontal:20,
        }}>

                <View style={{ alignItems: 'center' }}>
        <Text style={style.name} > Dashboard User</Text>
             <Image source={IUser} 
             style={{ 
             width: 80, 
             height: 80, 
             borderRadius: 100, 
             borderWidth:6,
             borderColor:'#fff', 
             marginTop: 10 }} />
        <Text style={{ 
            fontSize: 18, 
            fontWeight: '400', 
            color:'#3A3A3A', marginTop: 6}}>Dermawan
        </Text>
        <Text style={{
            fontSize:18,
            fontWeight:'700',
            color:'#3A3A3A', 
            fontFamily: 'Poppins-Black'
        }}>Admin PG</Text>
        </View>

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
        data={albers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <AlberCard alber={item}/>}
       />

       </View>
        
        
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    name: { fontSize: 26, fontWeight: '700', color: '#fff', marginTop: 10 },
    card: {
        padding: 15,
        height: 145,
        backgroundColor: '#AAFF9C',
        width: 145,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
    },


})
        



export default Home;