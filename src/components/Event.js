import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';
import map from 'lodash/map';
import Map from './Map'

class Event extends Component {

    render() {
        const { address, title } = this.props
        return (
            <Card>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>
                            {address}
                            {title}
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