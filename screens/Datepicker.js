import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
//import DateTimePickerModal from "@react-native-community/datetimepicker";
const Datepicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));





    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const onChange = (event, value) => {
        // const currentDate = value || date;
        setDate(value);
        // setDate(currentDate);
        if (Platform.OS === 'android') {
            setDatePickerVisibility(false);
        }
    };
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };


    return (

        <View style={styles.container}>
            <View style={{ width: wp('70%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: wp('66%'), height: hp('5%'), backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
                    <Text >{date.toUTCString()}</Text>
                </View>
                {!isDatePickerVisible && (
                    <TouchableOpacity style={{ width: wp('4%'), height: hp('5%'), backgroundColor: 'blue' }} onPress={showDatePicker}>

                    </TouchableOpacity>)}
            </View>

            {isDatePickerVisible && (
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}

                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    // mode="datetime"
                    mode="datetime"
                    is24Hour={false}
                    onChange={onChange}
                    display='spinner'

                />
            )}
        </View>


    );
};



export default Datepicker;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

});