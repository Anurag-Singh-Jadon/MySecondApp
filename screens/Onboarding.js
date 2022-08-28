import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import all the components we are going to use


import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import {
    PagerTabIndicator,
    IndicatorViewPager,
    PagerTitleIndicator,
    PagerDotIndicator
} from '@shankarmorwal/rn-viewpager';


const Onboarding = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: hp('8%'), width: wp('100%'), justifyContent: 'center', alignItems: 'flex-end', }}>
                <TouchableOpacity style={{ width: wp('12%'), height: hp('3%'), borderRadius: hp('2%'), backgroundColor: "#f3f2f7", alignItems: 'center', marginRight: wp('2%'), justifyContent: "center" }}>
                    <Text style={{ fontSize: hp('1.5%'), textAlign: "center" }}>Skip</Text>
                </TouchableOpacity>
            </View>



            <IndicatorViewPager
                style={styles.imgSlider}
                indicator={
                    <PagerDotIndicator pageCount={3} />
                }>
                <View style={{ height: hp('80%'), width: wp('100%'), }}>
                    <View style={{ height: hp('60%'), width: wp('100%'), alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../Assets/Images/online1.png')} style={{ height: hp('60%'), width: wp('100%'), resizeMode: 'cover' }} />
                    </View>
                    <Text style={styles.main}>Book face-to-face</Text>
                    <Text style={styles.main}>appointment</Text>
                    <Text style={[styles.simple, { marginTop: hp('2%') }]}>Book your video call appointment with</Text>
                    <Text style={styles.simple}>your doctors within the app in few mins.</Text>
                </View>
                <View style={{ height: hp('80%'), width: wp('100%'), }}>
                    <View style={{ height: hp('60%'), width: wp('100%'), alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../Assets/Images/Doctors.png')} style={{ height: hp('48%'), width: wp('100%'), resizeMode: 'cover' }} />
                    </View>
                    <Text style={styles.main}>Find the Best Doctors in</Text>
                    <Text style={styles.main}>your vicinity</Text>
                    <Text style={[styles.simple, { marginTop: hp('2%') }]}>Find the Doctor and make appointments</Text>
                    <Text style={styles.simple}>with them as you wish</Text>
                </View>
                <View style={{ height: hp('80%'), width: wp('100%'), }}>
                    <View style={{ height: hp('60%'), width: wp('100%'), alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../Assets/Images/online.png')} style={{ height: hp('50%'), width: wp('100%') }} />
                    </View>
                    <Text style={styles.main}>Schedule Appointment</Text>
                    <Text style={styles.main}>with expert Docotrs</Text>
                    <Text style={[styles.simple, { marginTop: hp('2%') }]}>Find best Docotrs with expert rating and</Text>
                    <Text style={styles.simple}>Book your apppointments hassle-free.</Text>
                </View>
            </IndicatorViewPager>

            <View style={{ height: hp('12%'), width: wp('100%'), alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity style={{ width: wp('60%'), height: hp('7%'), backgroundColor: "#00ABF6", borderRadius: hp('1%'), alignItems: 'center', justifyContent: "center" }}>
                    <Text style={{ fontSize: hp('2%'), fontFamily: "bold", color: "white", textAlign: "center" }}>Get Started</Text>
                </TouchableOpacity>
            </View>















        </SafeAreaView >
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: wp('100%'),
        height: hp('100%'),
    },
    imgSlider: {
        width: wp('100%'),
        height: hp('80%'),

    },
    main: {
        fontSize: hp('3%'),
        fontWeight: "bold",
        textAlign: "center",
        color: "black",


    },
    simple: {
        fontSize: hp('1.5%'),
        color: "#ccc1c0",
        textAlign: "center"
    }


})