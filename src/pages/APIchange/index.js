import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import {IGambarLogo} from '../../assets/images';
import {BtnLogin, Input} from '../../assets/components/atom';
import Loading from 'react-native-whc-loading';
import {setRole, setName} from '../../User';
import {Storage} from 'expo-storage';
import { log } from 'react-native-reanimated';

export default class APIchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: '',
    };
  }

  async componentDidMount() {
    const APIURL =  await Storage.getItem({ key: 'api-url' });
    try {
      this.setState({
        api: APIURL,
    });
    } catch (error) {
      console.error('Error:', error);
    }
  }



  change = async () => {
    await Storage.setItem({
      key: 'api-url',
      value: this.state.api,
    });
    alert('API change!');
    // this.setState({
    //     api: '',
    // });
  };

  render() {
    return (
      <ScrollView style={style.container}>
        <View style={style.wrapper}>
          <Image source={IGambarLogo} style={style.gambar} />
          <Text style={style.name}>APIchange</Text>
        </View>
        <Text></Text>
        <Input
          label="ChangeAPI"
          placeholder="Input API"
          onChangeText={api => this.setState({api})}
          value={this.state.api}
        />
        <TouchableOpacity
          style={style.btn}
          title={'Submit'}
          onPress={this.change}>
          <Text style={style.text}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {flex: 1, padding: 25},
  wrapper: {alignItems: 'center', marginBottom: 10},
  gambar: {height: 42, width: 309, marginBottom: 34, marginTop: 70},
  name: {fontSize: 22, fontWeight: '700', color: '#3C3C3C'},
  forgotPassword: {
    fontSize: 14,
    fontWeight: '400',
    color: '#707070',
    marginTop: 5,
  },
  btn: {
    marginTop: 20,
    height: 55,
    width: '100%',
    backgroundColor: '#F0D800',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 20, fontWeight: '700', color: '#fff'},
});
