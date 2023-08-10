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
import {IAddd, IVisual, ITrack, ISetting} from '../../assets/icons';
import {getRole, getName} from '../../User.js';

const HomePCS = ({navigation, route}) => {
  var role = getRole();
  var name = getName();

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={IGambarLogo}
          style={{
            height: 42,
            width: 309,
            marginBottom: 14,
            marginTop: 20,
            alignItems: 'center',
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: '#f0d800',
          height: '32%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={style.name}> Dashboard</Text>
          <Image
            source={IUser}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              borderWidth: 6,
              borderColor: '#fff',
              marginTop: 30,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: '#3A3A3A',
              marginTop: 30,
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#3A3A3A',
              fontFamily: 'Poppins-Black',
              marginTop: 10,
            }}>
            Admin PCS
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AlberVisualization')}>
          <View style={style.box}>
            <View style={style.inner}>
              <Image
                source={IVisual}
                style={{flex: 1, width: 90, height: 50, marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#117C00',
                }}>
                Alber Visualization
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: -6}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SubmissionTracking')}>
          <View style={style.box}>
            <View style={style.inner}>
              <Image
                source={ITrack}
                style={{flex: 1, width: 70, height: 50, marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#117C00',
                }}>
                Submission Tracking
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Setting')}>
          <View style={style.box}>
            <View style={style.inner}>
              <Image
                source={ISetting}
                style={{flex: 1, resizeMode: 'contain', marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#117C00',
                }}>
                Setting Application
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  name: {fontSize: 26, fontWeight: '700', color: '#fff', marginTop: 10},
  box: {
    marginTop: 10,
    width: 155,
    height: 155,
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#AAFF9C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePCS;
