import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { auth } from './firebase';

import SignIn from './src/components/Signin';

import RouterComponent from './src/RouterComponent';
import Event from './src/components/Event'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
        };
    }


    componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
            this.setState({ currentUser });
        });
    }

    render() {
        const { currentUser } = this.state;
        const { textStyle } = styles;
        return (

            <View style={{ flex: 1 }}>


                {!currentUser &&
                    <ScrollView>
                        <Text style={textStyle}>
                            {'Search what\'s occurring for most upto date things to do local to you. share with friends or talk to the bot'}
                        </Text>
                        <SignIn />
                    </ScrollView>
                }
                {
                    currentUser &&
                    <View>
                        <RouterComponent/>
                    </View>
                }
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#EB7F00',
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#225378'
    }
};

export default App;
