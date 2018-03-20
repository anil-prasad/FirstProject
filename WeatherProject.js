import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import Forcast from './Forcast'
import open_weather_map from './open_weather_map'


class WeatherProject extends Component {
    constructor(props){
        super(props);
        this.state = {zip: "", forcast: null};
    }
    

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        open_weather_map.fetchForecast(zip).then(forcast => {
            console.log(forcast);
            this.setState({forcast: forcast});
        });
        //this.setState({zip : event.nativeEvent.text});
    };

    render() {
        let content = null;
        if (this.state.forcast !== null) {
            content = (
                <Forcast 
                    main = {this.state.forcast.main}
                    description = {this.state.forcast.description}
                    temp = {this.state.forcast.temp}
                />
            ); 
        }

        return (
            <View style = {styles.container}>
                <ImageBackground
                    source = {require("./flowers.png")}
                    resizeMode = "cover"
                    style = {styles.backdrop}
                >
                    <View style = {styles.overlay}>
                        <View style = {styles.row}>
                            <Text style = {styles.mainText}>
                                Current weather of
                            </Text>
                            <View style = {styles.zipContainer}>
                                <TextInput
                                    style = {[styles.zipCode, styles.mainText]}
                                    onSubmitEditing = {event => this._handleTextChange(event)}
                                    underlineColorAndroid = "transparent"
                                />
                            </View>
                        </View>
                        {content}
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#666666"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    input:{
        fontSize: 20,
        borderWidth: 2,
        padding: 2,
        height: 40,
        width: 100,
        textAlign: "center"
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        width: 350
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: "#000000",
        opacity: 0.5,
        flexDirection: "column",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        padding: 30
    },
    zipContainer: {
        height: baseFontSize + 10,
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 3
    },
    zipCode: {
        flex: 1,
        flexBasis: 1,
        width: 80,
        height: baseFontSize,
    },
    mainText: {
        fontSize: baseFontSize,
        color: "#FFFFFF"
    }
});

export default WeatherProject;