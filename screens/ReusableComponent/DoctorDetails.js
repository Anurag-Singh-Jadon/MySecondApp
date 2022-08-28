import { View, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';

const DoctorDetails = () => {

    const [filled, setFilled] = useState("false");


    const favorite = () => {
        setFilled(!filled)
    };
    return (
        <View style={styles.details}>
            <Image source={require('../../Assets/Images/Group.png')} style={{ width: wp('25%'), height: hp('11%'), marginLeft: wp('4%'), marginTop: hp('1.5%'), borderRadius: hp('1%') }} />
            <View style={styles.doctext}>
                <Text style={{ marginLeft: wp('3%'), marginTop: hp('1.2%'), color: 'black', fontSize: hp('2%'), fontFamily: "Rubik", fontWeight: 'bold' }}>
                    Dr. Tranquilli</Text>
                <Text style={{ marginLeft: wp('3%'), fontSize: hp('1.5%'), fontFamily: "Rubik", color: "black" }}>
                    Specilist medicine</Text>





                <View style={{ width: wp('60%'), height: hp('5%'), alignItems: 'flex-start', flexDirection: "row" }}>
                    <Rating
                        type='star'
                        ratingCount={5}
                        ratingColor='#f6d060'
                        // unSelectedColor='#BDC3C7'
                        imageSize={wp('4%')}
                        onFinishRating={(rating) => {
                            Alert.alert('Star Rating: ' + JSON.stringify(rating));
                        }}
                        style={{ paddingLeft: wp('3%'), paddingTop: hp('2%') }}
                    />
                    <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', color: 'black', paddingTop: hp('1.5%'), paddingLeft: wp('9%') }}>2.8</Text>
                    <Text style={{ fontSize: hp('1.5%'), paddingTop: hp('1.8%') }}>(2821 views)</Text>

                </View>

            </View>
            <TouchableOpacity onPress={favorite}>
                <Icon name={filled ? "heart" : "heart"} size={hp('3%')} color={filled ? 'red' : '#BDC3C7'} style={{ marginTop: hp('2.5%'), marginLeft: wp('19%') }} />
            </TouchableOpacity>






        </View>
    );
}
export default DoctorDetails;

const styles = StyleSheet.create({

    details: {
        width: wp('90%'),
        height: hp('14%'),
        flexDirection: 'row',


        borderRadius: hp('1.5%'),
        marginTop: hp('0.9%'),
        alignSelf: "center",

    },
    doctext: {
        width: wp('30%'),
        height: hp('6%'),

        marginRight: wp('2%'),
        marginTop: hp('1.5%')

    }




})
