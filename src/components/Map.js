import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import calcGeoDistance from './helpers/calcGeoDistance';

export default class Map extends Component {

    constructor(props) {
        super(props)
        this.state = {};
        this.filterEventsByLocation = this.filterEventsByLocation.bind(this);
    }

    componentDidMount() {
        console.log('Getting LOCATION')
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                const { latitude, longitude } = coords
                console.log('GOT the location!')
                this.setState({
                    position: {
                        latitude,
                        longitude
                    },
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }
                });
            },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    render() {
        const { region, position, events } = this.state
        const eventsFound = this.filterEventsByLocation(this.props.events);
        
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={region}
                >

                    {map(eventsFound, event =>
                        <MapView.Marker
                            key={event.id}
                            coordinate={event.coordinate}
                            title={event.title}
                            description={event.details}
                        />
                    )}
                    {position && (
                        <MapView.Circle
                            center={position}
                            radius={300}
                            strokeColor={'transparent'}
                            fillColor={'rgba(112,185,213,0.30)'}
                        />
                    )}
                    {position && (
                        <MapView.Circle
                            center={position}
                            radius={100}
                            strokeColor={'transparent'}
                            fillColor={'#3594BC'}
                        />
                    )}
                </MapView>
            </View>
        )
    }

    filterEventsByLocation(events) {
        const { position } = this.state;

        return reduce(events, (acc, event, key) => {
            if (calcGeoDistance(position, event.coordinate) < 1.5) {
                acc[key] = Object.assign({}, event);
            }
            return acc;
        }, {});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 300,
        backgroundColor: '#EEE'
    },
    map: {
        flex: 1,
        zIndex: -1,
    }
})

