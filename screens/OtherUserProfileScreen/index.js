import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

const ScreenComponent = ({
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
  return <SafeAreaView style={_styles.oRyTqhpK}>
      <ScrollView>
        <View style={_styles.alveHVQs}>
          <Text>{dummyData.name}</Text>
          <Text>{dummyData.username}</Text>
          <Image source={{
          uri: dummyData.profilePicture
        }} style={_styles.SxbQCAnz} />
          <Text>{dummyData.phoneNumber}</Text>
          <Text>{dummyData.bio}</Text>
          <Text>Following: {dummyData.following}</Text>
          <Button title="Go to Following List" onPress={() => navigation.navigate('FollowingList')} />
          <Text>Followers: {dummyData.followers}</Text>
          <Button title="Go to Follower List" onPress={() => navigation.navigate('FollowerList')} />
          <Button title="Follow/Unfollow" onPress={() => {}} />
          <Button title="Chat" onPress={() => {}} />
          <Button title="Block User" onPress={() => {}} />
          <Button title="Report User" onPress={() => navigation.navigate('ReportContent')} />

          {dummyData.lists.map((list, index) => <View key={index}>
              <Text>{list.title}</Text>
              <Text>{list.description}</Text>

              {list.entities.map((entity, index) => <TouchableOpacity key={index} onPress={() => navigation.navigate('EntityProfile', {
            entity
          })}>
                  <Text>{entity.title}</Text>
                  <Text>{entity.description}</Text>
                  <Image source={{
              uri: entity.image
            }} style={_styles.BMlNMdRx} />
                </TouchableOpacity>)}

              <Button title="Report List" onPress={() => navigation.navigate('ReportContent')} />
              <Text>Number of users added from the list: {list.entities.length}</Text>
              <Button title="Add to My List" onPress={() => navigation.navigate('AddToList')} />
              <Button title="Recommend Entity" onPress={() => navigation.navigate('RecommendEntity')} />
              <Button title="Share" onPress={() => {}} />
            </View>)}
        </View>
      </ScrollView>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  oRyTqhpK: {
    flex: 1,
    backgroundColor: "#fff"
  },
  alveHVQs: {
    padding: 20
  },
  SxbQCAnz: {
    width: 100,
    height: 100
  },
  BMlNMdRx: {
    width: 50,
    height: 50
  }
});