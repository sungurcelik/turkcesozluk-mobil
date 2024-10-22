import React from 'react';
import {View} from 'react-native';

const renderTabIcon =
  IconComponent =>
  ({color, focused}) =>
    (
      <View style={{alignItems: 'center'}}>
        <IconComponent width={32} height={32} color={color} />

        {focused && (
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: 'red',
              borderRadius: 5,
              position: 'absolute',
              bottom: -15,
            }}
          />
        )}
      </View>
    );

export default renderTabIcon;
