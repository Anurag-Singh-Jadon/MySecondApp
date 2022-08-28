import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';

const CreateAccount = () => {

    const [filled, setFilled] = useState("false");

    const favorite = () => {
        setFilled(!filled)
    };

    return (

        <SafeAreaView>
            <KeyboardAvoidingView
                behavior="height"
                enabled={true}
                style={styles.doctContainer}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* <SafeAreaView style={styles.doctContainer}> */}
                    <ScrollView>


                        <View style={{ width: wp('100%'), height: hp('27%'), justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={require('../Assets/Images/create.png')} style={{ width: wp('85%'), height: hp('15%'), }} />
                        </View>

                        <View style={{ width: wp('100%'), height: hp('9%'), padding: wp('2%'), }}>
                            {/* <View style={{ height: hp('6%'), backgroundColor: 'red' }}> */}
                            <Text style={{ color: 'gray', fontSize: hp('1.8%'), width: wp('94'), paddingLeft: wp('1.5%') }}>JOIN THE TEAM</Text>
                            <Text style={{ color: '#0F2D52', fontSize: hp('3%'), fontWeight: 'bold', paddingLeft: wp('1.5%') }}>Create Account</Text>
                            {/* </View> */}
                        </View>

                        <View style={{

                            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                            width: wp('100%'), height: hp('10%'), paddingHorizontal: wp('2%'),
                        }}>

                            <TouchableOpacity style={{ width: wp('43%'), flexDirection: 'row', justifyContent: 'space-around', height: hp('7%'), backgroundColor: '#f7f7f7', alignItems: 'center', borderRadius: hp('1.5%') }}>
                                <Image source={require('../Assets/Images/google.png')} style={{ width: wp('5%'), height: hp('3%'), }} />
                                <Text style={{ fontSize: hp('2.8%'), }}>Google</Text>
                            </TouchableOpacity>



                            <TouchableOpacity style={{ width: wp('43%'), flexDirection: 'row', justifyContent: 'space-around', height: hp('7%'), backgroundColor: '#f7f7f7', alignItems: 'center', borderRadius: hp('1.5%') }}>
                                <Image source={require('../Assets/Images/facebook.png')} style={{ width: wp('5%'), height: hp('3%'), }} />
                                <Text style={{ fontSize: hp('2.8%'), }}>Facebook</Text>
                            </TouchableOpacity>


                        </View>


                        <View style={{ width: wp('100%'), height: hp('11%'), alignItems: 'center', justifyContent: 'center', }}>

                            <View style={{ width: wp('96%'), flexDirection: 'row', height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), justifyContent: 'space-between', alignItems: 'center', }}>
                                <TextInput
                                    style={{ paddingHorizontal: wp('4%') }}
                                    placeholder='Name'
                                />
                                <Icon name='person-sharp' size={hp('2.5%')} color={'black'} style={{ paddingRight: wp('2%') }} />
                            </View>

                        </View>

                        <View style={{ width: wp('100%'), height: hp('11%'), alignItems: 'center', justifyContent: 'center', }}>
                            <View style={{ width: wp('96%'), flexDirection: 'row', height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), justifyContent: 'space-between', alignItems: 'center', }}>
                                <TextInput
                                    style={{ paddingHorizontal: wp('4%') }}
                                    placeholder='Email'
                                    keyboardType='email-address'
                                />
                                <Zocial name='email' size={hp('2.5%')} color={'black'} style={{ paddingRight: wp('2%') }} />
                            </View>
                        </View>

                        <View style={{ width: wp('100%'), height: hp('11%'), alignItems: 'center', justifyContent: 'center', }}>
                            <View style={{ width: wp('96%'), flexDirection: 'row', height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextInput
                                    style={{ paddingHorizontal: wp('4%') }}
                                    placeholder='Password'
                                    secureTextEntry={true}
                                />
                                <Icon name='eye' size={hp('2.8%')} color={'black'} style={{ paddingRight: wp('2%') }} />
                            </View>
                        </View>




                        <View style={{ flexDirection: 'row', width: wp('100%'), height: hp('6%'), padding: wp('2%'), }}>
                            <TouchableOpacity onPress={favorite}>
                                <FontAwesome name={filled ? "circle" : "circle"} color={filled ? '#00ABF6' : '#BDC3C7'} size={hp('2.8%')} style={{}} />

                            </TouchableOpacity>
                            <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', marginLeft: wp('2%') }}>I agree with the Terms of Service & Privacy</Text>

                        </View>

                        <View style={{ height: hp('10%'), justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity style={{ width: wp('96%'), height: hp('7%'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#00ABF6', borderRadius: hp('1.5%') }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp('2.2%') }}>Signup</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: hp('10%'), }}>
                            <TouchableOpacity style={{ width: wp('94%'), justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#2581d4', fontSize: hp('2%'), fontWeight: 'bold' }}>Have an account?Log in</Text>
                            </TouchableOpacity>
                        </View>


                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>

    );


};


const styles = StyleSheet.create({

    doctContainer: {
        width: wp('100%'),
        height: hp('100%'),
        // justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white'
    },

});


export default CreateAccount;




//35,44,46,51,height is 105%
//Inspect