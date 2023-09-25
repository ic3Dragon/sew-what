import {View, StyleSheet, TextInput, Text, FlatList} from 'react-native';
import React, { useCallback } from 'react'
import { COLORS } from '../utils/constants';
import Button from '../components/Button';
import PatternPreview from '../components/PatternPreview';
import { PatternData } from "../utils/types";


type Props = {
  patterns: PatternData[]
}

const Gallery = ({patterns}: Props) => {
  const [search, onChangeSearch] = React.useState('');

  const renderPreview = useCallback(({ item }) => (<PatternPreview pattern={item}/>),[]);

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
      <Button title='Filters' color={COLORS.orange} onPress={() => alert('not implemented')}></Button>
      <Text>All Patterns &gt; </Text>
      <Text> Showing {patterns.length} patterns </Text>
      <FlatList 
        style={styles.gallery} 
        data={patterns}
        renderItem={renderPreview}
        keyExtractor={pattern => pattern.id}
        horizontal={false}
        numColumns={2}
      />
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
    gap: 10,
  },
  filter: {
    marginTop: 5
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
  gallery: {
    flexWrap: 'wrap',
    alignContent: 'center',
    width: '100%',
    gap: 30,
  }
});

export default Gallery
