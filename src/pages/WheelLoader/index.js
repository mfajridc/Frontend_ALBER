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
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';
import {Form} from '../../assets/components/atom/Form';
import SelectDropdown from 'react-native-select-dropdown';
import {Picker} from '@react-native-picker/picker';

export default class WheelLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPekerjaan: ['Loading/Unloading', 'Housekeeping'],
      nomorPalka: ['1', '2', '3', '4'],
      areaCleaning: ['Area Cleaning UBB', 'Area Cleaning Pabrik 1'],
      formData: {
        no_order: '',
        pekerjaan: '',
        kapal: '',
        no_palka: '',
        kegiatan: '',
        area: '',
      },
    };
  }

  send = async () => {
    try {
      await fetch('http://10.234.213.95/backend/wheel_loader.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.formData),
      })
        .then(response => response.json())
        .then(json => {
          return json.movies;
          alert('Order Request Success!');
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const {no_order, pekerjaan, kapal, no_palka, kegiatan, area} =
      this.state.formData;

    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View style={style.header}>
          <Pressable onPress={() => this.props.navigation.goBack()}>
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
              fontSize: 26,
              fontWeight: 'bold',
              marginTop: 30,
              color: '#3C3C3C',
            }}>
            New Request
          </Text>
        </View>

        <View style={style.wrapper}>
          <Text style={style.label}>No Order</Text>
          <View style={style.InputContainer}>
            <TextInput
              placeholder="No order"
              onChangeText={no_order =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    no_order,
                  },
                }))
              }
              value={no_order}
            />
          </View>
          <Text style={style.label}>Jenis Pekerjaan</Text>
          <View style={style.InputContainer}>
            <Picker
              style={style.pickerteks}
              selectedValue={pekerjaan}
              onValueChange={pekerjaan =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    pekerjaan,
                  },
                }))
              }>
              {this.state.dataPekerjaan.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()}
                />
              ))}
            </Picker>
          </View>
          <Text style={style.label}>Nama Kapal</Text>
          <View style={style.InputContainer}>
            <TextInput
              placeholder="Nama Kapal"
              onChangeText={kapal =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    kapal,
                  },
                }))
              }
              value={kapal}
            />
          </View>
          <Text style={style.label}>No Palka</Text>
          <View style={style.InputContainer}>
            <Picker
              style={style.pickerteks}
              selectedValue={no_palka}
              onValueChange={no_palka =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    no_palka,
                  },
                }))
              }>
              {this.state.nomorPalka.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()}
                />
              ))}
            </Picker>
          </View>

          <Text style={style.label}>Deskripsi Kegiatan</Text>
          <View style={style.InputContainerr}>
            <TextInput
              placeholder="Deskripsi Kegiatan"
              onChangeText={kegiatan =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    kegiatan,
                  },
                }))
              }
              value={kegiatan}
            />
          </View>
          <Text style={style.label}>Area</Text>
          <View style={style.InputContainer}>
            <Picker
              style={style.pickerteks}
              selectedValue={area}
              onValueChange={area =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    area,
                  },
                }))
              }>
              {this.state.areaCleaning.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLowerCase()}
                />
              ))}
            </Picker>
          </View>
          <TouchableOpacity style={style.btn} onPress={this.send}>
            <Text style={style.text}>Send Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {padding: 15},
  label: {
    marginVertical: 10,
    fontSize: 16,
    color: '#858585',
  },
  InputContainer: {
    borderRadius: 8,
    height: 46,
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
  btn: {
    marginTop: 40,
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
    marginLeft: -24,
    marginRight: -20,
    padding: 28,
    height: 46,
    marginTop: -6,
  },
});
