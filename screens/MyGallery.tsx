import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import React from 'react'
import { data } from '../patternData/dummyData';
import PatternGallery from '../components/PatternGallery';

const MyGallery = () => {

  return (
    <>
    <PatternGallery patterns={data} />
    <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  });

export default MyGallery
