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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  login = () => {
    var UserName = this.state.name;
    var Password = this.state.password;
    var InsertAPIURL =
      'https://fd41-182-23-102-214.ngrok-free.app/backend_laravel/public/api/login';

    var headers = {
      'Access-Control-Allow-Origin': 'true',
      'Content-Type': 'application/json',
    };

    var Data = {
      name: UserName,
      password: Password,
    };

    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          var role = response.role;
          var name = response.name;
          setRole(role);
          setName(name);
          if (role === 'admin_pg') {
            alert('Successfully Login');
            this.props.navigation.navigate('HomeScreen');
          } else {
            alert('Successfully Login');
            this.props.navigation.navigate('HomePCS');
          }
        } else {
          alert('Incorrect');
        }
      })
      .catch(error => {
        console.error(error);
      });

    Keyboard.dismiss();
  };

  render() {
    return (
      <ScrollView style={style.container}>
        <View style={style.wrapper}>
          <Image source={IGambarLogo} style={style.gambar} />
          <Text style={style.name}>Log In</Text>
        </View>
        <Input
          label="Username"
          placeholder="Input Username"
          onChangeText={name => this.setState({name})}
        />
        <Input
          label="Password"
          placeholder="Input Password"
          password
          onChangeText={password => this.setState({password})}
        />
        <Text style={style.forgotPassword}>Forgot Password?</Text>
        <TouchableOpacity
          style={style.btn}
          title={'Register'}
          onPress={this.login}>
          <Text style={style.text}>Login</Text>
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
