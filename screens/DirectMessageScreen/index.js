import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={() => {}} />
        <View style={styles.profileInfo}>
          <Image style={styles.profilePic} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.username}>Username</Text>
        </View>
      </View>
      <View style={styles.conversation}>
        <Text style={styles.message}>Conversation history...</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Write message..." />
        <Button title="Add photo/video" onPress={() => {}} />
        <Button title="Add document" onPress={() => {}} />
        <Button title="Send" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  username: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  conversation: {
    flex: 1,
    padding: 10
  },
  message: {
    fontSize: 16,
    marginBottom: 10
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  input: {
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  }
});
export default ScreenComponent;