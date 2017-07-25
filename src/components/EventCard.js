import React, {Component} from 'react';
import { Text } from 'react-native';
import CardSection from './common/CardSection';
import Card from './common/Card';

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