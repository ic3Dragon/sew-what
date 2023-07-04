import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react'
import { COLORS } from '../utils/constants';

const Gallery = () => {
  const [search, onChangeSearch] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeSearch}
          value={search}
          placeholder="Search    🔍"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    gap: 10 
  },
  filter: {
    marginTop: 20
  },
  input: {
    textAlign: 'center',
    height: 50,
    margin: 15,
    width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
  },
});

export default Gallery
