import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './fe_common';

const Event = ({ event }) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{event.address}</Text>
                    <Text style={styles.bodyTextStyle}>{event.title}</Text>
                </View>
            </CardSection>
        </Card>
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
        justifyContent: 'space-around'
    }
};

export default Event;