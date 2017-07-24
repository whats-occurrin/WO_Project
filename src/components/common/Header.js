import React from 'react';
import { Text, View } from 'react-native';
import {Button} from './Button'
import firebase from 'firebase';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
                      <Button onPress={() => firebase.auth().signOut()}>
                  logout
                    </Button>

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
        shadowOffset: {width: 0, height: 2},
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

export default Header;