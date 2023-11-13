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
  return <SafeAreaView style={_styles.NNIiAHhO}>
      <ScrollView style={_styles.nOlYhPEu}>
        <Text style={_styles.lYNVAuGc}>{entity.title}</Text>
        <Image source={{
        uri: entity.imageUrl
      }} style={_styles.uKvPZpFq} />
        <Text style={_styles.cTHZzerS}>{entity.description}</Text>
        <Text style={_styles.fHPvGzDy}>Contact Info: {entity.contactInfo}</Text>
        <Text style={_styles.WEOsbeiK}>Location Info: {entity.locationInfo}</Text>
        <Text style={_styles.RbYqzGub}>Other Details: {entity.otherDetails}</Text>
        <Text style={_styles.UhSbihUc}>Total Users: {entity.totalUsers}</Text>
        <Text style={_styles.iZCwRDzp}>Users: {entity.users.join(', ')}</Text>
        <Button title="Report Entity" onPress={() => alert('Report Entity')} />
        <Text style={_styles.hXHwWiWV}>
          Website: 
          <Text style={_styles.ecaMnSZn} onPress={() => Linking.openURL(entity.websiteLink)}>
            {entity.websiteLink}
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  NNIiAHhO: {
    flex: 1,
    backgroundColor: "#fff"
  },
  nOlYhPEu: {
    padding: 20
  },
  lYNVAuGc: {
    fontSize: 24,
    fontWeight: "bold"
  },
  uKvPZpFq: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 20
  },
  cTHZzerS: {
    fontSize: 18
  },
  fHPvGzDy: {
    fontSize: 18,
    marginTop: 20
  },
  WEOsbeiK: {
    fontSize: 18,
    marginTop: 20
  },
  RbYqzGub: {
    fontSize: 18,
    marginTop: 20
  },
  UhSbihUc: {
    fontSize: 18,
    marginTop: 20
  },
  iZCwRDzp: {
    fontSize: 18,
    marginTop: 20
  },
  hXHwWiWV: {
    fontSize: 18,
    marginTop: 20
  },
  ecaMnSZn: {
    color: "blue"
  }
});