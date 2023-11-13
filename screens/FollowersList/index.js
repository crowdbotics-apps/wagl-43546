import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
const users = [{
  id: 1,
  name: 'User 1'
}, {
  id: 2,
  name: 'User 2'
}, {
  id: 3,
  name: 'User 3'
} // Add more users as needed
];

const UserListScreen = ({
  navigation
}) => {
  return <SafeAreaView style={styles.container}>
      {users.map(user => <View key={user.id} style={styles.userContainer}>
          <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          <Text style={styles.userName}>{user.name}</Text>
          <Button title="Unfollow" onPress={() => console.log(`Unfollow ${user.name}`)} />
          <TouchableOpacity onPress={() => navigation.navigate('UserProfile', {
        userId: user.id
      })}>
            <Text style={styles.linkText}>Go to profile</Text>
          </TouchableOpacity>
        </View>)}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  userName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  linkText: {
    color: '#0000FF',
    textDecorationLine: 'underline'
  }
});
export default UserListScreen;