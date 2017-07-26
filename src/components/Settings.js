import React, { Component } from 'react';
import { Text, Slider } from 'react-native';
//import Button from './common';
import { Actions } from 'react-native-router-flux';
import AppHeader from './common/AppHeader';

import { Container, Button } from 'native-base';

class Settings extends Component {
    render() {
        return (
            <Container >
                <AppHeader />
                <Text>Settings!</Text>
                <Text>{'I\'m interested in events within a '}</Text>
                <Slider></Slider>
                <Text>mile radius</Text>
                <Text>Please select the event types you are interested in...</Text>

                <Button ><Text>Restaurants</Text></Button><Button ><Text>Pubs and bars</Text></Button>

                <Button ><Text>Theatre</Text></Button><Button ><Text>Sports</Text></Button>

                <Button onPress={() => Actions.eventListPage()}>
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
