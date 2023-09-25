import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text} from 'react-native';
import React from 'react'
import patternData from '../patternData/patternData.json';
import PatternGallery from '../components/PatternGallery';

const Explore = () => {
  return (
    <>
    <PatternGallery patterns={patternData}/>
    <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
});

export default Explore
