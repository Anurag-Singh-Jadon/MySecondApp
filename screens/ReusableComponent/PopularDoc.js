import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Rating } from 'react-native-ratings';
import { Searchbar, Card, Button, Title, Paragraph } from 'react-native-paper';
import { useState } from 'react';



const PopularDoc = () => {
    const [filled, setFilled] = useState("false");


    const favorite = () => {
        setFilled(!filled)
    };
    return (




        <View style={{ height: hp('28%'), width: wp('38%'), marginLeft: wp('2.5%'), borderRadius: hp('2%'), backgroundColor: 'white' }}>
            <Image source={require('../../Assets/Images/doctor5.png')} style={{ height: hp('20%'), width: wp('38%'), borderTopRightRadius: hp('2%'), borderTopLeftRadius: hp('2%') }} />
            <View style={{ height: hp('8%'), width: wp('38%'), borderBottomLeftRadius: hp('2%'), borderBottomRightRadius: hp('2%') }}>
                <Text style={{ textAlign: "center", color: 'black', fontSize: hp('2%'), fontWeight: 'bold' }}>
                    Dr. Tranquilli</Text>
                <Text style={{ textAlign: "center", fontSize: hp('1.5%'), fontFamily: "Rubik", color: "black" }}>
                    medicine Specialist</Text>
                <Rating
                    type='star'
                    ratingCount={5}
                    ratingColor='#f6d060'
                    // unSelectedColor='#BDC3C7'
                    imageSize={wp('3%')}
                    onFinishRating={(rating) => {
                        Alert.alert('Star Rating: ' + JSON.stringify(rating));

                    }}
                    style={{ marginTop: hp('0.5%') }}

                />

            </View>
        </View>
    );
}
export default PopularDoc;

const styles = StyleSheet.create({

    details: {
        width: wp('90%'),
        height: hp('14%'),
        flexDirection: 'row',
        backgroundColor: "pink",

        borderRadius: hp('2%'),
        marginTop: hp('0.9%'),
        alignSelf: "center"
    },
    doctext: {
        width: wp('30%'),
        height: hp('6%'),

        marginRight: wp('2%'),
        marginTop: hp('1.5%')

    }




})