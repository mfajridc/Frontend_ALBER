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

export default class ProcessOrderPCS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [], // Update the listData state with the sampleData
      approveStatus: {}, // New state to track the approve status for each item
      isGlobalApproved: false, // New state to track global approval status
    };
  }

  async componentDidMount() {
    try {
      const sampleData = await this.fetchData();
      this.setState({ listData: sampleData });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async fetchData() {
    try {
      let response = [];
      const responseExcavator = await axios.get(
        'https://eb14-114-125-77-12.ngrok-free.app/backend_laravel/public/api/excavator',
      );
      const responseWheelLoader = await axios.get(
        'https://eb14-114-125-77-12.ngrok-free.app/backend_laravel/public/api/wheelLoader',
      );
      const responseForklift = await axios.get(
        'https://eb14-114-125-77-12.ngrok-free.app/backend_laravel/public/api/forklift',
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

  async statusData(id, jenis) {
    try {
      const response = await axios.put(
        'https://eb14-114-125-77-12.ngrok-free.app/backend_laravel/public/api/status',
        {
          id: id,
          jenis: jenis,
        }
      );
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  

  handleApproveClick = async (index,id,jenis) => {
    this.setState(prevState => ({
      approveStatus: {
        ...prevState.approveStatus,
        [index]: true, // Set the clicked state to true for the clicked item
      },
    }));
    try {
      await this.statusData(id, jenis); // Call the statusData function to update the API
    } catch (error) {
      console.error('Error:', error);
      // Handle error if necessary
    }
  };


  render() {
    const {navigation} = this.props;
    const { isGlobalApproved } = this.state;

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

        <View style={[styles.ViewWrapper, isGlobalApproved ? styles.approvedWrapper : null]}>
          <View style={styles.ViewData}>
            {this.state.listData.map((val, index) => (
              <View style={val.status || this.state.approveStatus[index] ? styles.viewList2:styles.viewList} key={index}>
                <Text style={styles.text}>{val.jenis}</Text>
                <View style={styles.txt}>
                  <Text style={styles.textList}>{val.pekerjaan}</Text>
                  <View style={styles.card}>
                    <Pressable
                      style={[
                        styles.approveButton,
                        this.state.approveStatus[index] || val.status
                          ? styles.approvedButton
                          : null,
                      ]}
                      onPress={() => this.handleApproveClick(index,val.id,val.jenis)}>
                      <Text
                        style={[
                          styles.txtList,
                          this.state.approveStatus[index] || val.status
                            ? styles.approvedText
                            : null,
                        ]}>
                        {val.status || this.state.approveStatus[index] ? 'Approved' : 'Approve'}
                      </Text>
                    </Pressable>
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
  approveButton: {
    width: 80,
    height: 20,
    backgroundColor: '#F0D800',
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  approvedButton: {
    backgroundColor: '#3C3C3C', // Change the color when clicked
  },
  approvedText: {
    color: '#FFFFFF', // Change the text color when clicked
  },
  approvedWrapper: {
    backgroundColor: '#3C3C3C', // Change the background color when global approval happens
  }
});
