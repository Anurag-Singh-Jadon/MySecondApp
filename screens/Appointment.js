import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
//import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { Rating } from 'react-native-ratings';

const Appointment = () => {

    const [filled, setFilled] = useState("false");
    const [selectedGender, setSelectedGender] = useState("");
    const [mobileNumber, setMobileNumber] = useState('');



    const favorite = () => {
        setFilled(!filled)
    };

    return (
        <SafeAreaView>
            <View style={styles.doctContainer}>

                {/* <StatusBar
                backgroundColor="#2581d4"
                barStyle="dark-content"
            /> */}


                <View style={{ height: hp('20%') }}>
                    <View style={{ width: wp('94%'), height: hp('14%'), backgroundColor: 'white', borderRadius: wp('3%'), margin: hp('4%'), }}>

                        <View style={{ width: wp('25%'), height: hp('14%'), padding: wp('2%'), flexDirection: 'row', }}>
                            <Image source={require('../Assets/Images/doctor5.png')} style={{ width: wp('20%'), height: hp('11%'), borderRadius: wp('1.5%'), margin: hp('.4%') }} />


                            <View style={{ width: wp('69%'), height: hp('13%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View style={{ marginTop: wp('1.5%'), }}>
                                        <Text style={{ marginLeft: wp('3.4%'), fontWeight: 'bold', fontSize: hp('2.2%'), color: 'black' }}>Dr. S N Jha</Text>

                                        <Text style={{ marginLeft: wp('0.9%'), fontSize: hp('2%'), paddingLeft: wp('2.2%') }}>Upasana Dental Clinic,salt lake</Text>

                                    </View>
                                    <View style={{ width: wp('10%'), height: hp('6%') }}>
                                        <TouchableOpacity onPress={favorite}>
                                            <Icon name={filled ? "heart" : "heart"} size={hp('2.5%')} color={filled ? 'red' : '#BDC3C7'} style={{ padding: wp('1.8%'), }} />

                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', width: wp('69%'), height: hp('6%'), alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Rating
                                        type='star'
                                        ratingCount={5}
                                        ratingColor='#f6d060'
                                        imageSize={hp('2%')}
                                        onFinishRating={(rating) => {
                                            Alert.alert('Star Rating: ' + JSON.stringify(rating));
                                        }}
                                        style={{ paddingLeft: wp('3.6%') }}
                                    />
                                    <View style={{ flexDirection: 'row', width: wp('25%'), justifyContent: 'space-around', paddingRight: wp('5%') }}>
                                        <Icon name='dollar' size={hp('2%')} color={'green'} style={{ marginTop: hp('0.4%'), }} />
                                        <Text style={{ fontSize: hp('2%'), }}>28.00/hr</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={{ width: wp('94%'), height: hp('22%'), }} >
                    <View style={{ width: wp('94%'), height: hp('5%'), }} >
                        <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black' }}>Appointment For</Text>
                    </View>
                    <View style={{ width: wp('94%'), height: hp('15%'), }}>
                        <View style={{ height: hp('8%'), }}>
                            <TextInput
                                style={{ width: wp('94%'), height: hp('6%'), borderRadius: wp('1.5%'), borderWidth: 1, borderColor: '#a9a9a9', paddingLeft: wp('4%') }}
                                placeholder='Patient Name'
                                placeholderTextColor={'#a9a9a9'}

                                placeholderStyle={{ fontFamily: "Rubik-Bold", }}
                            />
                        </View>
                        <TextInput
                            style={{ width: wp('94%'), height: hp('6%'), borderRadius: wp('1.5%'), borderWidth: 1, borderColor: '#a9a9a9', paddingLeft: wp('4%') }}
                            placeholder='Contact No.'
                            placeholderTextColor={'#a9a9a9'}
                            keyboardType='numeric'
                            maxLength={10}
                            value={mobileNumber}
                            onChangeText={text => setMobileNumber(text)}

                        />
                    </View>
                </View>

                <View style={{ width: wp('94%'), height: hp('32%'), }}>
                    <View style={{ width: wp('94%'), height: hp('5%'), }}>
                        <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', color: 'black' }}>Who is this Patient?</Text>
                    </View>
                    <View style={{ height: hp('11%'), borderRadius: wp('2%') }}>
                        <Picker
                            style={styles.inputTxt4}
                            selectedValue={selectedGender}
                            onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
                        >

                            <Picker.Item label="My Self" value="myself" />
                            <Picker.Item label="My Child" value="mychild" />
                            <Picker.Item label="My Father" value="myfather" />
                            <Picker.Item label="My Mother" value="mymother" />
                            <Picker.Item label="My Wife" value="mywife" />

                        </Picker>
                    </View>


                    <View style={{ width: wp('94%'), height: hp('13%'), }}>
                        <View style={{ height: hp('8%'), }}>
                            <TextInput
                                style={{ width: wp('94%'), height: hp('6%'), borderRadius: wp('1.5%'), borderWidth: 1, borderColor: '#a9a9a9', paddingLeft: wp('4%') }}
                                placeholder='Patient Name'
                                placeholderTextColor={'#a9a9a9'}
                                placeholderStyle={styles.placeholderStyle}
                                placeholderStyle={{ fontFamily: "Rubik-Bold", }}
                            />
                        </View>
                        <TextInput
                            style={{ width: wp('94%'), height: hp('6%'), borderRadius: wp('1.5%'), borderWidth: 1, borderColor: '#a9a9a9', paddingLeft: wp('4%') }}
                            placeholder='Age'
                            placeholderTextColor={'#a9a9a9'}

                        />
                    </View>
                </View>




                <View style={{ height: hp('7%') }}>
                    <TouchableOpacity style={{ width: wp('50%'), height: hp('5%'), justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: hp('0.8%') }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    doctContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: wp('2%'),
        // backgroundColor: '#f5f5dc',
    },

    inputTxt4: {
        width: wp('94%'),
        height: hp('7.5%'),
        backgroundColor: '#f5f5dc',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        marginRight: wp('2.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },

})

export default Appointment;