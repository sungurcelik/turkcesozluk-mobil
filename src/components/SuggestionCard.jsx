import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {CardContainer, CardSummary, CardTitle} from './Card';
import theme from '../utils/theme';
import LoaderText from './LoaderText';

const SuggestionCard = ({title, onPress, data, ...props}) => {
  return (
    <View style={{marginTop: 40}} {...props}>
      <Text style={{color: theme.colors.textLight}}>{title}</Text>
      <CardContainer style={{marginTop: 10}} onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <View>
            <LoaderText />
            <LoaderText
              width={200}
              backgroundColor={theme.colors.light}
              marginTop={10}
            />
          </View>
        )}
      </CardContainer>
    </View>
  );
};

export default SuggestionCard;

const styles = StyleSheet.create({});
