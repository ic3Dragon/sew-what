import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image source={require('../assets/icon.png')} style={styles.logo}></Image>
      </View>
      <Text style={styles.text}>Welcome!</Text>
      <Text style={styles.text}>App under construction...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfbfb',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  text: {
    fontSize: 30,
    color: '#25292f',
    marginTop: 40,
  },
  logo_container: {
    marginTop: -120,
    width: 170,
    height: 170,
    backgroundColor: 'rgb(205, 253, 255)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  logo: {
    width: 140, 
    height: 140
  },
});

// const newColorTheme = {
//   brand: {
//     light: "#fcfbfb",
//     dark: "#25292f",
//     lightblue: "#cdfdff",
//     darkblue: "#05aabb",
//     orange: "#fab007"
//   }
// }
