import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomButton = () => {
  return <View style={styles.container}></View>;
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 2,
    marginTop:10
  },
});
