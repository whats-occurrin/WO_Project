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