import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button';
import React from 'react'
import { COLORS } from '../utils/constants'

const Filter = () => {
  return (
    <View>
      <Button title='Filters' color={COLORS.orange} onPress={() => alert('not implemented')}></Button>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({})