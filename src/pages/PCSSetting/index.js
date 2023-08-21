import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {IBack, ILogoo, IArrow, IArroww} from '../../assets/icons';
import {IUser} from '../../assets/images';
import {FlatList} from 'react-native-gesture-handler';
import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';
import WelcomePage from '../WelcomePage';
import {getRole, getName} from '../../User.js';

const PCSSetting = ({navigation}) => {
  var role = getRole();
  var name = getName();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={style.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={IBack}
            style={{
              width: 32,
              height: 32,
            }}
          />
        </Pressable>
        <Image source={ILogoo} style={{width: 208, height: 30}} />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 20,
            color: '#3C3C3C',
          }}>
          Account Profile
        </Text>
        <Image
          source={IUser}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            borderWidth: 6,
            borderColor: '#fff',
            marginTop: 10,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#6D6D6D',
            marginTop: 25,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#6D6D6D',
            marginTop: 15,
          }}>
          Admin PCS
        </Text>
      </View>

      <View style={{marginTop: 60, marginLeft: 24, alignItems: 'flex-start'}}>
        <Text style={style.set1}>Bagian Departemen</Text>
      </View>
      <View style={{marginLeft: 24, alignItems: 'flex-start'}}>
        <Text style={style.set}>Operasional Pengelolaan Pelabuhan</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 24, alignItems: 'flex-start'}}>
        <Text style={style.set1}>Alamat</Text>
      </View>
      <View style={{marginLeft: 24, alignItems: 'flex-start'}}>
        <Text style={style.set}>TUKS PT Petrokimia Gresik</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 24, alignItems: 'flex-start'}}>
        <Text style={style.set1}>Kompartemen</Text>
      </View>
      <View style={{marginLeft: 24, alignItems: 'flex-start'}}>
        <Text style={style.set}>Pengelolaan Pergudangan dan Pelabuhan</Text>
      </View>
      <View style={style.menu}>
        <TouchableOpacity
          style={style.btn}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'WelcomePage'}],
            })
          }>
          <Text style={style.textt}> Logout </Text>
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity style={style.btn} title={"Logout"}
                onPress={this.login} >
                <Text style={style.text}>Login</Text>
            </TouchableOpacity> */}
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
  menu: {
    marginTop: -80,
  },
  set: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  set1: {
    fontWeight: '500',
    color: '#A4A4A4',
    fontSize: 16,
  },
  ting: {
    fontWeight: 'normal',
    fontSize: 18,
    color: '#6D6D6D',
  },
  text: {
    marginTop: 80,
    marginBottom: 16,
    alignItems: 'flex-start',
    marginStart: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    alignItems: 'flex-start',
    marginStart: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 200,
    marginBottom: 30,
    height: 40,
    width: 120,
    backgroundColor: '#f72525',
    alignItems: 'center',
    marginLeft: 149,
    borderRadius: 20,
  },
  textt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PCSSetting;
