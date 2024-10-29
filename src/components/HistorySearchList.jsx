import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SimpleCardContainer, SimpleCardTitle} from './Simple-Card';
import theme from '../utils/theme';

const HistorySearchList = ({keyword}) => {
  const [data, setData] = useState([]);

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const result = await response.json();
    
    // `birlesikler` alanını virgüllere göre ayırıp, düz bir listeye çevirme
    const combinedWordsArray = result[0]?.birlesikler?.split(', ').map(word => ({
      anlam_id: `${result[0].madde_id}-${word}`,  // Her kelimeye benzersiz bir id verelim
      birlesikler: word.trim(),
    })) || [];
    
    setData(combinedWordsArray);
  };

  useEffect(() => {
    getDetailData(); // `keyword` değiştiğinde yeni arama yapar
  }, [keyword]);

  const handleItemPress = (item) => {
    navigation.navigate('Detail', { keyword: item.birlesikler }); // Yönlendirme yap
  };

  return (
    <FlatList
      style={{padding: 16}}
      data={data}
      keyExtractor={item => item.anlam_id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <View style={{ paddingVertical: 6 }}>
            <SimpleCardContainer>
              <SimpleCardTitle>{item.birlesikler}</SimpleCardTitle>
            </SimpleCardContainer>
          </View>
        </TouchableOpacity>
      )}
      ListHeaderComponent={
        <Text style={{color: theme.colors.textLight, marginBottom: 10}}>
          Son Aramalar
        </Text>
      }
    />
  );
};

export default HistorySearchList;

const styles = StyleSheet.create({});
