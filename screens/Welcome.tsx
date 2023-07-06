import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Button  from '../components/Button';
import { COLORS } from '../utils/constants';

const Welcome: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image source={require('../assets/icon.png')} style={styles.logo}></Image>
      </View>
      <Text style={styles.text}>Welcome!</Text>
      <Text style={styles.text}>App under construction...</Text>
      <View style={styles.buttons}>
        <Button title="Explore" color={COLORS.darkblue} onPress ={() => navigation.navigate('Explore')}/>
        <Button title="My Gallery" color={COLORS.darkblue} onPress ={() => navigation.navigate('My Gallery')}/>
        <Button title="Add New Pattern"  color={COLORS.darkblue} onPress ={() => navigation.navigate('New Pattern')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 10
  },
  text: {
    fontSize: 30,
    color: COLORS.dark,
  },
  logo_container: {
    marginTop: -120,
    marginBottom: 30,
    width: 170,
    height: 170,
    backgroundColor: COLORS.lightblue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  logo: {
    width: 140, 
    height: 140
  },
  buttons: {
    marginTop: 30,
    gap: 20
  }
});

export default Welcome;