import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { auth, database } from './firebase';

import Header from './src/components/common/Header';
import EventList from './src/components/EventList';
import Map from './src/components/Map';
import SignIn from './src/components/Signin';
import { Spinner } from './src/components/common';
import map from 'lodash/map';

class App extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  currentUser: null,
                  events: null
            };
            this.eventsref = database.ref('/events')
      }


      componentDidMount() {
            auth.onAuthStateChanged((currentUser) => {
                  this.setState({ currentUser })

                  this.eventsref.on('value', (snapshot) => {
                        this.setState({ events: snapshot.val() })
                  })
            });
      }

      render() {
            const {currentUser, events} = this.state
            return (

                  <View style={{ flex: 1 }}>
                        <Header headerText={'What\'s Occurring?'} />

                        {!currentUser && <SignIn />}
                        {
                              currentUser &&
                              <EventList events={events}/>



                        }

                  </View>
            );
      }
}

export default App;
