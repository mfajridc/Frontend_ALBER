import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../../assets/components/atom';
import {ISplash} from '../../assets/images';

const WelcomePage = ({navigation}) => {
  return (
    <ImageBackground source={ISplash} style={style.container}>
      <Text></Text>
      <View style={style.parent}>
        <Button
          label={'Log In'}
          type={'accent'}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Button
          label={'Register'}
          type={'primary'}
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
      <View style={style.parent2}>
      <TouchableOpacity style={style.button}
      onPress={() => {
        navigation.navigate('APIchange');}}>
        <Text style={{color: 'white'}}>APIchange</Text>
        
      </TouchableOpacity>
      </View>
    </ImageBackground>
    
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-around',
  },
  parent2: {
    padding: 50,
    alignItems: 'center',
  },
  parent3: {
    padding: 50,
    alignItems: 'center',
    
  },
  button: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 10
  }
});

export default WelcomePage;