import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Alert,
  AppRegistry,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IGambarLogo, IUser} from '../../assets/images';
import {IBack, ILogoo} from '../../assets/icons';
import {IExcav, IForklift, IWheelouder} from '../../assets/images';

const NewRequest = ({navigation, route}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
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
          New Request
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('WheelLoader')}>
          <View style={style.box}>
            <View style={style.inner}>
              <Image
                source={IWheelouder}
                style={{width: 116.68, height: 81, marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#3C3C3C',
                }}>
                Wheel Loader
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Excavator')}>
          <View style={style.box}>
            <View style={style.inner}>
              <Image
                source={IExcav}
                style={{width: 120, height: 92, marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#3C3C3C',
                }}>
                Excavator
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: -3}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Forklift')}>
          <View style={style.box}>
            <View style={style.inner}>
              <Image
                source={IForklift}
                style={{width: 143, height: 95, marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#3C3C3C',
                }}>
                Forklift
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
  name: {fontSize: 26, fontWeight: '700', color: '#fff', marginTop: 10},
  box: {
    marginTop: 8,
    width: 155,
    height: 155,
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewRequest;
