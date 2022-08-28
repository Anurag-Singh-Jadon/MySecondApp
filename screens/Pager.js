import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {
    PagerTabIndicator,
    IndicatorViewPager,
    PagerTitleIndicator,
    PagerDotIndicator,
} from '@shankarmorwal/rn-viewpager';

const Pager = () => {


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <IndicatorViewPager
                    style={styles.pagerStyle}
                    indicator={
                        <PagerDotIndicator pageCount={3} />
                    }>
                    <View>
                        <Image source={require('../Assets/Images/doctor2.png')} style={styles.imgBed} />
                        <Text>Hii</Text>
                        <TouchableOpacity style={{ width: wp('80%'), height: hp('10%'), backgroundColor: 'pink', marginTop: hp('3%') }}>
                            <Text>Button</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../Assets/Images/doctor2.png')} style={styles.imgBed} />
                    <Image source={require('../Assets/Images/doctor2.png')} style={styles.imgBed} />
                </IndicatorViewPager>
                <TouchableOpacity style={{ width: wp('80%'), height: hp('10%'), backgroundColor: 'pink', marginTop: hp('3%') }}>
                    <Text>Button</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    );
};



export default Pager;

const styles = StyleSheet.create({
    container: {

        width: '100%',
        height: '100%',
        backgroundColor: 'Yellow'

    },
    imgBed: {
        width: '100%',
        height: '60%'
    },
    pagerStyle: {
        width: '100%',
        height: '78%'
        // flex: 1,
        // paddingTop: 20,
        // backgroundColor: 'white',
    },
    background1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C70039',
    },
    background2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5733',
    },
    background3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC300',
    },

});