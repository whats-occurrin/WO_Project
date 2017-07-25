import React, { Component } from 'react';

import { Text, View, Slider } from 'react-native';
import firebase from 'firebase';
//import Button from './common';
import { Actions } from 'react-native-router-flux';
import AppHeader from './common/AppHeader';
import NewEvent from './NewEvent';

import { Container, Header, Title, Icon, Content, Button } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';

class Settings extends Component {
    render() {
        return (
            <Container >
                <AppHeader />
                <Text>Settings!</Text>
                <Text>I'm interested in events within a </Text>
                <Slider></Slider>
                <Text>mile radius</Text>
                <Text>Please select the event types you are interested in...</Text>

                <Button iconLeft><Text>Restaurants</Text></Button><Button iconRight transparent dark><Text>Pubs and bars</Text></Button>

                <Button iconLeft><Text>Theatre</Text></Button><Button iconRight><Text>Sports</Text></Button>

                <Button onPress={() => Actions.eventList()}>
                    <Text>Update my preferences</Text>
                </Button>
            
                <Button onPress={() => Actions.newEvent()}>
                <Text>Add an event</Text>
                </Button>


            </Container>
        );
    }
}

export default Settings;
