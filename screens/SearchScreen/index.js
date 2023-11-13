import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
const dummyData = {
  searchHistory: ['Search 1', 'Search 2', 'Search 3'],
  people: [{
    username: 'User 1',
    followers: 100,
    following: 50,
    profilePic: 'https://tinyurl.com/42evm3m3'
  }, {
    username: 'User 2',
    followers: 200,
    following: 100,
    profilePic: 'https://tinyurl.com/42evm3m3'
  }],
  feed: [{
    title: 'Feed 1',
    description: 'Description 1',
    date: '2022-01-01 10:00:00'
  }, {
    title: 'Feed 2',
    description: 'Description 2',
    date: '2022-01-02 10:00:00'
  }],
  list: [{
    username: 'User 1',
    profilePic: 'https://tinyurl.com/42evm3m3',
    title: 'List 1',
    description: 'Description 1'
  }, {
    username: 'User 2',
    profilePic: 'https://tinyurl.com/42evm3m3',
    title: 'List 2',
    description: 'Description 2'
  }],
  entity: [{
    title: 'Entity 1',
    description: 'Description 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    title: 'Entity 2',
    description: 'Description 2',
    image: 'https://tinyurl.com/42evm3m3'
  }]
};

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.XynIptbK}>
      <TextInput placeholder="Search" style={_styles.IyhjgcPl} />
      <FlatList data={dummyData.searchHistory} renderItem={({
      item
    }) => <Text>{item}</Text>} keyExtractor={item => item} />
      <FlatList data={dummyData.people} renderItem={({
      item
    }) => <TouchableOpacity onPress={() => console.log('Go to user profile')}>
            <Image source={{
        uri: item.profilePic
      }} style={_styles.RoPoGLRc} />
            <Text>{item.username}</Text>
            <Text>Followers: {item.followers}</Text>
            <Text>Following: {item.following}</Text>
          </TouchableOpacity>} keyExtractor={item => item.username} />
      <FlatList data={dummyData.feed} renderItem={({
      item
    }) => <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
          </View>} keyExtractor={item => item.title} />
      <FlatList data={dummyData.list} renderItem={({
      item
    }) => <TouchableOpacity onPress={() => console.log('Go to user profile')}>
            <Image source={{
        uri: item.profilePic
      }} style={_styles.BFStfAEG} />
            <Text>{item.username}</Text>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>} keyExtractor={item => item.title} />
      <FlatList data={dummyData.entity} renderItem={({
      item
    }) => <TouchableOpacity onPress={() => console.log('Go to entity profile')}>
            <Image source={{
        uri: item.image
      }} style={_styles.NZaDpewD} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>} keyExtractor={item => item.title} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  XynIptbK: {
    flex: 1,
    backgroundColor: "#fff"
  },
  IyhjgcPl: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  RoPoGLRc: {
    width: 50,
    height: 50
  },
  BFStfAEG: {
    width: 50,
    height: 50
  },
  NZaDpewD: {
    width: 50,
    height: 50
  }
});