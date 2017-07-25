import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Event from './Event';
import map from 'lodash/map';
import PropTypes from 'prop-types';


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

EventList.propTypes = {
    events: PropTypes.element.isRequired
};

export default EventList;