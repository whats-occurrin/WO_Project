/// event

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
                                    event={event}
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



//event list

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Event from './Event';
import events from './fakeData';
import Map from './Map';
import { database } from '../../firebase'
import map from 'lodash/map';


class EventList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const events = this.props
        return (
            <View>
                <Map />
                {
                    map(events, (event, key) => {
                        return <Event 
                        key={key}
                        {...event}
                        
                        
                        />
                    })
                }
            </View>
        );
    }
}


export default EventList;