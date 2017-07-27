import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import EventCard from './Pages/EventCard';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import Event from '../components/Event'

import { List, ListItem } from 'react-native-elements';



class EventList extends Component {

    render() {
        const events = this.props.events && Object.keys(this.props.events).map((key) => Object.assign({}, this.props.events[key], {id: key}));
        return (
            this.props.events
                ? <List style={styles.mainStyle}>{events.map((event, i) =>
                    <Event key={i} event={event} />)}
                </List>
                : <Text>No Events</Text>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        marginTop: 0
    },
    bodyTextStyle: {
        fontSize: 16,
        color: '#1595A3'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 50
    }
});



export default EventList;