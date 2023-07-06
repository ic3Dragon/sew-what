import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

const PatternPreview = ({name}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.patternImage}/>
      <Text>{name}</Text>
    </View>
  )
}

export default PatternPreview

const styles = StyleSheet.create({
  container : {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#6767ea',
    width: 150,
    height: 150
  },
  patternImage : {
    resizeMode: 'contain',
    height: 100,
    width: 100,
  }
})