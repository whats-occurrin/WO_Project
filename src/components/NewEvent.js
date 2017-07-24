import React, { Component} from 'react';
import { database } from '../../firebase';
import firebase from 'firebase'
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Spinner, Button } from './common';

class NewEvent extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
            coordinate: {
                latitude: '',
                longitude: ''
            },
            details: '',
            image: '',
            reccurring: '',
            sponsored: '',
            timeDate: '',
            title: '',
            type: '',
            userId: ''
        }

        this.eventsref = database.ref('/events');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.eventsref.push({
            address: this.state.address,
            coordinate: {
                latitude: this.state.coordinate.latitude,
                longitude: this.state.coordinate.longitude
            },
            details: this.state.details,
            image: this.state.image,
            reccurring: this.state.reccurring,
            sponsored: this.state.sponsored,
            timeDate: this.state.timeDate,
            title: this.state.timeDate,
            type: this.state.type,
            userId: this.state.userId

        });
    }

    render() {
        const { address, coordinate, details, image, reccurring, sponsored, timeDate, title, type, userId } = this.state;
        return (
            <Card>
                <Text style={styles.headerTextStyle}>Add an event</Text>
                <CardSection>
                    <Input
                        type=""
                        placeholder="Name"
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
                        placeholder="details"
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
                        placeholder="Reccurring"
                        value={this.state.reccurring}
                        onChangeText={reccurring => this.setState({ reccurring })}
                    />
                    <Input
                        type=""
                        placeholder="Sponsored"
                        value={this.state.sponsored}
                        onChangeText={sponsored => this.setState({ sponsored })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        type=""
                        placeholder="Time/Date"
                        value={this.state.timeDate}
                        onChangeText={timeDate => this.setState({ timeDate })}
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
                        placeholder="Type"
                        value={this.state.type}
                        onChangeText={type => this.setState({ type })}
                    />
                    <Input
                        type=""
                        placeholder="User"
                        value={this.state.userId}
                        onChangeText={userId => this.setState({ userId })}
                    />
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.handleSubmit}
                        disabled={!address}
                    >
                        Submit
                    </Button>
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
