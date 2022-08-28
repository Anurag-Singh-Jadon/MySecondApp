import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
//import { Calendar } from 'react-native-calendars';
//import CalendarPicker from the package we installed
import CalendarPicker from 'react-native-calendar-picker';

const Calender = () => {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const onDateChange = (date, type) => {
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperContainer}>
                {/* <Calendar
                    markingType={'custom'}
                    markedDates={{
                        '2018-03-28': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'green'
                                },
                                text: {
                                    color: 'black',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        '2018-03-29': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'white',
                                    elevation: 2
                                },
                                text: {
                                    color: 'blue'
                                }
                            }
                        }
                    }}
                /> */}
                {/* <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        height: 350,

                    }}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{


                        backgroundColor: '#66ff33',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: 'blue',
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16

                    }}


                /> */}

                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={new Date(2018, 1, 1)}
                    maxDate={new Date(2050, 6, 3)}
                    weekdays={
                        [
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thur',
                            'Fri',
                            'Sat',
                            'Sun'
                        ]}
                    months={[
                        'January',
                        'Febraury',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                    previousTitle="<"
                    previousTitleStyle={
                        {
                            fontSize: hp('3%'),
                            color: 'white'
                        }
                    }
                    nextTitle=">"
                    nextTitleStyle={
                        {
                            fontSize: hp('3%'),
                            color: 'white'
                        }
                    }
                    //todayBackgroundColor="#e6ffe6"
                    todayBackgroundColor="#4184f3"
                    selectedDayColor="#ffffff"
                    selectedDayTextColor="#000000"
                    //selectedDayTextColor="#66f"
                    scaleFactor={375}
                    textStyle={{
                        fontFamily: 'Cochin',
                        color: '#000000',


                    }}
                    onDateChange={onDateChange}


                    headerWrapperStyle={
                        {
                            backgroundColor: '#4184f3',
                            height: hp('7%'),


                        }

                    }
                />
                <View style={styles.textStyle}>
                    <Text style={styles.textStyle}>
                        Selected Start Date :
                    </Text>
                    <Text style={styles.textStyle}>
                        {selectedStartDate ? selectedStartDate.toString() : ''}
                    </Text>
                    <Text style={styles.textStyle}>
                        Selected End Date :
                    </Text>
                    <Text style={styles.textStyle}>
                        {selectedEndDate ? selectedEndDate.toString() : ''}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Calender;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        //backgroundColor: 'orange',


    },
    textStyle: {
        marginTop: 10,
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
    },
    upperContainer: {
        height: hp('60%'),

    }
});