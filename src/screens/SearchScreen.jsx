import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import LogoIcon from '../iconsJs/logoIcon';
import theme from '../utils/theme';
import CustomInput from '../components/CustomInput';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <View style={styles.logo}>
        <LogoIcon width={70} height={40} color={theme.colors.red} />
      </View>
      <View style={{padding: 10}}>
        <CustomInput />
      </View>
    </View>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  logo: {padding: 10},
});
