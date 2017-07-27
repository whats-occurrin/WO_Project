import React, { Component } from 'react';
import { database } from '../../firebase';
import { Text, StyleSheet, View, Dimensions, TextInput, ScrollView } from 'react-native';
import Geocoder from 'react-native-geocoding';
import { Card, CardSection, Input, Button } from './common';
import { Actions } from 'react-native-router-flux';

import { FormLabel, FormInput } from 'react-native-elements';

import AppHeader from './common/AppHeader';

Geocoder.setApiKey('AIzaSyCzxkfc_AwMAk5cPzEaRLTagZBTO1l3PMw'); // use a valid API key

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class NewEvent extends Component {
    constructor() {
        super();
        this.state = {
            type: '',
            title: '',
            address: '',
            coordinate: {
                latitude: 0.00,
                longitude: 0.00
            },
            details: '',
            image: '',
            date: '',
            time: '',
            sponsored: '',
            recurring: '',
            userId: ''
        };

        this.eventsref = database.ref('/events');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        Geocoder.getFromLocation(this.state.address)
            .then(
                json => {
                    this.state.coordinate = json.results[0].geometry.location;
                    let location = json.results[0].geometry.location;
                    this.state.coordinate.latitude = location.lat;
                    this.state.coordinate.longitude = location.lng;

                    this.eventsref.push({
                        address: this.state.address,
                        coordinate: {
                            latitude: this.state.coordinate.latitude,
                            longitude: this.state.coordinate.longitude
                        },
                        details: this.state.details,
                        image: this.state.image,
                        recurring: this.state.recurring,
                        sponsored: this.state.sponsored,
                        date: this.state.date,
                        time: this.state.time,
                        title: this.state.title,
                        type: this.state.type,
                        userId: this.state.userId
                    });
                },
                error => {
                    console.log(error);
                })
            .then(() => {
                Actions.eventListPage();
            });
    }

    render() {
        const { type, title, address, coordinate, details, image, date, time, sponsored, recurring, userId } = this.state;
        return (

            <View style={styles.container}>
                <AppHeader headerText={'What\'s Occurring?'} />
                <View style={styles.formContainer}>
                    <ScrollView>

                        <FormLabel style={{ backgroundColor: 'transparent' }}>Type</FormLabel>
                        <FormInput onChangeText={type => this.setState({ type })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>Title</FormLabel>
                        <FormInput onChangeText={title => this.setState({ title })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>Address</FormLabel>
                        <FormInput onChangeText={address => this.setState({ address })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>Details</FormLabel>
                        <FormInput onChangeText={details => this.setState({ details })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>image</FormLabel>
                        <FormInput onChangeText={image => this.setState({ image })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>date</FormLabel>
                        <FormInput onChangeText={date => this.setState({ date })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>time</FormLabel>
                        <FormInput onChangeText={time => this.setState({ time })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>sponsored</FormLabel>
                        <FormInput onChangeText={sponsored => this.setState({ sponsored })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>recurring</FormLabel>
                        <FormInput onChangeText={recurring => this.setState({ recurring })} />

                        <FormLabel style={{ backgroundColor: 'transparent' }}>userId</FormLabel>
                        <FormInput onChangeText={userId => this.setState({ userId })} />

                        <Button
                            style={styles.createEventButton}
                            onPress={this.handleSubmit}

                        >
                            <Text>Create event</Text>
                        </Button>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height
    },
    formContainer: {
        height: height * 0.9,
        width: width
    },
    formInput: {
        width: width * 0.8,
        paddingLeft: width * 0.1
    },
    headerTextStyle: {
        fontSize: 20
    },
    createEventButton: {
        marginBottom: 10
    }
});

export default NewEvent;
