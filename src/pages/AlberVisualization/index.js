import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { IBack, ILogoo } from "../../assets/icons";
import { FlatList } from 'react-native-gesture-handler';
import colors from '../../assets/components/atom/colors';
import { Input } from "../../assets/components/atom";

const AlberVisualization = ({ navigation }) => {

  const data = [
    { name: "Excavator", code: "Exc", count: 2, color: "green" },
    { name: "Forklift", code: "Fo", count: 1, color: "blue" },
    { name: "Wheel Loader", code: "Wd", count: 3, color: "red" },
  ];

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = [];
    }
    acc[item.name].push(item);
    return acc;
  }, {});

  const renderAlatBeratRow = ({ item }) => (
    <View style={style.row}>
      <View style={[style.box, { backgroundColor: item.color }]}>
        <Text style={style.text}>{item.count}</Text>
      </View>
      <Text style={style.alatName}>{item.code}</Text>
    </View>
  );

  const renderColumn = ({ item }) => (
    <View style={style.column}>
      <Text style={style.columnHeader}>{item.name}</Text>
      <FlatList
        data={item.data}
        renderItem={renderAlatBeratRow}
        keyExtractor={(item) => item.code}
      />
    </View>
  );

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <View style={style.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={IBack} style={{
            width: 32,
            height: 32
          }} />
        </Pressable>
        <Image source={ILogoo} style={{ width: 208, height: 30 }} />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 20, color: "#3C3C3C" }}>Alber Visualization</Text>
      </View>

      <FlatList
        data={Object.keys(groupedData).map((key) => ({
          name: key,
          data: groupedData[key],
        }))}
        renderItem={renderColumn}
        keyExtractor={(item) => item.name}
        horizontal
      />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    alignItems: 'center',
    marginHorizontal: 28,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  box: {
    borderRadius: 1,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  alatName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: "#3C3C3C",
  },
  columnHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default AlberVisualization;
