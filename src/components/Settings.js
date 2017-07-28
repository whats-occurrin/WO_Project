import React, { Component } from 'react';
import { Text, View, Slider } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppHeader from './common/AppHeader';
import { Button } from 'native-base';


class Settings extends Component {

    state = {
        restaurants: false,
        pubs: false,
        theatre: false,
        sports: false

    }

    render() {
        return (
            <View >
                <AppHeader headerText={'What\'s Occurring?'} />
                <Text style={styles.textStyle}>{'I\'m interested in events within a '}</Text>
                <Slider minimumValue={0} maximumValue={20} step={2} value={2} thumbTintColor={'#fc7401'}></Slider>
                <Text style={styles.textStyle}>mile radius</Text>
                <Text style={styles.textStyle}>Please select the event types you are interested in...</Text>

                <View style={{ height: 60, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <Button
                        rounded
                        info={this.state.restaurants}
                        bordered={!this.state.restaurants}
                        onPress={() => this.setState({ restaurants: !this.state.restaurants })}
                    >
                        <Text>Restaurants</Text>
                    </Button>

                    <Button
                        rounded
                        info={this.state.pubs}
                        bordered={!this.state.pubs}
                        onPress={() => this.setState({ pubs: !this.state.pubs })}
                    >
                        <Text>Pubs and bars</Text>
                    </Button>
                </View>

                <View style={{ height: 70, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <Button
                        rounded
                        info={this.state.theatre}
                        bordered={!this.state.theatre}
                        onPress={() => this.setState({ theatre: !this.state.theatre })}
                    >
                        <Text>Theatre</Text>
                    </Button>

                    <Button
                        rounded
                        info={this.state.sports}
                        bordered={!this.state.sports}
                        onPress={() => this.setState({ sports: !this.state.sports })}
                    >
                        <Text>Sports</Text>
                    </Button>
                </View>

                <View style={{ height: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                    <Button rounded success onPress={() => Actions.eventListPage()}>
                        <Text >Update my preferences</Text>
                    </Button>
                </View>

                <View style={{ height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 5, paddingTop: 20 }}>
                    <Button rounded warning onPress={() => Actions.newEvent()}>
                        <Text>Add an event</Text>
                    </Button>
                </View>
            </View>
        );
    }
}



const styles = {
    textStyle: {
        fontSize: 18,
        color: '#000000',
        padding: 10
    }
};

export default Settings;
