import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {IBack, ILogoo} from '../../assets/icons';
import {FlatList} from 'react-native-gesture-handler';
import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';
import {Input} from '../../assets/components/atom';
import {IHistory, IProcess} from '../../assets/icons';

const SubmissionTracking = ({navigation, route}) => {
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
          SubmissionTracking
        </Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ProcessOrderPCS')}>
          <View style={style.box}>
            <View style={style.inner}>
              <Image
                source={IProcess}
                style={{width: 80, height: 80, marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#117C00',
                }}>
                Process Order
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('HistoryOrder')}>
          <View style={style.box}>
            <View style={style.inner}>
              <Image
                source={IHistory}
                style={{width: 80, height: 80, marginTop: 10}}
              />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#117C00',
                }}>
                History Order
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
  name: {fontSize: 20, fontWeight: '700', color: '#117C00', marginTop: 10},
  box: {
    marginTop: 8,
    width: 145,
    height: 125,
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

export default SubmissionTracking;
