import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Event from './Event';
import Map from './Map';
import { database } from '../../firebase';
import map from 'lodash/map';
import AppHeader from './common/AppHeader';

class EventList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const events = this.props.events;
        console.log(this.props.events);
        return (
            <View>
                <Map />
                <AppHeader />

                <Text>Hello!</Text>
                <ScrollView>    
                    {
                        map(events, (event, key) => {
                            return <Event 
                                key={key}
                                {...event}
                        
                        
                            />;
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

export default EventList;