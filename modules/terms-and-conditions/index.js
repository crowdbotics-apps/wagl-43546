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
  return <SafeAreaView style={_styles.gUZPnoSu}>
      <TextInput style={_styles.KNTnvAjh} placeholder="Search" />
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.okdFgMGd}>
            <Image style={_styles.FGhbXrbv} source={{
        uri: item.imageUrl
      }} />
            <View style={_styles.EzxGJxsH}>
              <Text style={_styles.bkJqFHDR}>{item.name}</Text>
              <Text style={_styles.vmkqDUDl}>{item.lastMessageTimestamp}</Text>
            </View>
            <View style={_styles.DvHkCNkj}>
              <Button title="Delete" onPress={() => {}} />
              <Button title="Block" onPress={() => {}} />
              <Button title="Report" onPress={() => {}} />
            </View>
          </View>} />
    </SafeAreaView>;
};

export default ConversationScreen;

const _styles = StyleSheet.create({
  gUZPnoSu: {
    flex: 1,
    backgroundColor: "#fff"
  },
  KNTnvAjh: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  okdFgMGd: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  FGhbXrbv: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  EzxGJxsH: {
    marginLeft: 10
  },
  bkJqFHDR: {
    fontSize: 18
  },
  vmkqDUDl: {
    color: "gray"
  },
  DvHkCNkj: {
    marginLeft: "auto"
  }
});