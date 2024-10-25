import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../utils/theme';

const ActionButton = ({children, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        minWidth: theme.sizes.actionButton,
        borderRadius: theme.radii.full,
        height: theme.sizes.actionButton,
        shadowColor: '#000',
        shadowOpacity: 0.16,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        paddingHorizontal: 8,
      }}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export const ActionButtonTitle = ({children, ...props}) => {
  return (
    <Text
      style={{
        marginHorizontal: 8,
        color: theme.colors.textLight,
        fontWeight: 'bold',
      }}
      {...props}>
      {children}
    </Text>
  );
};

export default ActionButton;

const styles = StyleSheet.create({});
