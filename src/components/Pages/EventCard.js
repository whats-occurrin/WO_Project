import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CardSection from '../common/CardSection';
import Card from '../common/Card';
import AppHeader from '../common/AppHeader.js';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base';
const EventCard = (props) => {
    return (
        <View>
            <AppHeader headerText={'What\'s Occurring?'} />
            <Text style={styles.titleText}>{props.event.title}</Text>
            <Text style={styles.addressText}>{props.event.address}</Text>
            <Image
          style={styles.image}
          source={{uri: props.event.image}}
        />
        <Text style={styles.details}>{props.event.details}</Text>
        <Button onPress={() => Actions.eventListPage()}>
                    <Text>Back</Text>
                </Button>
        </View>

    );
};

const styles = StyleSheet.create ({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    addressText: {
        fontSize: 16,
        color: '#1595A3',
        textAlign: 'center',
        paddingBottom: 5
    },
    image: {
        width: 'auto', 
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    details: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingTop: 15
    }
});

export default EventCard;