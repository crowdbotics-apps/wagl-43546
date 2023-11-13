import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'User 1'
}, {
  id: '2',
  name: 'User 2'
}, {
  id: '3',
  name: 'User 3'
}, {
  id: '4',
  name: 'User 4'
}, {
  id: '5',
  name: 'User 5'
}];

const UserScreen = ({
  navigation
}) => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('UserProfile', {
    userId: item.id
  })}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  backButton: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    margin: 10,
    borderRadius: 5
  },
  backButtonText: {
    fontSize: 18,
    color: '#333'
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 18,
    color: '#333'
  }
});
export default UserScreen;