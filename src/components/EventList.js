import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
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
                ? <List style={{ marginTop: 0 }}>{events.map((event, i) =>
                    <Event key={i} event={event} />)}
                </List>
                : <Text>No Events</Text>
        );
    }
}

EventList.propTypes = {
    events: PropTypes.object.isRequired
};

export default EventList;