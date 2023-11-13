import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native';

const ProfileScreen = ({
  navigation
}) => {
  const dummyData = {
    name: 'John Doe',
    username: 'johndoe',
    profilePicture: 'https://tinyurl.com/42evm3m3',
    phoneNumber: '123-456-7890',
    bio: 'This is a bio',
    following: 100,
    followers: 200,
    lists: [{
      title: 'List 1',
      description: 'This is list 1',
      entities: [{
        title: 'Entity 1',
        description: 'This is entity 1',
        image: 'https://tinyurl.com/42evm3m3'
      } // More entities...
      ]
    } // More lists...
    ]
  };
  return <SafeAreaView style={_styles.fPEJGVom}>
      <Image source={{
      uri: dummyData.profilePicture
    }} style={_styles.zJdtKeOG} />
      <Text>{dummyData.name}</Text>
      <Text>{dummyData.username}</Text>
      <Text>{dummyData.phoneNumber}</Text>
      <Text>{dummyData.bio}</Text>
      <Text>Following: {dummyData.following}</Text>
      <Button title="Go to Following List" onPress={() => navigation.navigate('FollowingList')} />
      <Text>Followers: {dummyData.followers}</Text>
      <Button title="Go to Followers List" onPress={() => navigation.navigate('FollowersList')} />
      <Button title="Hide/Show followers/following" onPress={() => {}} />
      <Button title="Change to Private Profile" onPress={() => {}} />
      <FlatList data={dummyData.lists} keyExtractor={item => item.title} renderItem={({
      item
    }) => <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <FlatList data={item.entities} keyExtractor={item => item.title} renderItem={({
        item
      }) => <TouchableOpacity onPress={() => navigation.navigate('EntityProfile', {
        entity: item
      })}>
                  <Image source={{
          uri: item.image
        }} style={_styles.neFiMsYJ} />
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                  <Button title="Remove" onPress={() => {}} />
                  <Button title="Edit" onPress={() => {}} />
                </TouchableOpacity>} />
            <Button title="Add new Entity" onPress={() => {}} />
          </View>} />
      <Button title="Add new List" onPress={() => {}} />
      <Button title="Share" onPress={() => {}} />
    </SafeAreaView>;
};

export default ProfileScreen;

const _styles = StyleSheet.create({
  fPEJGVom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  zJdtKeOG: {
    width: 100,
    height: 100
  },
  neFiMsYJ: {
    width: 50,
    height: 50
  }
});