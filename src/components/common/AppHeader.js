import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Button, Header } from 'react-native-elements';

import ModalDropdown from 'react-native-modal-dropdown';

const AppHeader = (props) => {

    const { textStyle, viewStyle, buttonStyle } = styles;

    return (
        <View style={viewStyle}>
            <Header 
                innerContainerStyles={{display: 'flex', alignItems: 'center'}}
                centerComponent={<Text style={textStyle}>{props.headerText}</Text>}
                leftComponent={
                    <Button
                        
                        backgroundColor={buttonStyle.backgroundColor} icon={{ size: 20, name: 'settings' }} onPress={() => Actions.settings()}
                    />}
                rightComponent={ 
                    <Button
                        title="Log Out"
                        backgroundColor={buttonStyle.backgroundColor}
                        onPress={() => firebase.auth().signOut()} 
                    />}
            />
        </View>
    );
};

const styles = {
    buttonStyle: {
        backgroundColor: 'transparent'
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
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff'
    }
};

export default AppHeader;
