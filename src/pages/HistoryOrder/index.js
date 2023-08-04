import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { IBack, ILogoo } from '../../assets/icons';

const HistoryOrder = ({ navigation }) => {
  // Sample data for time activity and PIC
  const activities = [
    { timeActivity: '08:00 AM', activity: 'Order Request', pic: 'Pak 4' },
    { timeActivity: '09:30 AM', activity: 'Manage Alber', pic: 'Pak 3' },
    { timeActivity: '09:30 AM', activity: 'Tes alber', pic: 'Pak 1' },
    { timeActivity: '16:30 AM', activity: 'Repair', pic: 'Pak 5' }
    // Add more activity data as needed
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
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
        <Image source={ILogoo} style={{ width: 208, height: 30 }} />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            marginTop: 30,
            color: '#3C3C3C',
          }}
        >
          Tracking History
        </Text>
      </View>

      {/* Table-like layout for time activity and PIC */}
      <View style={styles.tableContainer}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerText, { textAlign: 'center' }]}>Time</Text>
          <Text style={[styles.headerText, { textAlign: 'center' }]}>Activity</Text>
          <Text style={[styles.headerText, { textAlign: 'center' }]}>PIC</Text>
        </View>
        {activities.map((activity, index) => (
          <View key={index} style={styles.rowContainer}>
            <Text style={[styles.timeText, { textAlign: 'center' }]}>{activity.timeActivity}</Text>
            <Text style={[styles.activityText, { textAlign: 'center' }]}>{activity.activity}</Text>
            <Text style={[styles.picText, { textAlign: 'center' }]}>{activity.pic}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableContainer: {
    marginTop: 20,
    backgroundColor: '#FFF', // Set background color to white
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

export default HistoryOrder;
