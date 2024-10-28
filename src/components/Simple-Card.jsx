import { Text, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../utils/theme';

export const SimpleCardContainer = ({children, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: theme.radii.normal,
        padding: 16,
      }}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export const SimpleCardTitle = ({children}) => {
  return <Text style={{fontSize: 16, fontWeight: 'bold'}}>{children}</Text>;
};
