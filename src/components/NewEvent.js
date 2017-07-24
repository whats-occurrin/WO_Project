import React, { Component } from 'react';
import { database } from '../../firebase';
import firebase from 'firebase'
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Spinner, Button } from './common';

class NewEvent extends Component {
    constructor() {
        super();
        this.state = {
            type: '',
            title: '',
            address: '',
            coordinate: {
                latitude: 0,
                longitude: 0
            },
            details: '',
            image: '',
            date: '',
            time: '',
            sponsored: false,
            recurring: '',
            userId: ''
        }

        this.eventsref = database.ref('/events');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.eventsref.push({
            type: this.state.type,
            title: this.state.title,
            address: this.state.address,
            coordinate: {
                latitude: this.state.coordinate.latitude,
                longitude: this.state.coordinate.longitude
            },
            details: this.state.details,
            image: this.state.image,
            date: this.state.date,
            time: this.state.time,
            sponsored: this.state.sponsored,
            recurring: this.state.recurring,
            userId: this.state.userId

        });
    }

    render() {
        const { type, title, address, coordinate, details, image, date, time, sponsored, recurring, userId } = this.state;
        return (
            <Card>
                <Text style={styles.headerTextStyle}>Add an event</Text>
                <CardSection>
                    <Button
                        onPress={this.handleSubmit}
                        disabled={!address}
                    >
                        Submit
                    </Button>
                </CardSection>
                <CardSection>
                    <Input
                        type=""
                        placeholder="Type"
                        value={this.state.type}
                        onChangeText={type => this.setState({ type })}
                    />
                    <Input
                        type=""
                        placeholder="Title"
                        value={this.state.title}
                        onChangeText={title => this.setState({ title })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        type=""
                        placeholder="address"
                        value={this.state.address}
                        onChangeText={address => this.setState({ address })}
                    />
                    <Input
                        type=""
                        placeholder="location"
                        value={this.state.coordinate}
                        onChangeText={coordinate => this.setState({ coordinate })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        type=""
                        placeholder="Details"
                        value={this.state.details}
                        onChangeText={details => this.setState({ details })}
                    />
                    <Input
                        type=""
                        placeholder="Image"
                        value={this.state.image}
                        onChangeText={image => this.setState({ image })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        type=""
                        placeholder="Date"
                        value={this.state.date}
                        onChangeText={date => this.setState({ date })}
                    />
                    <Input
                        type=""
                        placeholder="Time"
                        value={this.state.time}
                        onChangeText={time => this.setState({ time })}
                    />

                </CardSection>

                <CardSection>
                    <Input
                        type=""
                        placeholder="Sponsored"
                        value={this.state.sponsored}
                        onChangeText={sponsored => this.setState({ sponsored })}
                    />
                    <Input
                        type=""
                        placeholder="Reccurring"
                        value={this.state.recurring}
                        onChangeText={recurring => this.setState({ recurring })}
                    />
                    </CardSection>

                <CardSection>
                    <Input
                        type=""
                        placeholder="User"
                        value={this.state.userId}
                        onChangeText={userId => this.setState({ userId })}
                    />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerTextStyle: {
        fontSize: 20
    }
}



export default NewEvent;
