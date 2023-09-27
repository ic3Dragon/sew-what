import {View, StyleSheet, TextInput, Text, FlatList, Dimensions} from 'react-native';
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

  const calculateNrColumns = () => {
    const windowWidth = Dimensions.get('window').width;
    const minSideMargins = 20;
    const columnWidthInclMargin = 180;
    const columnsThatFit = Math.floor((windowWidth - minSideMargins)/columnWidthInclMargin);

    return columnsThatFit > 6 ? 6 : columnsThatFit;
  }

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
        numColumns={calculateNrColumns()}
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
    gap: 5,
  },
  filter: {

  },
  input: {
    textAlign: 'center',
    height: 50,
    marginTop: 15,
    marginBottom: 5,
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
    marginTop: 10,
  }
});

export default Gallery
