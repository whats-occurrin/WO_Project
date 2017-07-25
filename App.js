import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import firebase from 'firebase';
import { auth, database } from './firebase';

import Header from './src/components/common/Header';
import EventList from './src/components/EventList';
import Map from './src/components/Map';
import SignIn from './src/components/Signin';
import { Spinner } from './src/components/common';
import map from 'lodash/map';
import NewEvent from './src/components/NewEvent'

class App extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  currentUser: null,
                  events: null
            };
            this.eventsref = database.ref('/events');
      }


      componentDidMount() {
            auth.onAuthStateChanged((currentUser) => {
                  this.setState({ currentUser });

                  this.eventsref.on('value', (snapshot) => {
                        this.setState({ events: snapshot.val() })
                  });
            });
      }

      render() {
            const { currentUser, events } = this.state
            const { textStyle, viewStyle } = styles;
            return (

                  <View style={{ flex: 1 }}>


                        {!currentUser &&
                              <ScrollView>
                                    <Image
                                          style={{ width: 400, height: 400, alignItems: 'center' }}
                                          source={{ uri: 'http://i3.cpcache.com/product_zoom/421916676/oh_whats_occuring_bib.jpg?color=SkyBlue&height=460&width=460&padToSquare=true' }}

                                    />
                                    <Text style={textStyle}>
                                          Search what's occurring for most upto date things to do local to you. share with friends or talk to the bot
                                    </Text>


                                    <SignIn />

                                    <NewEvent />

                              </ScrollView>

                        }
                        {
                              currentUser &&
                              <View>
                                    <Header headerText={'What\'s Occurring?'} />
                                    <Map events={events} />
                                    <EventList events={events} />

                              </View>



                        }

                  </View>
            );
      }
}

const styles = {
      viewStyle: {
            backgroundColor: '#EB7F00',
            justifyContent: 'center',
            alignItems: 'center',
            height: 75,
            paddingTop: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            elevation: 2,
            position: 'relative'
      },
      textStyle: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#225378'
      }
};

export default App;
