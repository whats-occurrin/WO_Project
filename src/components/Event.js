import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';
import PropTypes from 'prop-types';

const Event = ({ event }) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{event.title}</Text>
                    <Text style={styles.bodyTextStyle}>{event.address}</Text>
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

Event.propTypes = {
    event: PropTypes.element.isRequired
};

export default Event;