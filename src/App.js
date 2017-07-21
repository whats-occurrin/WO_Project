import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/common/Header';
import EventList from './components/EventList';
import Map from './components/Map';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'What\'s Occurring?'} />
     <Map /> 
    <EventList />
  </View>

);

export default App;
