import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button';
import NewEvent from '../NewEvent';
import firebase from 'firebase';
import Settings from '../Settings';
import { Actions } from 'react-native-router-flux';

import { Container, Header, Title, Icon, Content } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';

const AppHeader = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View >
            <Header>
                <Text style={textStyle}>{props.headerText}</Text>
                <Button onPress={() => Actions.settings()}>
                    <Icon name="ios-settings" />
                </Button>
                    <Button onPress={() => firebase.auth().signOut()}>
                    Logout

                </Button>
            </Header>

        </View>
    );
};

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

export default AppHeader;