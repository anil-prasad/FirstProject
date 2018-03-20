import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ListView} from 'react-native';

class bookItem extends Component {
    render () {
        return (
            <View style = {styles.bookItem}>
                <Image style = {styles.cover} source = />
                <View>
                    <Text style = {styles.author}> {this.props.author}> </Text>
                    <Text style = {styles.title}> {this.props.title} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    bookItem: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#AAAAAA",
        borderBottomWidth: 2,
        padding: 5,
        height: 175
    },
    cover: {
        flex: 1,
        height: 150,
        resizeMode: "contain"
    },
    infor: {
        flex: 3,
        alignItems: "flex-end",
        flexDirection: "column",
        alignSelf: "center",
        padding: 20
    },
    author: {
        fontSize: 18
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default bookItem;