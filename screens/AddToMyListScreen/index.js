import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, Image, CheckBox } from 'react-native';

const ScreenComponent = () => {
  const [selectedEntities, setSelectedEntities] = useState([]);
  const [listTitle, setListTitle] = useState('');
  const [userLists, setUserLists] = useState([]);
  const entities = [{
    id: '1',
    title: 'Entity 1',
    description: 'Description 1'
  }, {
    id: '2',
    title: 'Entity 2',
    description: 'Description 2'
  }, {
    id: '3',
    title: 'Entity 3',
    description: 'Description 3'
  }];

  const handleSelectEntity = id => {
    setSelectedEntities([...selectedEntities, id]);
  };

  const handleAddList = () => {
    setUserLists([...userLists, {
      title: listTitle,
      entities: selectedEntities
    }]);
    setListTitle('');
    setSelectedEntities([]);
  };

  return <SafeAreaView style={_styles.HUHvbWmh}>
      <Text style={_styles.dDoteXLo}>List to add from</Text>
      <FlatList data={entities} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.LFwIKawX}>
            <CheckBox value={selectedEntities.includes(item.id)} onValueChange={() => handleSelectEntity(item.id)} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>} />
      <Text style={_styles.PpNjwrHz}>List to add to</Text>
      <TextInput style={_styles.ZidiVDFe} onChangeText={setListTitle} value={listTitle} placeholder="List title" />
      <Button title="Add" onPress={handleAddList} />
      <FlatList data={userLists} keyExtractor={(item, index) => index.toString()} renderItem={({
      item
    }) => <View>
            <Text>{item.title}</Text>
            <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.kJTMzuaa} />
          </View>} />
      <Button title="Save" onPress={() => {}} />
      <Button title="Back" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  HUHvbWmh: {
    flex: 1,
    padding: 20
  },
  dDoteXLo: {
    fontSize: 24,
    fontWeight: "bold"
  },
  LFwIKawX: {
    flexDirection: "row",
    alignItems: "center"
  },
  PpNjwrHz: {
    fontSize: 24,
    fontWeight: "bold"
  },
  ZidiVDFe: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  kJTMzuaa: {
    width: 50,
    height: 50
  }
});