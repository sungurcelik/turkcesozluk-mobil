import {StyleSheet, Text, View} from 'react-native';
import theme from '../utils/theme';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import MoreIcon from '../iconsJs/moreIcon';

const DetailScreen = () => {
  return (
    <View style={{backgroundColor: theme.colors.softRed, padding: 16}}>
      <View>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Details!</Text>
        <Text style={{color: theme.colors.textLight, marginTop: 6}}>
          Arapça kalem
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <ActionButton>
            <MoreIcon />
          </ActionButton>
          <ActionButton>
            <MoreIcon />
          </ActionButton>
        </View>
        <View>
          <ActionButton>
            <MoreIcon />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
