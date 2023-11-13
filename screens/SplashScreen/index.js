import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Animated } from 'react-native';

const SplashScreen = ({
  navigation
}) => {
  const fadeAnim = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start(() => navigation.navigate('LoginScreen'));
  }, [fadeAnim]);
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.Image style={{ ...styles.logo,
        opacity: fadeAnim
      }} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Animated.Text style={{ ...styles.text,
        opacity: fadeAnim
      }}>
          Welcome to Wagl
        </Animated.Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default SplashScreen;