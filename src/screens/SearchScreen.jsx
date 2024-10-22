import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogoIcon from '../iconsJs/logoIcon';
import theme from '../utils/theme';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      {/* <CustomButton /> */}
      <LogoIcon width={70} height={40} color={theme.colors.red} />
    </View>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
