import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CardSection from '../common/CardSection';
import Card from '../common/Card';
import AppHeader from '../common/AppHeader.js';

const EventCard = (props) => {
    return (
        <View>
            <AppHeader headerText={'What\'s Occurring?'} />
            <Text>Event Card</Text>
            <Text>{props.event.address}</Text>

        </View>

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

export default EventCard;