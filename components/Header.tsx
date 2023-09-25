import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../utils/constants'

type Props = {
	name: string
}

const Header = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageName}>
        {name}
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
	container : { 
		flexDirection:'row', 
	},
	pageName : {
		fontWeight:'bold',
		fontSize:20,
		color:COLORS.dark
	}
})
