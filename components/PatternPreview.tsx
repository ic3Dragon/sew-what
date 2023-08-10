import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/constants'

type PatternPreviewProps = {
  name: string,
  imageSrc?: string,
  company?: string
}
const PatternPreview = ({name, imageSrc, company}:PatternPreviewProps) => {
  return (
    <View style={styles.container}>
      <Text>{company}</Text>
      <Image source={imageSrc && {
          uri: imageSrc,
        }} style={styles.patternImage} alt={name}/>
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
  }
})