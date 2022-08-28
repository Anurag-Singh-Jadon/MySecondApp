import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = (props) => {



  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff'
      }}
    >
      <LottieView
        source={require('../Assets/splash.json')}
        autoPlay
        loop={false}
      // speed={0.5}
      // onAnimationFinish={() => {
      //   console.log('Animation Finished!')
      //   props.navigation.replace('Home');
      // }}
      />
    </View>
  )

}
export default Splash;