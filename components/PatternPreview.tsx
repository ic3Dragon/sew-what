import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/constants'
import { PatternData } from '../utils/types'

type PatternPreviewProps = {
  pattern: PatternData
}

const PatternPreview = ({pattern}: PatternPreviewProps) => {
  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={pattern.imageSrc && {
          uri: pattern.imageSrc,
        }} style={styles.patternImage} alt={pattern.patternName}/>
    </View>
      <Text style={styles.patternName}>{pattern.patternName}</Text>
    </View>
  )
}

export default PatternPreview

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 150,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  imageContainer : {
    alignItems: 'center',
    backgroundColor: COLORS.medium,
    width: 150,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 5,
    overflow: 'hidden',
  },
  patternImage : {
    resizeMode: 'contain',
    height: 208,
    width: 160,
    borderRadius: 5,
    marginTop: -4,
  },
  patternName : {
    textAlign: 'center',
    marginTop: 7
  }
})