import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { Container, Header, Title, Icon, Content } from 'native-base';

class EventCard extends Component {
    render() {
        return (
            <CardSection >
                <Card>
                    <Text>EventCard</Text>
                </Card>
            </CardSection>
        );
    }
}

export default EventCard;