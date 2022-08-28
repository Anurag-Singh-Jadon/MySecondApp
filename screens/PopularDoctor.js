import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView, Alert, SafeAreaView } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar, Card, Button, Title, Paragraph } from 'react-native-paper';
import { useState } from 'react';
import DoctorDetails from '../screens/ReusableComponent/DoctorDetails';
import PopularDoc from '../screens/ReusableComponent/PopularDoc';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const popularDoctor = () => {
    const [filled, setFilled] = useState("false");



    return (
        <SafeAreaView >
            <View style={styles.container}>
                <View style={styles.head}>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesome5 name='angle-left' color='black' size={hp('3%')} style={{ textAlign: "center" }} />
                        {/* <Icon name='chevron-left' size={28} style={{ textAlign: "center" }} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.search}>

                        <Icon name='search' size={30} style={{ textAlign: "center" }} />
                    </TouchableOpacity>

                </View>
                <View style={styles.popular}>
                    {/* <View style={styles.doctor}> */}

                    <Text style={{ fontSize: hp('2%'), fontFamily: "Rubik", fontWeight: 'bold', marginTop: hp('2%'), marginLeft: wp('2%') }}>Popular Doctor</Text>
                    <TouchableOpacity style={{ marginRight: wp('2%'), marginTop: hp('2%'), height: hp('3%'), width: wp('15%'), alignItems: "center", flexDirection: 'row' }}>

                        <Text style={{ fontSize: hp('1.5%'), fontFamily: "Rubik", marginRight: wp('1%'), }}>See all


                            {/* <Icon name='angle-right' size={12}  /> */}
                        </Text>
                        <FontAwesome5 name='angle-right' color='black' size={hp('2%')} style={{ textAlign: "center", marginLeft: wp('2%') }} />
                    </TouchableOpacity>
                    {/* </View> */}
                </View>
                <View style={{ height: hp('28%'), }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <PopularDoc />
                        <PopularDoc />
                        <PopularDoc />
                        <PopularDoc />
                        <PopularDoc />
                        <PopularDoc />
                    </ScrollView>



                </View>

                <View style={styles.popular}>
                    <Text style={{ fontSize: hp('2.2%'), fontFamily: "Rubik", fontWeight: 'bold', marginTop: hp('2%'), marginLeft: wp('2%') }}>Category</Text>
                </View>

                <View style={{ height: hp('49%'), width: wp('100%'), }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <DoctorDetails />
                        <DoctorDetails />
                        <DoctorDetails />
                        <DoctorDetails />
                        <DoctorDetails />
                        <DoctorDetails />
                        <DoctorDetails />

                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default popularDoctor;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '##f5f5f5',
        width: wp('100%'),
        height: hp('100%'),

    },
    head: {
        flexDirection: "row",
        height: hp('9%'),
        width: wp('100%'),
        justifyContent: "space-between",

    },
    icon: {
        // flexDirection:"row",
        // flexWrap:'wrap',
        height: hp('6%'),
        width: wp('8.5%'),
        marginTop: hp('2%'),
        marginLeft: wp('5%'),
        backgroundColor: "white",
        paddingTop: hp('1%'),
        borderRadius: 10,

    },
    search: {
        marginTop: hp('2%'),
        marginRight: wp('5%'),
        paddingTop: hp('1%'),
        borderRadius: 10
        // flexDirection:"row",
        // flexWrap:'wrap',
    },
    popular: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: wp('95%'),
        height: hp('7%'),

        // flexWrap:"wrap",
    },
    details: {
        width: wp('90%'),
        height: hp('14%'),
        flexDirection: 'row',
        marginTop: hp('9%'),

        borderRadius: hp('1.5%'),
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


