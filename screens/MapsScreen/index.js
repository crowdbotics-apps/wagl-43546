import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
const dummyData = {
  place: {
    title: 'Place Title',
    image: 'https://tinyurl.com/42evm3m3',
    address: '123 Street, City, Country',
    totalUsers: 100,
    users: [{
      id: '1',
      username: 'User1',
      image: 'https://tinyurl.com/42evm3m3'
    }, {
      id: '2',
      username: 'User2',
      image: 'https://tinyurl.com/42evm3m3'
    } // More users...
    ]
  }
};

const ScreenComponent = ({
  navigation
}) => {
  const {
    place
  } = dummyData;

  const handlePress = () => {
    navigation.navigate('EntityProfileScreen', {
      place
    });
  };

  return <SafeAreaView style={_styles.qDpVhkIp}>
      <View style={_styles.cDyeYjhq}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={_styles.JPpdZVlo}>{place.title}</Text>
        </TouchableOpacity>
        <Image source={{
        uri: place.image
      }} style={_styles.jJoiUIWM} />
        <Text style={_styles.FqIBDTbO}>{place.address}</Text>
        <Text style={_styles.ScEHVaTr}>{place.totalUsers} users added this place</Text>
        <FlatList data={place.users} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={_styles.IgtiXWgU}>
              <Image source={{
          uri: item.image
        }} style={_styles.lOmUDOeF} />
              <Text style={_styles.PNbqyGyR}>{item.username}</Text>
            </View>} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  qDpVhkIp: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cDyeYjhq: {
    padding: 20
  },
  JPpdZVlo: {
    fontSize: 24,
    fontWeight: "bold"
  },
  jJoiUIWM: {
    width: "100%",
    height: 200
  },
  FqIBDTbO: {
    fontSize: 18,
    color: "#888"
  },
  ScEHVaTr: {
    fontSize: 18,
    color: "#888"
  },
  IgtiXWgU: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  lOmUDOeF: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  PNbqyGyR: {
    marginLeft: 10,
    fontSize: 16
  }
});