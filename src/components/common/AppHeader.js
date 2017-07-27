import React from 'react';
import { Text, View } from 'react-native';
// import { Button } from './Button';
import NewEvent from '../NewEvent';
import firebase from 'firebase';
import Settings from '../Settings';
import { Actions } from 'react-native-router-flux';
import { Button, Header } from 'react-native-elements';

import { Container, Title, Icon, Content } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';

const AppHeader = (props) => {

    const { textStyle, viewStyle, buttonStyle } = styles;

    return (
        <View style={viewStyle}>
            <Header>
                <Text style={textStyle}>{props.headerText}</Text>
                <Button style={buttonStyle} icon={{name: 'settings'}} onPress={() => Actions.settings()}>
                    
                </Button>
                <Button onPress={() => firebase.auth().signOut()}>
                    Log
                    out
                </Button>
            </Header>

        </View>
    );
};

const styles = {
    buttonStyle: {
        backgroundColor: '#fc7401'
    },
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    }
};

export default AppHeader;
