import React, { useEffect } from 'react';
//import React in our code.
import { StyleSheet } from 'react-native';
//import TabNavigation from './screens/TabNavigation';
//import Axios from './screens/Axios';
//import Sample from './screens/Sample';
//import GoogleLogin from './screens/GoogleLogin';
//import Pager from './screens/Pager';
//import Calender from './screens/Calender';
//import MainTabScreen from './screens/MainTabScreen';
//import Rating from './screens/Rating';
//import Hideshow from './screens/Hideshow';
//import Hideshowtwo from './screens/Hideshowtwo';
//import HospitalForm from './screens/HospitalForm';
//import Splash from './screens/Splash';
//import Main from './screens/Main';
//import Datepicker from './screens/Datepicker';
//import PopularDoctor from './screens/PopularDoctor';
//import Onboarding from './screens/Onboarding';
//import AppStack from './Source/navigation/AppStack';
//import AccountCreation from './screens/AccountCreation';
//import AccountLogin from './screens/AccountLogin';
//import Appointment from './screens/Appointment';
// import ImagePicker from './screens/ImagePicker';
//import FavoriteScreen from './screens/FavoriteScreen';
//mport MaterialTab from './screens/MaterialTab';
//import Sms from './screens/Sms';
//import DocumentPicker from './screens/DocumentPicker';
//import mBottomTab from './screens/MbottomTab';
import FingerAuth from './screens/Fingerprint';
const App = () => {


  return (
    <FingerAuth />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: '30%',
    height: '7%',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  }
});


export default App;
// Example of Localization in React Native Multi Language App
// https://aboutreact.com/localization-in-react-native/

// import 'react-native-gesture-handler';

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LanguageSelectionScreen from './screens/LanguageSelectionScreen';
// import ContentScreen from './screens/ContentScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LanguageSelectionScreen">
//         <Stack.Screen
//           name="LanguageSelectionScreen"
//           component={LanguageSelectionScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="ContentScreen"
//           component={ContentScreen}
//           options={{
//             title: 'Content Screen', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;