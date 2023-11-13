import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet } from 'react-native';

const RequestRecommendationScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = () => {// Handle the post action here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
        <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      </View>
      <Button title="Post" onPress={handlePost} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5
  }
});
export default RequestRecommendationScreen;