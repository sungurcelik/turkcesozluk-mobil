import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import theme from '../utils/theme';
import SearchIcon from '../iconsJs/searchIcon';
import CloseIcon from '../iconsJs/closeIcon';

const CustomInput = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');

  const onCancel = () => {
    setIsFocus(false);
    Keyboard.dismiss();
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <SearchIcon color={theme.colors.textMedium} />
      </View>
      <TouchableOpacity style={{flex: 1}}>
        <TextInput
          onFocus={() => setIsFocus(true)}
          style={[
            styles.textInput,
            {borderColor: isFocus ? '#D1D1D1' : 'transparent'},
          ]}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor={theme.colors.textMedium}
          value={value}
          onChangeText={text => setValue(text)}
        />
      </TouchableOpacity>
      {value.length > 0 && (
        <TouchableOpacity
          onPress={onClear}
          style={{position: 'absolute', right: 85}}>
          <CloseIcon color={theme.colors.textDark} />
        </TouchableOpacity>
      )}
      {isFocus && (
        <Button title="Vazgeç" onPress={onCancel} style={styles.cancel} />
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    paddingLeft: 52,
    height: 52,
    color: theme.colors.textDark,
    borderRadius: theme.radii.normal,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    bottom: 9,
    marginLeft: 9,
    pointerEvents: 'none',
  },
  cancel: {
    height: 52,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  cancelText: {
    // color: theme.colors.textDark,
  },
});
