import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {IGambarLogo} from '../../assets/images';
import {BtnLogin, Input} from '../../assets/components/atom';
import WelcomePage from '../WelcomePage';
import Login from '../Login';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectDropdown from 'react-native-select-dropdown';
import {Picker} from '@react-native-picker/picker';

// const role = ["admin_pg", "admin_pcs", "operator_pcs"]
const role = ['admin_pg', 'admin_pcs', 'operator_pcs'];
const Stack = createNativeStackNavigator();

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_role: ['admin_pcs', 'admin_pg', 'opr_pcs'],
      data: '',
      formData: {
        name: '',
        role: '',
        password: '',
      },
    };
  }

  login = () => {
    const {name, role, password} = this.state.formData;

    if (name === '' || password === '') {
      alert('Required Field Is Missing!');
    } else {
      axios
        .post('https://ec63-182-253-130-235.ngrok-free.app/api/register', {
          name,
          role,
          password,
        })
        .then(response => {
          console.log(response);
          alert('Login successful!');
          this.props.navigation.navigate('Login');
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  };

  render() {
    const {name, role, password} = this.state.formData;
    return (
      <ScrollView style={style.container}>
        <View style={style.wrapper}>
          <Image source={IGambarLogo} style={style.gambar} />
          <Text style={style.name}>Register</Text>
        </View>
        <Input
          label="Name"
          placeholder="Input Name"
          onChangeText={name =>
            this.setState(prevState => ({
              formData: {
                ...prevState.formData,
                name,
              },
            }))
          }
        />

        <Text style={style.label}>Role</Text>
        <View style={style.InputContainer}>
          <Picker
            style={style.pickerteks}
            selectedValue={role}
            onValueChange={role =>
              this.setState(prevState => ({
                formData: {
                  ...prevState.formData,
                  role,
                },
              }))
            }>
            {this.state.user_role.map((item, index) => (
              <Picker.Item
                key={index}
                label={item}
                value={item.toLowerCase()}
              />
            ))}
          </Picker>
        </View>

        <Input
          label="Password"
          placeholder="Input Password"
          password
          onChangeText={password =>
            this.setState(prevState => ({
              formData: {
                ...prevState.formData,
                password,
              },
            }))
          }
        />

        <TouchableOpacity
          style={style.btn}
          title={'Register'}
          onPress={this.login}>
          <Text style={style.text}>Register</Text>
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
  pickerteks: {
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    fontSize: -16,
    color: '#858585',
    alignItems: 'center',
    marginLeft: -32,
    marginRight: -30,
    padding: 28,
    height: 48,
    marginTop: -6,
  },
  InputContainer: {
    borderRadius: 10,
    height: 48,
    fontSize: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#858585',
    paddingHorizontal: 18,
  },
  InputContainerr: {
    borderRadius: 8,
    height: 76,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#858585',
    paddingHorizontal: 10,
  },
  label: {
    // marginVertical: 3,
    fontSize: 16,
    color: '#565656',
  },
});

// AppRegistry.registerComponent('Register', () => Register);
