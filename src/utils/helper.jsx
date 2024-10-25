import React from 'react';
import {View} from 'react-native';
import theme from './theme';

const renderTabIcon =
  IconComponent =>
  ({color, focused}) =>
    (
      <View style={{alignItems: 'center'}}>
        <IconComponent width={32} height={32} color={focused ? theme.colors.red : theme.colors.textLight} />

        {focused && (
          <View
            style={{
              width: 3,
              height: 3,
              backgroundColor: 'red',
              borderRadius: 5,
              position: 'absolute',
              bottom: -10,
            }}
          />
        )}
      </View>
    );

export default renderTabIcon;
