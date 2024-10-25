import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LogoIcon from '../iconsJs/logoIcon';
import CustomInput from '../components/CustomInput';
import Bg from '../components/Bg';
import {CardContainer, CardSummary, CardTitle} from '../components/Card';
import theme from '../utils/theme';
import {SimpleCardContainer, SimpleCardTitle} from '../components/Simple-Card';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    summary: 'First Item Summary',
  },
  {
    id: '2',
    title: 'Second Item',
    summary: 'Second Item Summary',
  },
  {
    id: '3',
    title: 'Third Item',
    summary: 'Third Item Summary',
  },
];

const SearchScreen = ({navigation}) => {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const bgOpacity = useRef(new Animated.Value(1)).current;
  const heroHeight = useRef(new Animated.Value(285)).current;

  useEffect(() => {
    if (isSearchFocus) {
      // hero-height
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230,
      }).start();
      // hero-height
      Animated.timing(heroHeight, {
        toValue: 100,
        duration: 230,
      }).start();
    } else {
      // opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230,
      }).start();
      // hero-height
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 230,
      }).start();
    }
  }, [bgOpacity, heroHeight, isSearchFocus]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{position: 'relative', zIndex: 1, height: heroHeight}}>
        {/* KIRMIZI BG */}
        <Animated.View style={{opacity: bgOpacity}}>
          <Bg>
            {/* LOGO */}
            <View style={{marginTop: 30}}>
              <LogoIcon width={120} height={40} color={'white'} />
            </View>
          </Bg>
        </Animated.View>

        {/* SEARCH BAR */}
        <View
          style={{
            position: 'absolute',
            padding: 16,
            bottom: 0,
            width: '100%',
            marginBottom: -42,
          }}>
          <CustomInput onChangeFocus={status => setIsSearchFocus(status)} />
        </View>
      </Animated.View>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.softRed,
          paddingTop: isSearchFocus ? 0 : 26,
        }}>
        {isSearchFocus ? (
          <View style={{flex: 1, marginTop: 40}}>
            <FlatList
              style={{padding: 16}}
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={{paddingVertical: 6}}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </View>
              )}
              ListHeaderComponent={
                <Text style={{color: theme.colors.textLight, marginBottom: 10}}>
                  Son Aramalar
                </Text>
              }
            />
          </View>
        ) : (
          <View style={{flex: 1, paddingVertical: 40, paddingHorizontal: 16}}>
            <View>
              <Text style={{color: theme.colors.textLight}}>Bir Deyim</Text>
              <CardContainer
                style={{marginTop: 10}}
                onPress={() =>
                  navigation.navigate('Detail', {title: 'on para'})
                }>
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az (para).</CardSummary>
              </CardContainer>
            </View>
            <View style={{marginTop: 40}}>
              <Text style={{color: theme.colors.textLight}}>
                Bir Deyim - Atasözü
              </Text>
              <CardContainer
                style={{marginTop: 10}}
                onPress={() =>
                  navigation.navigate('Detail', {title: 'siyem siyem ağlamak'})
                }>
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan gözyaşı dökmek.
                </CardSummary>
              </CardContainer>
            </View>
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
