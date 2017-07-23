import React, { Component } from 'react';
import { View, Text} from 'react-native';
import firebase from 'firebase';
import { auth } from './firebase';

import Header from './src/components/common/Header';
import EventList from './src/components/EventList';
import Map from './src/components/Map';
import SignIn from './src/components/Signin';
import { Button, Spinner } from './src/components/common';

class App extends Component {
      state = {
            loggedIn: null
      };

      componentWillMount() {
            auth.onAuthStateChanged((user) => {
                  if (user) {
                        this.setState({
                              loggedIn: true
                        });
                  } else {
                        this.setState({
                              loggedIn: false
                        });
                  }
            });
      }

      renderContent() {
            switch (this.state.loggedIn) {
                  case true:
                        return (
                              <View>
                                    
                                    <EventList/>
                                    <Text>Logout</Text>
                              </View>

                        )
                  case false:
                        return <SignIn />
                  default:
                        return <Spinner size="large" />
            }
      }

      render() {
            return (
                  <View style={{ flex: 1 }}>
                        <Header headerText={'What\'s Occurring?'} />

                        {this.renderContent()}

                  </View>
            );
      }
}

export default App;
