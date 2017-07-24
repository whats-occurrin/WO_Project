/// event

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';
import map from 'lodash/map';

class Event extends Component {

    render() {
        const {address, title}  = this.props
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
        const events = this.props.events
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

//old event list

class EventList extends Component {

    renderEvents() {
        return events.map(event =>
            <Event key={event.id} event={event} />

        );
    }

    render() {
        return (
            <View>
                <Map />
                <ScrollView>
                    {this.renderEvents()}
                </ScrollView>
            </View>
        );
    }
}

export default EventList;

//old event

import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';

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