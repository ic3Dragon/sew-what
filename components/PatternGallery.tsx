import {View, StyleSheet, TextInput, Text, FlatList, Dimensions} from 'react-native';
import React, { useCallback, useEffect } from 'react'
import { COLORS } from '../utils/constants';
import PatternPreview from '../components/PatternPreview';
import { PatternData } from "../utils/types";
import Filter from './Filter';
import Fuse from 'fuse.js';

type Props = {
  patterns: PatternData[]
}

const fuseOptions = {
	isCaseSensitive: false,
	// includeScore: false,
	shouldSort: true,
	// includeMatches: false,
	findAllMatches: true,
	// minMatchCharLength: 1,
	// location: 0,
	threshold: 0.4,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		'patternName',
		'company',
    'tags'
	]
};

const Gallery = ({patterns}: Props) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [patternsToShow, setPatternsToShow] = React.useState(patterns);

  const fuse = new Fuse(patterns, fuseOptions);

  useEffect(() => {
    if(!searchQuery) {
      setPatternsToShow(patterns);
    } else {
    const results = fuse.search(searchQuery).map((result) => result.item);
    setPatternsToShow(results);
  }
  },[searchQuery]);

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
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search    🔍"
        />
      </View>
      <Filter />
      <Text>All Patterns &gt; </Text>
      <Text> Showing {patternsToShow.length} patterns </Text>
      <FlatList 
        style={styles.gallery} 
        data={patternsToShow}
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
