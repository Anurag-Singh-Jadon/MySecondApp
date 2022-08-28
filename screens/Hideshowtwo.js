// Example of Collapsible/Accordion/Expandable List View in React Native
// https://aboutreact.com/collapsible-accordion-expandable-view/

// import React in our code
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import all the components we are going to use
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Rating } from 'react-native-ratings';
import {
    SafeAreaView,
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Scrollview
} from 'react-native';

// import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

// import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

// import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';

// Dummy content to show
// You can also use dynamic data by calling web service
const CONTENT = [
    {
        title: 'Terms and Conditions',
        content:
            'The following terms and conditions, together with any referenced documents form a legal agreement between you and your employer, employees,agents, contractors and any other entity on whose  behalf you accept these terms',
    },
    {
        title: 'Privacy Policy',
        content:
            'A Privacy Policy agreement is the agreement where youspecify if you collect personal data from your users,what kind of personal data you collect and what you do with that data.',
    },
    {
        title: 'Return Policy',
        content:
            'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.  This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/ Refund Policy before they make a purchasing decision.',
    },
];

//To make the selector (Something like tabs)
const SELECTORS = [
    { title: 'T&C', value: 0 },
    { title: 'Privacy Policy', value: 1 },
    { title: 'Return Policy', value: 2 },
    { title: 'Reset all' },
];

const App = () => {
    // Default active selector
    const [activeSections, setActiveSections] = useState([]);
    // Collapsed condition for the single collapsible
    const [collapsed, setCollapsed] = useState(true);
    // MultipleSelect is for the Multiple Expand allowed
    // True: Expand multiple at a time
    // False: One can be expand at a time
    const [multipleSelect, setMultipleSelect] = useState(false);

    const toggleExpanded = () => {
        // Toggling the state of single Collapsible
        setCollapsed(!collapsed);
    };

    const setSections = (sections) => {
        // Setting up a active section state
        setActiveSections(
            sections.includes(undefined) ? [] : sections
        );
    };

    const renderHeader = (section, _, isActive) => {
        // Accordion header view
        return (
            <Animatable.View
                duration={400}
                style={[
                    styles.header,
                    isActive ? styles.active : styles.inactive
                ]}
                transition="backgroundColor">
                <Text style={styles.headerText}>
                    {section.title}
                </Text>
            </Animatable.View>
        );
    };

    const renderContent = (section, _, isActive) => {
        // Accordion Content view
        return (
            <Animatable.View
                duration={400}
                style={[
                    styles.content,
                    isActive ? styles.active : styles.inactive
                ]}
                transition="backgroundColor">
                <Animatable.Text
                    animation={isActive ? 'bounceIn' : undefined}
                    style={{ textAlign: 'center' }}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>
                        Example of Collapsible/Accordion/Expandable
                        Listview in React
                        Native
                    </Text>

                    {/*Code for Single Collapsible Start*/}
                    <TouchableOpacity onPress={toggleExpanded}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>
                                Single Collapsible
                            </Text>
                            {/*Heading of Single Collapsible*/}
                        </View>
                    </TouchableOpacity>
                    {/*Content of Single Collapsible*/}
                    <Collapsible
                        collapsed={collapsed}
                        align="center"
                    >
                        <ScrollView>
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
                        </ScrollView>
                    </Collapsible>
                    {/*Code for Single Collapsible Ends*/}

                    <View
                        style={{
                            backgroundColor: '#000',
                            height: 1,
                            marginTop: 10
                        }} />
                    <View style={styles.multipleToggle}>
                        <Text
                            style={styles.multipleToggle__title}
                        >
                            Multiple Expand Allowed?
                        </Text>
                        <Switch
                            value={multipleSelect}
                            onValueChange={(multipleSelect) =>
                                setMultipleSelect(multipleSelect)
                            }
                        />
                    </View>
                    <Text style={styles.selectTitle}>
                        Please select below option to expand
                    </Text>

                    {/*Code for Selector starts here*/}
                    <View style={styles.selectors}>
                        {SELECTORS.map((selector) => (
                            <TouchableOpacity
                                key={selector.title}
                                onPress={
                                    () => setSections([selector.value])
                                }
                            >
                                <View style={styles.selector}>
                                    <Text
                                        style={
                                            activeSections.includes(selector.value) &&
                                            styles.activeSelector
                                        }>
                                        {selector.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {/*Code for Selector ends here*/}

                    {/*Code for Accordion/Expandable List starts here*/}
                    <Accordion
                        activeSections={activeSections}
                        // For any default active section
                        sections={CONTENT}
                        // Title and content of accordion
                        touchableComponent={TouchableOpacity}
                        // Which type of touchable component you want
                        // It can be the following Touchables
                        // TouchableHighlight, TouchableNativeFeedback
                        // TouchableOpacity , TouchableWithoutFeedback
                        expandMultiple={multipleSelect}
                        // If you want to expand multiple at a time
                        renderHeader={renderHeader}
                        // Header Component(View) to render
                        renderContent={renderContent}
                        // Content Component(View) to render
                        duration={400}
                        // Duration for Collapse and expand
                        onChange={setSections}
                    // Setting the state of active sections
                    />
                    {/*Code for Accordion/Expandable List ends here*/}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
        textAlign: 'center',
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});