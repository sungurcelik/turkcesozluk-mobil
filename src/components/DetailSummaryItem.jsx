import {Text, View} from 'react-native';
import React from 'react';
import theme from '../utils/theme';

export const DetailSummaryItemContainer = ({
  data,
  children,
  border,
  ...props
}) => {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map(_ => _.tam_adi)) || ['isim'];

  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: 'white',
        paddingVertical: 28,
        paddingHorizontal: 20,
      }}
      {...props}>
      {border && (
        <View
          style={{
            position: 'absolute',
            left: 12,
            right: 12,
            top: 0,
            height: 1,
            backgroundColor: theme.colors.light,
          }}
        />
      )}
      {/* BODY */}

      {data ? (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginLeft: -14,
                marginRight: 8,
                color: theme.colors.textLight,
              }}>
              {data.anlam_sira}
            </Text>
            <Text
              style={{color: theme.colors.red}}>
              {type.join(', ')}
            </Text>
          </View>
          <View style={{marginTop: 8}}>
            <Text style={{fontWeight: '600'}}>{data.anlam}</Text>
            {data.orneklerListe?.map((ornek, index) => (
              <View key={ornek.ornek_id || index}>
                <Text
                  style={{
                    fontWeight: '500',
                    marginLeft: 10,
                    marginTop: 12,
                    color: theme.colors.textLight,
                  }}>
                  {ornek.ornek}{' '}
                  <Text
                    style={{fontWeight: '700', color: theme.colors.textLight}}>
                    {ornek.yazar_id != '0' && `- ${ornek.yazar[0].tam_adi}`}
                  </Text>
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        children
      )}
    </View>
  );
};
