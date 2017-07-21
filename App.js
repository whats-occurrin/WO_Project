import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/common/Header';
import EventList from './src/components/EventList';
import Map from './src/components/Map';

class App extends Component {
  render() {
        return (
  <View style={{ flex: 1 }}>
     <Header headerText={'What\'s Occurring?'} /> 
           <Map />  
     <EventList /> 

  </View>
        )

}
}

export default App;
