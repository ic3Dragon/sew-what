import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGoogleSignIn } from '../utils/hooks/useGoogleSignIn';


export default function SignInScreen() {

  const handleSignIn = async () => {
    try {
      const result = await useGoogleSignIn();
      console.log({result})
     } catch (error) {
      console.log(error);
     }
    } 
   
   handleSignIn();

  return (
    <View style={styles.container}>
      <Text>Sign In!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});