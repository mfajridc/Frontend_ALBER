import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {IBack, ILogoo} from '../../assets/icons';
import axios from 'axios';

const AlberVisualization = ({navigation}) => {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    fetchDataAndUpdateCounts();
  }, []);

  const fetchData = async () => {
    try {
      const responseExcavator = await axios.get(
        'http://10.14.16.155/backend_laravel/public/api/excavator',
      );
      const responseWheelLoader = await axios.get(
        'http://10.14.16.155/backend_laravel/public/api/wheelLoader',
      );
      const responseForklift = await axios.get(
        'http://10.14.16.155/backend_laravel/public/api/forklift',
      );

      const excavatorData = responseExcavator.data.data.map(element => ({
        ...element,
        jenis: 'Excavator',
      }));
      const wheelLoaderData = responseWheelLoader.data.data.map(element => ({
        ...element,
        jenis: 'Wheel Loader',
      }));
      const forkliftData = responseForklift.data.data.map(element => ({
        ...element,
        jenis: 'Forklift',
      }));

      const mergedData = [
        ...excavatorData,
        ...wheelLoaderData,
        ...forkliftData,
      ];

      return mergedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const fetchDataAndUpdateCounts = async () => {
    try {
      const sampleData = await fetchData();

      const counts = {
        Excavator: 0,
        Forklift: 0,
        'Wheel Loader': 0,
      };

      sampleData.forEach(item => {
        counts[item.jenis]++;
      });

      const newGroupedData = [
        {
          name: 'Excavator',
          code: 'Exc',
          count: counts.Excavator,
          color: 'green',
        },
        {
          name: 'Forklift',
          code: 'Fo',
          count: counts.Forklift,
          color: 'blue',
        },
        {
          name: 'Wheel Loader',
          code: 'Wd',
          count: counts['Wheel Loader'],
          color: 'red',
        },
      ];

      setGroupedData(newGroupedData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderTable = () => (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeaderRow}>
        {groupedData.map((item, index) => (
          <View key={item.name} style={styles.tableHeaderCell}>
            <Text style={styles.columnHeaderText}>{item.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.tableRow}>
        {groupedData.map((item, index) => (
          <View key={item.name} style={styles.tableCell}>
            <View style={[styles.box, {backgroundColor: item.color}]}>
              <Text style={styles.boxText}>{item.count}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={IBack} style={styles.backButton} />
        </Pressable>
        <Image source={ILogoo} style={styles.logo} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Alber Visualization</Text>
      </View>

      {renderTable()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  backButton: {
    width: 32,
    height: 32,
  },
  logo: {
    width: 208,
    height: 30,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3C3C3C',
  },
  tableContainer: {
    marginHorizontal: 15,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeaderRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeaderCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    color: '#3C3C3C',
    textAlign: 'center',
    backgroundColor: '#F2F2F2',
  },
  countText: {
    fontSize: 14,
    color: '#3C3C3C',
    fontWeight: 'bold',
  },
  columnHeaderText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#3C3C3C',
    textAlign: 'center',
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AlberVisualization;
