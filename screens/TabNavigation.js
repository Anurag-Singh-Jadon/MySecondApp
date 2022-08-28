import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Sample from './Sample';
import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
const Tab = createMaterialTopTabNavigator()






function MyTabs() {
    return (

        <Tab.Navigator
        // initialRouteName="Sample"
        // tabBarOptions={{
        //     activeTintColor: "#e91e63",
        //     labelStyle: {
        //         fontSize: 12
        //     },
        //     style: {
        //         backgroundColor: 'white'
        //     }
        // }}
        >
            <Tab.Screen name='Sample' component={Sample} options={{ tabBarLabel: 'Sample' }} />
            <Tab.Screen name='ProfileScreen' component={ProfileScreen} options={{ tabBarLabel: 'ProfileScreen' }} />
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ tabBarLabel: 'HomeScreen' }} />

        </Tab.Navigator>


    );
}
export default function MaterialToptabNavigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}