import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';

const CommentScreen = () => {
  const [comment, setComment] = useState('');
  const dummyData = [{
    id: '1',
    userName: 'User1',
    comment: 'This is a comment',
    date: '2021-09-01 10:00:00'
  }, {
    id: '2',
    userName: 'User2',
    comment: 'This is another comment',
    date: '2021-09-01 11:00:00'
  }];

  const renderItem = ({
    item
  }) => <View style={_styles.EICvUSLr}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={_styles.mBJzbwUX} />
      <View style={_styles.QjoRSigl}>
        <Text style={_styles.IOslnUMI}>{item.userName}</Text>
        <Text>{item.comment}</Text>
        <Text style={_styles.PnWGSWvg}>{item.date}</Text>
      </View>
    </View>;

  return <SafeAreaView style={_styles.sURddxpd}>
      <Button title="Back" onPress={() => {}} />
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={_styles.wjsLsGFO}>
        <TextInput style={_styles.uAeLmBtT} onChangeText={setComment} value={comment} placeholder="Add a comment" />
        <Button title="Attach" onPress={() => {}} />
      </View>
      <Button title="Post" onPress={() => {}} />
    </SafeAreaView>;
};

export default CommentScreen;

const _styles = StyleSheet.create({
  EICvUSLr: {
    flexDirection: "row",
    margin: 10
  },
  mBJzbwUX: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  QjoRSigl: {
    marginLeft: 10
  },
  IOslnUMI: {
    fontSize: 18,
    fontWeight: "bold"
  },
  PnWGSWvg: {
    fontSize: 12,
    color: "gray"
  },
  sURddxpd: {
    flex: 1,
    backgroundColor: "#fff"
  },
  wjsLsGFO: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center"
  },
  uAeLmBtT: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
});