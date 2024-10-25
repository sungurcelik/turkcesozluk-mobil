import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';

const Bg = ({children, ...props}) => {
  return (
    <ImageBackground
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={require('../../assets/bg.jpg')}
      {...props}>
      {children}
    </ImageBackground>
  );
};

export default Bg;

const styles = StyleSheet.create({});
