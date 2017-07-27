import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Settings from './components/Settings';
import EventList from './components/EventList';
import AppHeader from './components/common/AppHeader';
import NewEvent from './components/NewEvent';
import EventListPage from './components/Pages/EventListPage';
import EventCard from './components/Pages/EventCard';

class RouterComponent extends Component {

    render() {
        return (
            <Router sceneStyle={{ paddingTop: 65 }}>

                <Scene key="root">
                    <Scene initial key="eventListPage" component={EventListPage} title="EventListPage" />
                    <Scene key="settings" component={Settings} title="Settings" />
                    <Scene key="appHeader" component={AppHeader} title="AppHeader" />
                    <Scene key="displayCard" component={EventCard} title="Card" />
                    <Scene key="newEvent" component={NewEvent} title="NewEvent" />
                </Scene>

            </Router>
        );
    }
}

export default RouterComponent;