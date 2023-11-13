import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {// Handle submit logic here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Subject" value={subject} onChangeText={setSubject} />
        <TextInput style={styles.input} placeholder="Message" value={message} onChangeText={setMessage} multiline />
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Back" onPress={() => {}} />
      </View>
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
    width: '80%'
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
export default FeedbackScreen;