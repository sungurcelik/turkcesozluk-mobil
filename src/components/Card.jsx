import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import theme from '../utils/theme';

export const CardContainer = ({children, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderRadius: theme.radii.normal,
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}
      {...props}>
      <View
        style={{
          borderLeftWidth: 3,
          borderLeftColor: theme.colors.light,
          paddingLeft: 12,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export const CardTitle = ({children}) => {
  return <Text style={{fontSize: 18, fontWeight: 'bold'}}>{children}</Text>;
};

export const CardSummary = ({children}) => {
  return (
    <Text style={{color: theme.colors.textMedium, fontSize: 14, marginTop: 8}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({});
