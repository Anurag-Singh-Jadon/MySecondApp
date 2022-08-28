import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Rating } from 'react-native-ratings';

const Scale = () => {



    return (

        <View style={styles.container}>
            <Rating
                type='star'
                ratingCount={5}
                imageSize={20}
                onFinishRating={(rating) => {
                    Alert.alert('Heart Rating: ' + JSON.stringify(rating));
                }}
            />

        </View>


    );
};



export default Scale;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

});