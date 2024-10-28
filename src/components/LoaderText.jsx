import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../utils/theme';

const LoaderText = ({...props}) => {
  return (
    <View
      style={{backgroundColor: theme.colors.light, width: 120, height: 20}}
      {...props}
    />
  );
};

export default LoaderText;

const styles = StyleSheet.create({});
