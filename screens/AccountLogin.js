import { Alert, Image, Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

const LoginScreen = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [isMyModalVisible, setMyModalVisible] = useState(false);

    const toggleMyModal = () => {
        setMyModalVisible(!isMyModalVisible);
        setModalVisible(false)
    };

    const [resetPassword, setResetPassword] = useState(false);

    const toggleResetPassword = () => {
        setResetPassword(!resetPassword);
        setMyModalVisible(false);
        setModalVisible(false)
    };

    return (
        <SafeAreaView style={styles.doctContainer}>


            <KeyboardAvoidingView
                behavior="height"
                enabled={true}

            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false}>


                        <View style={{ bottom: 0, }}>
                            <Modal isVisible={isModalVisible}
                                animationOutTiming={900}
                                animationInTiming={900}
                                hideModalContentWhileAnimating={true}
                                useNativeDriverForBackdrop={true}
                                onBackdropPress={() => setModalVisible(false)}
                                onSwipeComplete={() => setModalVisible(false)}
                                swipeDirection={['down']}

                                avoidKeyboard={true}
                                useNativeDriver={true}
                                style={{ alignSelf: 'center', }}
                            >

                                <View style={{ width: wp('100%'), height: hp('50%'), alignItems: 'center', marginTop: hp('50%'), borderTopLeftRadius: hp('4%'), borderTopRightRadius: hp('4%'), backgroundColor: 'white' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'gray', width: wp('30%'), borderRadius: hp('1.5%'), marginTop: hp('2%'), }}></View>
                                    <View style={{ width: wp('100%'), height: hp('14%'), marginTop: hp('5%'), padding: wp('2.5%'), }}>
                                        <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black', marginBottom: hp('1%'), paddingLeft: wp('1%') }}>Forgot Password</Text>

                                        <Text style={{ marginBottom: hp('0.6%'), paddingLeft: wp('1%') }}>Enter your email for the verification process.</Text>
                                        <Text style={{ paddingLeft: wp('1%') }}>We will send you 4 digits code to your email</Text>
                                    </View>

                                    <View style={{ height: hp('12%'), width: wp('100%'), padding: wp('2.6%') }}>
                                        <View style={{ height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), }}>
                                            <TextInput
                                                style={{ paddingLeft: wp('4%') }}
                                                placeholder='Email'
                                                keyboardType='email-address'
                                            />

                                        </View>
                                    </View>

                                    <View style={{ width: wp('100%'), height: hp('9%'), alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={toggleMyModal}
                                            style={{ width: wp('80%'), height: hp('7%'), backgroundColor: '#2581d4', borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', }}
                                        >
                                            <Text style={styles.textStyle}>Continue</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>

                        <Modal isVisible={isMyModalVisible}
                            animationOutTiming={900}
                            animationInTiming={900}
                            hideModalContentWhileAnimating={true}
                            useNativeDriverForBackdrop={true}
                            onBackdropPress={() => setMyModalVisible(false)}
                            onSwipeComplete={() => setMyModalVisible(false)}
                            swipeDirection={['down']}
                            // propagateSwipe="true"
                            avoidKeyboard={true}
                            useNativeDriver={true}
                            style={{ alignSelf: 'center' }}
                        >

                            <View style={{ width: wp('100%'), height: hp('50%'), alignItems: 'center', marginTop: hp('50%'), borderTopLeftRadius: hp('4%'), borderTopRightRadius: hp('4%'), backgroundColor: 'white' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'gray', width: wp('30%'), borderRadius: hp('1.5%'), marginTop: hp('2%'), }}></View>
                                <View style={{ width: wp('100%'), height: hp('14%'), marginTop: hp('5%'), padding: wp('2.5%'), }}>
                                    <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black', marginBottom: hp('1%'), paddingLeft: wp('1%') }}>Enter 4 Digits Code</Text>

                                    <Text style={{ marginBottom: hp('0.6%'), paddingLeft: wp('1%') }}>Enter 4 digits code that you receive on</Text>
                                    <Text style={{ paddingLeft: wp('1%') }}>your email</Text>
                                </View>

                                <View style={{ height: hp('12%'), width: wp('100%'), padding: wp('2.6%') }}>
                                    <View style={{ height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), }}>
                                        <TextInput
                                            style={{ paddingLeft: wp('4%') }}
                                            placeholder='Email'
                                            keyboardType='email-address'
                                        />

                                    </View>
                                </View>

                                <View style={{ width: wp('100%'), height: hp('9%'), alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={toggleResetPassword}
                                        style={{ width: wp('80%'), height: hp('7%'), backgroundColor: '#2581d4', borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', }}
                                    >
                                        <Text style={styles.textStyle}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        <Modal isVisible={resetPassword}
                            animationOutTiming={900}
                            animationInTiming={900}
                            hideModalContentWhileAnimating={true}
                            useNativeDriverForBackdrop={true}
                            onBackdropPress={() => setResetPassword(false)}
                            onSwipeComplete={() => setResetPassword(false)}
                            swipeDirection={['down']}
                            // propagateSwipe="true"
                            avoidKeyboard={true}
                            useNativeDriver={true}
                            style={{ alignSelf: 'center' }}
                        >

                            <View style={{ width: wp('100%'), height: hp('50%'), alignItems: 'center', marginTop: hp('50%'), borderTopLeftRadius: hp('4%'), borderTopRightRadius: hp('4%'), backgroundColor: 'white' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'gray', width: wp('30%'), borderRadius: hp('1.5%'), marginTop: hp('2%'), }}></View>
                                <View style={{ width: wp('100%'), height: hp('14%'), marginTop: hp('3%'), padding: wp('2.5%'), }}>
                                    <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black', marginBottom: hp('1%'), paddingLeft: wp('1%') }}>Reset Password</Text>

                                    <Text style={{ marginBottom: hp('0.6%'), paddingLeft: wp('1%') }}>Set the new password for your account so you</Text>
                                    <Text style={{ paddingLeft: wp('1%') }}>can login and access all features.</Text>
                                </View>

                                <View style={{ width: wp('100%'), height: hp('10%'), }}>
                                    <View style={{ flexDirection: 'row', width: wp('93%'), height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), justifyContent: 'space-between', alignItems: 'center', marginTop: hp('0.5%'), marginLeft: hp('2%'), }}>
                                        <TextInput
                                            style={{ paddingLeft: wp('4%') }}
                                            placeholder='New Password'
                                            secureTextEntry={true}
                                        />
                                        <Icon name='eye' size={hp('2.8%')} color={'#B8B8B8'} style={{ paddingRight: wp('2%') }} />
                                    </View>
                                </View>

                                <View style={{ width: wp('100%'), height: hp('10%'), }}>
                                    <View style={{ flexDirection: 'row', width: wp('93%'), height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), justifyContent: 'space-between', alignItems: 'center', marginTop: hp('0.5%'), marginLeft: hp('2%'), }}>
                                        <TextInput
                                            style={{ paddingLeft: wp('4%') }}
                                            placeholder='Re-enter Password'
                                            secureTextEntry={true}
                                        />
                                        <Icon name='eye' size={hp('2.8%')} color={'#B8B8B8'} style={{ paddingRight: wp('2%') }} />
                                    </View>
                                </View>

                                <View style={{ width: wp('100%'), height: hp('9%'), alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity
                                        style={{ width: wp('80%'), height: hp('7%'), backgroundColor: '#2581d4', borderRadius: hp('1.5%'), justifyContent: 'center', alignItems: 'center', }}
                                    >
                                        <Text style={styles.textStyle}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>



                        <View style={{
                            width: wp('100%'), height: hp('28%'), justifyContent: 'center', alignItems: 'center',
                        }}>
                            <Image source={require('../Assets/Images/login.png')} style={{ width: wp('85%'), height: hp('22%'), }} />
                        </View>

                        <View style={{ width: wp('100%'), height: hp('10%'), padding: wp('1%'), justifyContent: 'space-between', }}>

                            <Text style={{ color: 'gray', marginLeft: hp('2%'), fontSize: hp('1.8%'), }}>WELCOME BACK</Text>
                            <Text style={{ color: '#0F2D52', marginLeft: hp('2%'), fontSize: hp('3%'), fontWeight: 'bold', marginTop: hp('0.8%') }}>Account Log In</Text>
                        </View>


                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            padding: wp('2%'), width: wp('100%'), height: hp('10%'),
                        }}>

                            <TouchableOpacity style={{ width: wp('43%'), marginLeft: hp('2%'), flexDirection: 'row', justifyContent: 'space-around', height: hp('7%'), backgroundColor: '#f7f7f7', alignItems: 'center', borderRadius: hp('1.5%') }}>
                                <Image source={require('../Assets/Images/google.png')} style={{ width: wp('5%'), height: hp('3%'), }} />
                                <Text style={{ fontSize: hp('2.8%'), }}>Google</Text>
                            </TouchableOpacity>



                            <TouchableOpacity style={{ width: wp('43%'), marginRight: hp('2%'), flexDirection: 'row', justifyContent: 'space-around', height: hp('7%'), backgroundColor: '#f7f7f7', alignItems: 'center', borderRadius: hp('1.5%') }}>
                                <Image source={require('../Assets/Images/facebook.png')} style={{ width: wp('5%'), height: hp('3%'), }} />
                                <Text style={{ fontSize: hp('2.8%'), }}>Facebook</Text>
                            </TouchableOpacity>


                        </View>

                        <View style={{ flexDirection: 'row', width: wp('100%'), height: hp('8%'), justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{ width: wp('24%'), borderWidth: 0.8, borderColor: '#CAD5D8', }}></View>
                            <View style={{ paddingLeft: wp('5%') }}>
                                <Text style={{ fontSize: hp('2%'), width: wp('40%') }}>Or Log In Using Email</Text>
                            </View>
                            <View style={{ width: wp('24%'), borderWidth: 0.8, borderColor: '#CAD5D8', }}></View>
                        </View>

                        <View style={{ width: wp('100%'), height: hp('10%'), }}>


                            <View style={{ flexDirection: 'row', width: wp('93%'), height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), justifyContent: 'space-between', alignItems: 'center', marginTop: hp('0.5%'), marginLeft: hp('2%'), }}>
                                <TextInput
                                    style={{
                                        padding: wp('4%')
                                    }}
                                    placeholder='Email'
                                    keyboardType='email-address'
                                />
                                <Icon name='checkmark-sharp' size={hp('2.8%')} color={'#B8B8B8'} style={{ paddingRight: wp('2%') }} />
                            </View>
                        </View>

                        <View style={{ width: wp('100%'), height: hp('10%'), }}>
                            <View style={{ flexDirection: 'row', width: wp('93%'), height: hp('8%'), borderWidth: 1, borderColor: '#B8B8B8', borderRadius: hp('1.5%'), justifyContent: 'space-between', alignItems: 'center', marginTop: hp('0.5%'), marginLeft: hp('2%'), }}>
                                <TextInput
                                    style={{ paddingHorizontal: wp('4%') }}
                                    placeholder='Password'
                                    secureTextEntry={true}
                                />
                                <Icon name='eye' size={hp('2.8%')} color={'#B8B8B8'} style={{ paddingRight: wp('2%') }} />
                            </View>
                        </View>



                        <View style={{ width: wp('100%'), height: hp('7%'), flexDirection: 'row', }}>
                            <View style={{ width: wp('63%') }}></View>
                            <TouchableOpacity onPress={toggleModal} style={{ width: wp('34%'), paddingLeft: wp('2.8%') }}>
                                <Text style={{ color: '#2581d4', fontSize: hp('2%'), fontWeight: 'bold' }}>Forgot password ?</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: hp('9%'), justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity style={{ width: wp('94%'), height: hp('7%'), justifyContent: 'center', alignItems: 'center', backgroundColor: '#00ABF6', borderRadius: hp('1.5%') }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp('2.2%') }}>Login</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: hp('8%'), }}>
                            <TouchableOpacity style={{ width: wp('100%'), justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#2581d4', fontSize: hp('2%'), fontWeight: 'bold', }}>Don't have an account?Sign in</Text>
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
        alignItems: 'center',
        backgroundColor: 'white',

    },
    centeredView: {

        width: wp('100%'),
        height: hp('100%'),
        justifyContent: "center",

        marginTop: hp('30%'),
        // padding:wp('3.1%'),

    },
    modalView: {
        width: wp('100%'),
        height: hp('52%'),

        backgroundColor: "#f8f8ff",
        borderRadius: hp('4%'),

        padding: wp('6%'),
        // justifyContent: "center",
        // shadowColor: "#000",
        shadowOffset: {
            //   width: 0,

        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: "#2196F3",
        elevation: 2,
        height: hp('6%'),
        marginTop: hp('1%')
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },



    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }


});


export default LoginScreen;