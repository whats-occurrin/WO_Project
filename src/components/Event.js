import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardSection } from './common';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Event = ({ event }) => {
    console.log(event.details);
    return (

        <ListItem
            style={styles.mainStyle}
            onPress={() => Actions.displayCard({ event })}
            title={event.title}
            subtitle={event.address}
        />

    );
};

const styles = StyleSheet.create({
    mainStyle: {
        minHeight: 50,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        flex: 1,
        fontSize: 13,
        padding: 4,
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

Event.propTypes = {
    event: PropTypes.object.isRequired
};

export default Event;