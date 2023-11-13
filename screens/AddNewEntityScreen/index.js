import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';

const ScreenComponent = () => {
  const [inputValue, setInputValue] = useState('');
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Search and select or add new</Text>
      <TextInput style={styles.input} onChangeText={setInputValue} value={inputValue} placeholder="Search results" />
      <ScrollView style={styles.results}>
        <View style={styles.resultItem}>
          <Text style={styles.resultTitle}>Title</Text>
          <Text style={styles.resultDescription}>Description</Text>
          <Image style={styles.resultImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </View>
      </ScrollView>
      <TextInput style={styles.input} onChangeText={setInputValue} value={inputValue} placeholder="Description (Input- Attach links)" />
      <Button title="Upload image- 1image (Upload)" onPress={() => {}} />
      <Button title="Save" onPress={() => {}} />
      <Button title="Back" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  results: {
    marginBottom: 10
  },
  resultItem: {
    marginBottom: 10
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  resultDescription: {
    fontSize: 16
  },
  resultImage: {
    width: '100%',
    height: 200
  }
});
export default ScreenComponent;