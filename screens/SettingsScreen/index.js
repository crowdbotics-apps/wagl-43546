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

  return <SafeAreaView style={_styles.jSYLIZdu}>
      <View style={_styles.LjgtjSyf}>
        <Text>Notifications</Text>
        <Switch onValueChange={setIsPushEnabled} value={isPushEnabled} />
      </View>
      <View style={_styles.kwZKBQrX}>
        <Text>Email notifications</Text>
        <Switch onValueChange={setIsEmailEnabled} value={isEmailEnabled} />
      </View>
      <View style={_styles.NWWDcDQL}>
        <Text>SMS notifications</Text>
        <Switch onValueChange={setIsSMSEnabled} value={isSMSEnabled} />
      </View>
      <Button title="Privacy policy" onPress={() => {}} />
      <Button title="Terms and Conditions" onPress={() => {}} style={_styles.mbHkBDgt} />
      <Button title="Support/ Send Feedback" onPress={() => {}} style={_styles.vpCFsnzX} />
      <Button title="Delete account" onPress={() => {}} style={_styles.TMTaFZLb} />
      <Button title="Log out" onPress={handleLogout} style={_styles.kpkPpYDY} />
    </SafeAreaView>;
};

export default SettingsScreen;

const _styles = StyleSheet.create({
  jSYLIZdu: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  LjgtjSyf: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  kwZKBQrX: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  NWWDcDQL: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  mbHkBDgt: {
    marginTop: 20
  },
  vpCFsnzX: {
    marginTop: 20
  },
  TMTaFZLb: {
    marginTop: 20
  },
  kpkPpYDY: {
    marginTop: 20
  }
});