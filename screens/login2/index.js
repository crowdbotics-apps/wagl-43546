import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  return <SafeAreaView style={_styles.tRYjjZhj}>
      <Image style={_styles.DYoCtJVY} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={_styles.CUejgCFI} placeholder="Email Address" />
      <TextInput style={_styles.DdwLqSdh} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={_styles.LuWdlabr}>
        <Text style={_styles.oLiPCYJx}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={_styles.xHDLjbNm}>Forgot password</Text>
      </TouchableOpacity>
      <Text>OR</Text>
      <Text style={_styles.rYorjPlv}>Sign in via</Text>
      <TouchableOpacity>
        <Text style={_styles.adXfXRwt}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={_styles.IJfayyEC}>Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={_styles.OexMMuvI}>Facebook</Text>
      </TouchableOpacity>
      <Text>Don't have an account?</Text>
      <TouchableOpacity>
        <Text style={_styles.BQyDEMcd}>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

export default LoginScreen;

const _styles = StyleSheet.create({
  tRYjjZhj: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  DYoCtJVY: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  CUejgCFI: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20
  },
  DdwLqSdh: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
    marginBottom: 20
  },
  LuWdlabr: {
    height: 40,
    backgroundColor: "blue",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  oLiPCYJx: {
    color: "white"
  },
  xHDLjbNm: {
    color: "blue",
    marginBottom: 20
  },
  rYorjPlv: {
    marginVertical: 20
  },
  adXfXRwt: {
    color: "blue",
    marginBottom: 20
  },
  IJfayyEC: {
    color: "blue",
    marginBottom: 20
  },
  OexMMuvI: {
    color: "blue",
    marginBottom: 20
  },
  BQyDEMcd: {
    color: "blue"
  }
});