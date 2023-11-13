import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'User 1',
  lastMessageTimestamp: '10:00 AM',
  imageUrl: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'User 2',
  lastMessageTimestamp: '9:00 AM',
  imageUrl: 'https://tinyurl.com/42evm3m3'
} // Add more users as needed
];

const ConversationScreen = () => {
  return <SafeAreaView style={_styles.XOWdMdhz}>
      <TextInput style={_styles.SCGrfOLI} placeholder="Search" />
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.hrEWFivf}>
            <Image style={_styles.JqlLfUvl} source={{
        uri: item.imageUrl
      }} />
            <View style={_styles.tLWePiRe}>
              <Text style={_styles.ylzVOSvS}>{item.name}</Text>
              <Text style={_styles.lFlimLwT}>{item.lastMessageTimestamp}</Text>
            </View>
            <View style={_styles.ITKJkvOk}>
              <Button title="Delete" onPress={() => {}} />
              <Button title="Block" onPress={() => {}} />
              <Button title="Report" onPress={() => {}} />
            </View>
          </View>} />
    </SafeAreaView>;
};

export default ConversationScreen;

const _styles = StyleSheet.create({
  XOWdMdhz: {
    flex: 1,
    backgroundColor: "#fff"
  },
  SCGrfOLI: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  hrEWFivf: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  JqlLfUvl: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  tLWePiRe: {
    marginLeft: 10
  },
  ylzVOSvS: {
    fontSize: 18
  },
  lFlimLwT: {
    color: "gray"
  },
  ITKJkvOk: {
    marginLeft: "auto"
  }
});