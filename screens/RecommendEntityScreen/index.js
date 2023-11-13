import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.profileName}>Username</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>List Title</Text>
        <Text style={styles.listDescription}>List Description</Text>
      </View>
      <TextInput style={styles.input} placeholder="Search and select or add new" />
      <TextInput style={styles.input} placeholder="Description- Attach links" />
      <Button title="Upload image" onPress={() => {}} />
      <Button title="Add more" onPress={() => {}} />
      <Button title="Send" onPress={() => {}} />
      <Button title="Back" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  listContainer: {
    marginBottom: 20
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  listDescription: {
    fontSize: 14
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  }
});
export default ScreenComponent;