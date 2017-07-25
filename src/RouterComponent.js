import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux';
import Settings from './components/Settings';
import EventList from './components/EventList';
import AppHeader from './components/common/AppHeader';
import NewEvent from './components/NewEvent';

class RouterComponent extends Component {

  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>

        <Scene key="root">
           <Scene initial key="eventList" component={EventList} title="EventList" /> 
                     <Scene key="appHeader" component={AppHeader} title="AppHeader" />

        <Scene key="newEvent" component={NewEvent} title="NewEvent"/>

          <Scene key="settings" component={Settings} title="Settings" />


        </Scene>

      </Router>
    );
  }
}

export default RouterComponent;