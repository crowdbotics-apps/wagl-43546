import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Switch, Button, Alert } from 'react-native';

const SettingsScreen = () => {
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [isSMSEnabled, setIsSMSEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [{
      text: 'Cancel',
      style: 'cancel'
    }, {
      text: 'OK',
      onPress: () => console.log('OK Pressed')
    }], {
      cancelable: false
    });
  };

  return <SafeAreaView style={_styles.iKhjxHGJ}>
      <View style={_styles.eNuxwyxD}>
        <Text>Notifications</Text>
        <Switch onValueChange={setIsPushEnabled} value={isPushEnabled} />
      </View>
      <View style={_styles.FvVzgOML}>
        <Text>Email notifications</Text>
        <Switch onValueChange={setIsEmailEnabled} value={isEmailEnabled} />
      </View>
      <View style={_styles.KjBUZouu}>
        <Text>SMS notifications</Text>
        <Switch onValueChange={setIsSMSEnabled} value={isSMSEnabled} />
      </View>
      <Button title="Privacy policy" onPress={() => {}} />
      <Button title="Terms and Conditions" onPress={() => {}} style={_styles.rbmfzMKY} />
      <Button title="Support/ Send Feedback" onPress={() => {}} style={_styles.JLeoJvrs} />
      <Button title="Delete account" onPress={() => {}} style={_styles.sAEpRRTj} />
      <Button title="Log out" onPress={handleLogout} style={_styles.zzascRzW} />
    </SafeAreaView>;
};

export default SettingsScreen;

const _styles = StyleSheet.create({
  iKhjxHGJ: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  eNuxwyxD: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  FvVzgOML: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  KjBUZouu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  rbmfzMKY: {
    marginTop: 20
  },
  JLeoJvrs: {
    marginTop: 20
  },
  sAEpRRTj: {
    marginTop: 20
  },
  zzascRzW: {
    marginTop: 20
  }
});