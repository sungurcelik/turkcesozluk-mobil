import {Animated, StyleSheet, View} from 'react-native';
import Bg from './Bg';
import LogoIcon from '../iconsJs/logoIcon';
import CustomInput from './CustomInput';
import {useEffect, useRef} from 'react';

const HomeBgAnimated = ({isSearchFocus, onSearchFocus}) => {
  const bgOpacity = useRef(new Animated.Value(1)).current;
  const heroHeight = useRef(new Animated.Value(285)).current;

  const fetchSearchResults = async query => {
    try {
      const response = await fetch(`https://sozluk.gov.tr/gts?ara=${query}`);
      if (!response.ok) {
        throw new Error('Ağ hatası: ' + response.statusText);
      }
      const data = await response.json();
      // console.log(data[0].birlesikler); // Arama sonuçlarını konsola yazdır
      // // Burada arama sonuçlarını işleyebilir veya bir state'e kaydedebilirsiniz
      // console.log(data[0].birlesikler)
    } catch (error) {
      console.error('Fetch hatası:', error);
    }
  };


  useEffect(() => {
    if (isSearchFocus) {
      // hero-height
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230,
        useNativeDriver: true, // Bu satırı ekle
      }).start();
      // hero-height
      Animated.timing(heroHeight, {
        toValue: 100,
        duration: 230,
        useNativeDriver: false,
      }).start();
    } else {
      // opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230,
        useNativeDriver: true,
      }).start();
      // hero-height
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 230,
        useNativeDriver: false,
      }).start();
    }
  }, [bgOpacity, heroHeight, isSearchFocus]);

  return (
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
        <CustomInput fetchSearchResults={fetchSearchResults} onChangeFocus={status => onSearchFocus(status)} />
      </View>
    </Animated.View>
  );
};

export default HomeBgAnimated;

const styles = StyleSheet.create({});
