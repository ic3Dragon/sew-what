import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text} from 'react-native';
import React from 'react'
import uuid from "react-native-uuid";

import eamdata from '../patternData/ellieAndMacData.json';
import p4pdata from '../patternData/p4pData.json';
import wawdata from '../patternData/wawData.json';
import PatternGallery from '../components/PatternGallery';

const patternData = [...wawdata, ...eamdata, ...p4pdata, ].map(pattern => ({...pattern, id: uuid.v4().toString()}))

const Explore = () => {
  return (
    <>
    <PatternGallery data={patternData}/>
    <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
});

export default Explore
