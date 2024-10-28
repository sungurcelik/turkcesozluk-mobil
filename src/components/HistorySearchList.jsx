import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SimpleCardContainer, SimpleCardTitle} from './Simple-Card';
import theme from '../utils/theme';

const HistorySearchList = ({query}) => {
  const [data, setData] = useState([]);

  const fetchSearchResults = async query => {
    try {
      const response = await fetch(`https://sozluk.gov.tr/gts?ara=${query}`);
      if (!response.ok) {
        throw new Error('Ağ hatası: ' + response.statusText);
      }
      const result = await response.json();
      setData(result); // Veriyi state'e kaydediyoruz
      console.log(result)
    } catch (error) {
      console.error('Fetch hatası:', error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchSearchResults(query); // Query mevcutsa veriyi getir
    }
  }, [query]);

  return (
    <FlatList
      style={{padding: 16}}
      data={data}
      keyExtractor={item => item.id.toString()} // item.id'nin string olduğundan emin olun
      renderItem={({item}) => (
        <View style={{paddingVertical: 6}}>
          <SimpleCardContainer>
            <SimpleCardTitle>{item.madde}</SimpleCardTitle>
            <Text>{item.anlamlarListe[0].anlam}</Text>
          </SimpleCardContainer>
        </View>
      )}
      ListHeaderComponent={
        <Text style={{color: theme.colors.textLight, marginBottom: 10}}>
          Sonuçlar
        </Text>
      }
    />
  );
};

export default HistorySearchList;

const styles = StyleSheet.create({});
