import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const ScreenComponent = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [listType, setListType] = React.useState('Public');
  const [entities, setEntities] = React.useState([{
    id: '1',
    title: 'Entity 1',
    description: 'Description 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    title: 'Entity 2',
    description: 'Description 2',
    image: 'https://tinyurl.com/42evm3m3'
  }]);

  const handleAddEntity = () => {// Navigate to Add New Entity Screen
  };

  const handleSave = () => {// Save the list
  };

  const handleBack = () => {// Navigate back
  };

  const handleEditEntity = id => {// Navigate to Edit Entity Screen with id
  };

  const handleRemoveEntity = id => {// Remove entity with id from entities
  };

  const handleEntityProfile = id => {// Navigate to Entity Profile Screen with id
  };

  return <SafeAreaView style={_styles.IsUTFqXW}>
      <TextInput style={_styles.EKjiPAWe} onChangeText={text => setTitle(text)} value={title} placeholder="List name must be #tag" />
      <TextInput style={_styles.NkPtCmTI} onChangeText={text => setDescription(text)} value={description} placeholder="Description" />
      <Button onPress={() => setListType(listType === 'Public' ? 'Private' : 'Public')} title={`List type: ${listType}`} />
      <FlatList data={entities} renderItem={({
      item
    }) => <View style={_styles.ipokGSGk}>
            <Image style={_styles.nLzSHWIm} source={{
        uri: item.image
      }} />
            <View style={_styles.RmUxFbSh}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <TouchableOpacity onPress={() => handleEditEntity(item.id)}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveEntity(item.id)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>} keyExtractor={item => item.id} />
      <Button onPress={handleAddEntity} title="Add new entity" />
      <Button onPress={handleSave} title="Save" />
      <Button onPress={handleBack} title="Back" />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  IsUTFqXW: {
    flex: 1,
    padding: 20
  },
  EKjiPAWe: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  NkPtCmTI: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  ipokGSGk: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  nLzSHWIm: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  RmUxFbSh: {
    flex: 1
  }
});