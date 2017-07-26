import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Event = ({ event }) => {
    console.log(event);
    return (

        <ListItem 
            style={{ minHeight: 30 }} 
            onPress={() => Actions.displayCard({event})} 
            title={event.address} 
        />

    );
};

const styles = {
    headerTextStyle: {
        fontSize: 20
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
};

Event.propTypes = {
    event: PropTypes.object.isRequired
};

export default Event;