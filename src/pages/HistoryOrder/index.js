import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {IBack, ILogoo} from '../../assets/icons';
import axios from 'axios';
export default class HistoryOrder extends Component {
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
    try {
      let response = [];
      const responseExcavator = await axios.get(
        'https://aba9-182-1-88-201.ngrok-free.app/api/excavator',
      );
      const responseWheelLoader = await axios.get(
        'https://aba9-182-1-88-201.ngrok-free.app/api/wheelLoader',
      );
      const responseForklift = await axios.get(
        'https://aba9-182-1-88-201.ngrok-free.app/api/forklift',
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
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  

  render() {
    const {navigation} = this.props;
    function convertToAmPmFormat(dateTimeString) {
      const date = new Date(dateTimeString);
      
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const amPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
      const formattedTime = `${formattedHours}:${formattedMinutes} ${amPm}`;
      
      return formattedTime;
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <View style={styles.header}>
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
              fontSize: 26,
              fontWeight: 'bold',
              marginTop: 30,
              color: '#3C3C3C',
            }}>
            Tracking History
          </Text>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.headerRow}>
            <Text style={[styles.headerText, {textAlign: 'center'}]}>Time</Text>
            <Text style={[styles.headerText, {textAlign: 'center'}]}>
              Activity
            </Text>
          </View>
          {this.state.listData.map((activity, index) => (
            <View key={index} style={styles.rowContainer}>
              <Text style={[styles.timeText, {textAlign: 'center'}]}>
                {convertToAmPmFormat(activity.created_at)}
              </Text>
              <Text style={[styles.activityText, {textAlign: 'center'}]}>
                {activity.pekerjaan}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableContainer: {
    marginTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3C3C3C',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 16,
  },
  timeText: {
    fontSize: 18,
    color: '#3C3C3C',
    flex: 1,
  },
  activityText: {
    fontSize: 18,
    color: '#3C3C3C',
    flex: 1,
    marginLeft: 20,
  },
  picText: {
    fontSize: 18,
    color: '#3C3C3C',
    flex: 1,
    marginLeft: 20,
  },
});
