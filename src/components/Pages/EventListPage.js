import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { database } from '../../../firebase';

import EventList from '../EventList';
import Map from '../Map';
import AppHeader from '../common/AppHeader';

class EventListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: null
        };
        this.eventsref = database.ref('/events');
    }


    componentDidMount() {
        this.eventsref.on('value', (snapshot) => {
            this.setState({ events: snapshot.val() });
        });
    }

    render() {
        const { events } = this.state;
        const { textStyle } = styles;
        return (

            <View style={{ flex: 1 }}>
                <AppHeader headerText={'What\'s Occurring?'} />
                <View style={{ flex: 1, marginTop: 60 }}>
                    <Map events={events} />
                    <EventList events={events} />
                </View>
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

export default EventListPage;
