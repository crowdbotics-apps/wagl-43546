import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, Text, Image, Button, ScrollView, Linking } from 'react-native';

const ScreenComponent = () => {
  const entity = {
    title: 'Dummy Title',
    description: 'Dummy Description',
    imageUrl: 'https://tinyurl.com/42evm3m3',
    contactInfo: 'Dummy Contact Info',
    locationInfo: 'Dummy Location Info',
    websiteLink: 'https://dummywebsite.com',
    otherDetails: 'Other dummy details',
    totalUsers: 100,
    users: ['User1', 'User2', 'User3']
  };
  return <SafeAreaView style={_styles.kHOprLNc}>
      <ScrollView style={_styles.JYkMVsJR}>
        <Text style={_styles.UkORzbYT}>{entity.title}</Text>
        <Image source={{
        uri: entity.imageUrl
      }} style={_styles.wXPRkisY} />
        <Text style={_styles.MsnzhBjh}>{entity.description}</Text>
        <Text style={_styles.fQAJqQpr}>Contact Info: {entity.contactInfo}</Text>
        <Text style={_styles.hUgkayJv}>Location Info: {entity.locationInfo}</Text>
        <Text style={_styles.jJYmLSxz}>Other Details: {entity.otherDetails}</Text>
        <Text style={_styles.biaJOHwA}>Total Users: {entity.totalUsers}</Text>
        <Text style={_styles.MtTywSSj}>Users: {entity.users.join(', ')}</Text>
        <Button title="Report Entity" onPress={() => alert('Report Entity')} />
        <Text style={_styles.GyezklFA}>
          Website: 
          <Text style={_styles.AnUdFtbf} onPress={() => Linking.openURL(entity.websiteLink)}>
            {entity.websiteLink}
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  kHOprLNc: {
    flex: 1,
    backgroundColor: "#fff"
  },
  JYkMVsJR: {
    padding: 20
  },
  UkORzbYT: {
    fontSize: 24,
    fontWeight: "bold"
  },
  wXPRkisY: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 20
  },
  MsnzhBjh: {
    fontSize: 18
  },
  fQAJqQpr: {
    fontSize: 18,
    marginTop: 20
  },
  hUgkayJv: {
    fontSize: 18,
    marginTop: 20
  },
  jJYmLSxz: {
    fontSize: 18,
    marginTop: 20
  },
  biaJOHwA: {
    fontSize: 18,
    marginTop: 20
  },
  MtTywSSj: {
    fontSize: 18,
    marginTop: 20
  },
  GyezklFA: {
    fontSize: 18,
    marginTop: 20
  },
  AnUdFtbf: {
    color: "blue"
  }
});