import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';
import map from 'lodash/map';

class Event extends Component {

    render() {
        const { events } = this.props
        return (
            <Card>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>
                            {
                            map(events, (event, key) => {
                                return 
                                    key={key}
                            })
                        }
                        </Text>
                    </View>
                </CardSection>
            </Card>
        );
    }
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