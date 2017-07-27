import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { auth } from './firebase';
import SignIn from './src/components/Signin';
import RouterComponent from './src/RouterComponent';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            pageHeight: Dimensions.get('window').height,
            pageWidth: Dimensions.get('window').width
        };
    }


    componentDidMount() {
        auth.onAuthStateChanged((currentUser) => {
            this.setState({ currentUser });
        });
    }

    getNewDimensions(event){
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
        flex: 1
    },
    textStyle: {
        fontSize: 26,
        padding: 5,
        fontWeight: 'bold',
        color: '#225378'
    }
};

export default App;
