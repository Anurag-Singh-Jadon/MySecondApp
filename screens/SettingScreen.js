import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SettingScreen = () => {



    return (

        <View style={styles.container}>
            <Text>Settings Screen!</Text>

        </View>


    );
};



export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

});