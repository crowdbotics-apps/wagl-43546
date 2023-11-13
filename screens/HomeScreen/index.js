import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    user: {
      username: 'John Doe',
      profilePicture: 'https://tinyurl.com/42evm3m3'
    },
    list: {
      title: 'My List',
      description: 'This is my list',
      entities: ['Entity 1', 'Entity 2', 'Entity 3']
    },
    entity: {
      title: 'New Entity',
      description: 'This is a new entity',
      image: 'https://tinyurl.com/42evm3m3'
    },
    request: {
      title: 'Request Title',
      description: 'Request Description',
      date: '2022-01-01 12:00:00'
    }
  };
  return <SafeAreaView style={_styles.ULFCgIbL}>
      <ScrollView>
        <View style={_styles.HVtUuzlH}>
          <Text style={_styles.selzepeT}>Feeds</Text>
          <TouchableOpacity onPress={() => console.log('Go to user profile')}>
            <View style={_styles.QOMDPojD}>
              <Image source={{
              uri: dummyData.user.profilePicture
            }} style={_styles.kNWOEqdT} />
              <Text style={_styles.xBdFaChJ}>{dummyData.user.username}</Text>
            </View>
          </TouchableOpacity>
          <Text style={_styles.vxbPsGwn}>{dummyData.list.title}</Text>
          <Text>{dummyData.list.description}</Text>
          {dummyData.list.entities.map((entity, index) => <Text key={index}>{entity}</Text>)}
          <Text style={_styles.fOVErYAM}>{dummyData.entity.title}</Text>
          <Text>{dummyData.entity.description}</Text>
          <Image source={{
          uri: dummyData.entity.image
        }} style={_styles.FbajlRCE} />
          <Text style={_styles.OeGDmCJf}>{dummyData.request.title}</Text>
          <Text>{dummyData.request.description}</Text>
          <Text>Posted on: {dummyData.request.date}</Text>
          <Button title="Provide recommendations" onPress={() => console.log('Go to Recommend entity screen')} />
          <Button title="Request Recommendation" onPress={() => console.log('Request Recommendation')} />
        </View>
      </ScrollView>
      <View style={_styles.JCgeCbrO}>
        <TouchableOpacity onPress={() => console.log('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search')}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Map')}>
          <Text>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Chat')}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  ULFCgIbL: {
    flex: 1,
    backgroundColor: "#fff"
  },
  HVtUuzlH: {
    padding: 20
  },
  selzepeT: {
    fontSize: 24,
    fontWeight: "bold"
  },
  QOMDPojD: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  kNWOEqdT: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  xBdFaChJ: {
    marginLeft: 10
  },
  vxbPsGwn: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  fOVErYAM: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  FbajlRCE: {
    width: "100%",
    height: 200,
    marginTop: 10
  },
  OeGDmCJf: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20
  },
  JCgeCbrO: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd"
  }
});