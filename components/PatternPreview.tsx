import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/constants'
import { PatternData } from '../utils/types'

type PatternPreviewProps = {
  pattern: PatternData
}

const removePatternFromName = (name: string):string => name.replace(/\bpattern\b/i, '');

const PatternPreview = ({pattern}: PatternPreviewProps) => {
  return (
    <View style={styles.container}>
      <Image source={pattern.imageSrc && {
          uri: pattern.imageSrc,
        }} style={styles.patternImage} alt={pattern.patternName}/>
      <Text style={styles.patternName}>{removePatternFromName(pattern.patternName)}</Text>
    </View>
  )
}

export default PatternPreview

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    backgroundColor: COLORS.light,
    width: 150,
    height: 200,
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
  },
  patternName : {

  }
})