import { Alert, BackHandler, Image, Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';
import TouchID from 'react-native-touch-id';

const FingerAuth = () => {

    const [supported, setSupported] = useState(null);
    const [name, setName] = useState('Creator');

    // const optionalConfigObject = {
    //     title: 'Authentication Required', // Android
    //     imageColor: '#e00606', // Android
    //     imageErrorColor: '#ff0000', // Android
    //     sensorDescription: 'Touch sensor', // Android
    //     sensorErrorDescription: 'Failed', // Android
    //     cancelText: 'Cancel', // Android

    //   };

    useEffect(() => {
        TouchID.isSupported().
            then(success => {
                setSupported(true);
                // console.log("Touch Id Verified ")
            })
            .catch((error) => {
                console.log("Error Touch: ", + error);
                alert('Touch Id is not supported');
            })
    }, []);

    function handleLogin() {

        const configs = {

            title: 'Authentication Required', // Android
            color: '#ff0000',
            imageColor: '#e00606', // Android
            //     imageErrorColor: '#ff0000', // Android
            //     sensorDescription: 'Touch sensor', // Android
            sensorErrorDescription: 'Failed', // Android
            //     cancelText: 'Cancel', // Android


        };

        TouchID.authenticate('Login to Your App', configs)
            .then(success => {
                console.log('Authentication Verified:)');
                setName('The Plurals Party')
            })
            .catch(error => {
                console.log('Authentication Failed', error);
            });
    };

    return (

        <SafeAreaView style={styles.doctContainer}>

            <Text style={{ fontSize: hp('4%'), fontWeight: 'bold' }}>{name}</Text>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={{ fontSize: hp('4%'), fontWeight: 'bold', color: 'black' }}>Enter</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    doctContainer: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
});

export default FingerAuth;
