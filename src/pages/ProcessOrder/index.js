import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {IBack, ILogoo} from '../../assets/icons';

import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';
import {log} from 'react-native-reanimated';
import axios from 'axios';
import {Storage} from 'expo-storage';

export default class ProcessOrderPCS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [], // Update the listData state with the sampleData
    };
  }

  async componentDidMount() {
    try {
      const sampleData = await this.fetchData();
      this.setState({listData: sampleData});
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async fetchData() {
     const APIURL =  await Storage.getItem({ key: 'api-url' });
      const URL = `${APIURL}/backend_laravel/public/api/`;
    try {
      let response = [];
      const responseExcavator = await axios.get(
        URL + 'excavator',
      );
      const responseWheelLoader = await axios.get(
        URL + 'wheelLoader',
      );
      const responseForklift = await axios.get(
        URL + 'forklift',
      );
      // Set the 'jenis' property to 'Excavator' for each element in the 'responseExcavator.data.data' array
      const excavatorData = responseExcavator.data.data.map(element => ({
        ...element,
        jenis: 'Excavator',
      }));

      // Set the 'jenis' property to 'Wheel Loader' for each element in the 'responseWheelLoader.data.data' array
      const wheelLoaderData = responseWheelLoader.data.data.map(element => ({
        ...element,
        jenis: 'Wheel Loader',
      }));

      // Set the 'jenis' property to 'Forklift' for each element in the 'responseForklift.data.data' array
      const forkliftData = responseForklift.data.data.map(element => ({
        ...element,
        jenis: 'Forklift',
      }));

      // Concatenate all the arrays into the 'response' array
      response.push(...excavatorData);
      response.push(...wheelLoaderData);
      response.push(...forkliftData);
      console.log(response);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={IBack} style={{width: 32, height: 32}} />
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
            Process Order
          </Text>
        </View>

        <View style={styles.ViewWrapper}>
          <View style={styles.ViewData}>
            {this.state.listData.map((val, index) => (
              <View
                style={val.status ? styles.viewList2 : styles.viewList}
                key={index}>
                <Text style={styles.text}>{val.jenis}</Text>
                <View style={styles.txt}>
                  <Text style={styles.textList}>{val.pekerjaan}</Text>
                  <View style={styles.card}>
                    <Text
                      style={
                        val.status
                          ? styles.approvedButton
                          : styles.approvedButton2
                      }>
                      {val.status ? 'OK' : 'On Process'}
                    </Text>
                  </View>
                </View>
                {val.kapal && (
                  <Text style={styles.textList}>Kapal: {val.kapal}</Text>
                )}
                <Text style={styles.textList}>No Order: {val.no_order}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewWrapper: {
    marginTop: 5,
    padding: 30,
  },
  viewList: {
    marginStart: 6,
    marginBottom: 10,
    width: 335,
    height: 110,
    backgroundColor: '#AAFF9C',
    borderRadius: 10,
  },
  viewList2: {
    marginStart: 6,
    marginBottom: 10,
    width: 335,
    height: 110,
    backgroundColor: '#F0D800',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#117C00',
    marginLeft: 10,
    marginTop: 8,
  },
  textList: {
    fontSize: 16,
    fontWeight: '500',
    color: '#117C00',
    marginLeft: 10,
  },
  txt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtList: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#117C00',
    textAlign: 'center',
  },
  card: {
    width: 80,
    height: 20,
    backgroundColor: '#F0D800',
    marginRight: 10,
  },
  approvedButton: {
    width: 60,
    height: 20,
    marginRight: 0,
    borderRadius: 5,
    backgroundColor: '#3C3C3C',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  },
  approvedButton2: {
    width: 80,
    height: 20,
    marginRight: 0,
    borderRadius: 5,
    backgroundColor: '#3C3C3C',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  },
});
