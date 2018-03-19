import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

class Forcast extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Current conditions {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp} Degrees
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "#F5FCFF",
        height: 130
    },
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: "center",
        // margin: 10,
        color: "#FFFFFF"
    }

});

export default Forcast;