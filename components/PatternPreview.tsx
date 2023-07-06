import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/constants'

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
    alignItems: 'center',
    backgroundColor: COLORS.light,
    width: 150,
    height: 175,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 5,
  },
  patternImage : {
    resizeMode: 'contain',
    height: 130,
    width: 100,
  }
})