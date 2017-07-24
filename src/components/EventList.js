import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Event from './Event';
import Map from './Map';
import { database } from '../../firebase'
import map from 'lodash/map';
import events from './fakeData'

class EventList extends Component {

    renderEvents() {
        return map(this.props.events, event =>
            <Event key={event.id} event={event} />
        );
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.renderEvents()}
                </ScrollView>
            </View>
        );
    }
}

export default EventList;