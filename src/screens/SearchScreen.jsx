import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import theme from '../utils/theme';
import SuggestionCard from '../components/SuggestionCard';
import HistorySearchList from '../components/HistorySearchList';
import HomeBgAnimated from '../components/HomeBgAnimated';

const SearchScreen = ({navigation}) => {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [homeData, setHomeData] = useState();
  const [searchQuery, setSearchQuery] = useState('');

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <View style={styles.container}>
      <HomeBgAnimated
        isSearchFocus={isSearchFocus}
        onSearchFocus={setIsSearchFocus}
        setSearchQuery={setSearchQuery} // CustomInput'a aktarılacak
      />
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.softRed,
          paddingTop: isSearchFocus ? 0 : 26,
        }}>
        {isSearchFocus ? (
          <View style={{flex: 1, marginTop: 40}}>
            <HistorySearchList
              keyword={searchQuery}
            />
          </View>
        ) : (
          <View style={{flex: 1, paddingHorizontal: 16}}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir Kelime"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.kelime[0].madde,
                })
              }
            />

            <SuggestionCard
              style={{marginTop: 40}}
              data={homeData?.atasoz[0]}
              title="Bir Deyim - Atasözü"
              onPress={() =>
                navigation.navigate('Detail', {
                  keyword: homeData?.atasoz[0].madde,
                })
              }
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
