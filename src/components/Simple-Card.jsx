import {Text, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import theme from '../utils/theme';
import { useNavigation } from '@react-navigation/native';

export const SimpleCardContainer = ({children, ...props}) => {
  const [homeData, setHomeData] = useState();
  const navigation = useNavigation()

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <TouchableOpacity
      style={{
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: theme.radii.normal,
        padding: 16,
      }}
      onPress={() =>
        navigation.navigate('Detail', {
          keyword: homeData?.atasoz[0].madde,
        })
      }
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export const SimpleCardTitle = ({children}) => {
  return <Text style={{fontSize: 16, fontWeight: 'bold'}}>{children}</Text>;
};
