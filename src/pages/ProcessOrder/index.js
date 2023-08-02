import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { IBack, ILogoo } from "../../assets/icons";
import alatberat from '../../assets/components/atom/Alber/alatberat';
import colors from '../../assets/components/atom/colors';

const sampleData = [
    {
      pekerjaan: 'Task 1',
      kapal: 'Ship 1',
      no_order: 'Order #123',
    },
    {
      pekerjaan: 'Task 2',
      kapal: 'Ship 2',
      no_order: 'Order #456',
    },
    {
        pekerjaan: 'Task 3',
        kapal: 'Ship 3',
        no_order: 'Order #456',
      }
    // Add more sample data items as needed
  ];
  
  export default class ProcessOrder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listData: sampleData // Update the listData state with the sampleData
      };
    }
  
    render() {
      const { navigation } = this.props;
  
      return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={IBack} style={{ width: 32, height: 32 }} />
            </Pressable>
            <Image source={ILogoo} style={{ width: 208, height: 30 }} />
          </View>
  
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 30, color: "#3C3C3C" }}>Process Order</Text>
          </View>
  
          <View style={styles.ViewWrapper}>
            <View style={styles.ViewData}>
              {
                this.state.listData.map((val, index) => (
                  <View style={styles.viewList} key={index}>
                    <Text style={styles.text}>Wheel Loader</Text>
                    <View style={styles.txt}>
                      <Text style={styles.textList}>{val.pekerjaan}</Text>
                      <View style={styles.card}>
                        <Text style={styles.txtList}>On Process</Text>
                      </View>
                    </View>
                    <Text style={styles.textList}>Kapal: {val.kapal}</Text>
                    <Text style={styles.textList}>No Order: {val.no_order}</Text>
                  </View>
                ))
              }
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
      marginTop: 50,
      padding: 30
    },
    viewList: {
      marginStart: 6,
      marginBottom: 10,
      width: 335,
      height: 110,
      backgroundColor: '#AAFF9C',
      borderRadius: 10
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#117C00',
      marginLeft: 10,
      marginTop: 8
    },
    textList: {
      fontSize: 16,
      fontWeight: '500',
      color: '#117C00',
      marginLeft: 10,
    },
    txt: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    txtList: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#117C00',
      textAlign: 'center'
    },
    card: {
      width: 80,
      height: 20,
      backgroundColor: '#F0D800',
      marginRight: 10,
      
    }
  });
