import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, Text, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Entity 1',
  description: 'Description 1',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  title: 'Entity 2',
  description: 'Description 2',
  image: 'https://tinyurl.com/42evm3m3'
} // Add more entities as needed
];

const ShareScreen = ({
  navigation
}) => {
  const renderItem = ({
    item
  }) => <TouchableOpacity onPress={() => navigation.navigate('EntityProfile', {
    id: item.id
  })}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Image source={{
      uri: item.image
    }} style={_styles.cxisscxe} />
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.FFTdViTj}>
      <Text>List to Share</Text>
      <Text>List Title</Text>
      <Text>Description</Text>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <Text>Share with</Text>
      <TextInput placeholder="Search for users" />
      <Button title="Share in chat" onPress={() => {}} />
      <TouchableOpacity onPress={() => {}}>
        <Text>Copy link to share</Text>
      </TouchableOpacity>
      <Text>Share on social media</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>;
};

export default ShareScreen;

const _styles = StyleSheet.create({
  cxisscxe: {
    width: 100,
    height: 100
  },
  FFTdViTj: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});