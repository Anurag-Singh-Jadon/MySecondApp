import React from 'react'
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native'
//import Colors from 'd:/Kickr/EasyWellness/Source/Assets/Constants/Colors';
import { Rating } from 'react-native-ratings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const DoctorCard = (props) => {

    return (
        <View style={{ width: wp('100%'), height: hp('15%'), flexDirection: 'row', borderWidth: 0.3, marginTop: hp('2%') }}>
            {/* <View style={{ width: wp('20%'), height: hp('15%'), padding: wp('1%') }}>
                                <Image source={require('../Assets/Images/doctor2.png')}
                                    style={{ width: wp('18%'), height: hp('14%'), }} />
                            </View> */}
            <View style={{ width: wp('60%'), height: hp('15%'), }}>
                <View style={{ width: wp('60%'), height: hp('10%'), justifyContent: 'center', }}>
                    <Text style={{ marginLeft: wp('1%'), fontWeight: 'bold', fontSize: hp('2.5%') }}>Hii</Text>
                    <Text style={{ marginLeft: wp('1%'), fontSize: hp('2%') }}>Whats App</Text>
                </View>
                <View style={{ width: wp('60%'), height: hp('5%'), flexDirection: 'row', justifyContent: 'space-between', padding: wp('2%') }}>
                    <Text style={{ color: 'gray', fontSize: hp('2%') }}>Exp.<Text style={{ fontSize: hp('2%'), color: 'black' }}>Whats going on</Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'gray', fontSize: hp('2%') }}>Fees</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: wp('1%') }}>
                            <FontAwesome5 name='rupee-sign' color='black' size={hp('2%')} />
                            <Text style={{ fontWeight: 'bold', fontSize: hp('2%') }}>160</Text>
                        </View>
                    </View>

                </View>

            </View>
            <View style={{ width: wp('20%'), height: hp('15%'), }}>
                <View style={{ width: wp('20%'), height: hp('10%'), }}>
                    {/* <Text>Rating</Text> */}
                </View>
                <View style={{ width: wp('20%'), height: hp('5%'), alignItems: 'center', justifyContent: 'center' }}>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={wp('3%')}
                        onFinishRating={(rating) => {
                            Alert.alert('Star Rating: ' + JSON.stringify(rating));
                        }}
                    />
                </View>
            </View>
        </View>

    )
}


export default DoctorCard;