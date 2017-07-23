import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Event from './Event';
import events from './fakeData';
import Map from './Map'

class EventList extends Component {

    renderEvents() {
        return events.map(event =>
            <Event key={event.id} event={event} />

        );
    }

    render() {
        return (
            <View>
                <Map />
                <ScrollView>
                    {this.renderEvents()}
                </ScrollView>
            </View>
        );
    }
}

export default EventList;