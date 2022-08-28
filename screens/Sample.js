import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Sample = () => {



    return (

        <View style={styles.container}>
            <View style={{
                width: '100%', height: '25%', backgroundColor: 'pink', transform: [{ scaleX: 2 }],
                borderTopStartRadius: 150,
                borderTopEndRadius: 150,
            }}>

            </View>

        </View>


    );
};



export default Sample;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

});