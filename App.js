import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';

import { auth, database } from './firebase';

import SignIn from './src/components/Signin';
import RouterComponent from './src/RouterComponent';
import { Actions } from 'react-native-router-flux';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            pageHeight: Dimensions.get('window').height,
            pageWidth: Dimensions.get('window').width,
            currentUser: {},
            existingUser: false,
            newUser: false,
            user: {}
        };
    }


    componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
            this.setState({ currentUser });
            let userKey;

            if (!currentUser) return;

            userKey = currentUser.email.replace(/\W/g, '');

            let user;
            database.ref('/users/' + userKey).once('value')
                .then(snapshot => {
                    let value = snapshot.val();
                    user = value;
                    if (value === null) {
                        user = {
                            email: userKey,
                            Radius: 10.00,
                            eventType: {
                                restaurants: true,
                                pubsbars: true,
                                theatre: true,
                                sports: true,
                            }
                        };
                        return database.ref('users/' + userKey).set(user);
                    }
                })
                .then(() => {
                    this.setState({
                        user: user
                    });
                    if (!this.state.currentUser.emailVerified) Actions.eventListPage();
                });
        });
    }


    getNewDimensions(event) {
        this.setState({
            pageHeight: event.nativeEvent.layout.height,
            pageWidth: event.nativeEvent.layout.width
        });
    }

    render() {
        const { currentUser } = this.state;
        const { textStyle, viewStyle, imageStyle } = styles;
        return (
            <View style={viewStyle} onLayout={this.state.getNewDimensions}>
                {!currentUser &&
                    <ScrollView>
                        <Image
                            style={[imageStyle, { width: Dimensions.get('screen').width }]}
                            source={require('./src/utils/WO_Logo.png')}
                        />
                        <Text style={textStyle}>
                            {'Find out what\'s occurring near you right now!'}
                        </Text>
                        <SignIn />
                    </ScrollView>
                }
                {
                    currentUser &&
                    <View>
                        <RouterComponent />
                    </View>
                }
            </View>
        );
    }
}

const styles = {
    imageStyle: {
        flex: 1,
        resizeMode: 'contain'
    },
    viewStyle: {
        height: Dimensions.get('screen').height
        // backgroundColor: '#EB7F00',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 75,
        // paddingTop: 15,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // elevation: 2,
        // position: 'relative',
        // flex: 1
    },
    textStyle: {
        fontSize: 26,
        padding: 5,
        fontWeight: 'bold',
        color: '#225378'
    }
};

export default App;
