import {ScrollView, StyleSheet, Text, View} from 'react-native';
import theme from '../utils/theme';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import FavoriteIcon from '../iconsJs/favoriteIcon';
import SoundIcon from '../iconsJs/soundIcon';
import HandIcon from '../iconsJs/handIcon';
import FavoriteSolidIcon from '../iconsJs/favoriteSolidIcon';
import {DetailSummaryItemContainer} from '../components/DetailSummaryItem';
import LoaderText from '../components/LoaderText';
import {useEffect, useState} from 'react';

const DetailScreen = ({route}) => {
  // console.log(route)
  const keyword = route.params?.keyword;
  // const keyword = 'Savaş';
  const [data, setData] = useState(null);

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const data = await response.json();
    // console.log(JSON.stringify(data, null, 2));
    setData(data[0]);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  

  return (
    <View style={{backgroundColor: theme.colors.softRed}}>
      <ScrollView style={{padding: 16}}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>{keyword}</Text>
          {(data?.telaffuz || data?.lisan) && (
            <Text style={{color: theme.colors.textLight, marginTop: 6}}>
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
          }}>
          <View style={{flexDirection: 'row'}}>
            <ActionButton disabled={!data}>
              <SoundIcon
                width={24}
                height={24}
                color={theme.colors.textLight}
              />
            </ActionButton>
            {/* <ActionButton>
            <FavoriteIcon
              width={24}
              height={24}
              color={theme.colors.textLight}
            />
          </ActionButton> */}
            <View style={{marginLeft: 12}}>
              <ActionButton disabled={!data}>
                <FavoriteSolidIcon
                  width={24}
                  height={24}
                  color={theme.colors.textLight}
                />
              </ActionButton>
            </View>
          </View>
          <View>
            <ActionButton disabled={!data}>
              <HandIcon width={24} height={24} color={theme.colors.textLight} />
              <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
            </ActionButton>
          </View>
        </View>
        <View style={{marginTop: 32}}>
          {data
            ? data.anlamlarListe?.map(item => (
                <DetailSummaryItemContainer
                  key={item.anlam_sira}
                  data={item}
                  border={item.anlam_sira != 1}
                />
              ))
            : [1, 2, 3].map(index => (
                <DetailSummaryItemContainer
                  key={`loader-${index}`}
                  border={index != 1}>
                  <LoaderText />
                  <LoaderText
                    width={200}
                    backgroundColor={theme.colors.light}
                    marginTop={10}
                  />
                </DetailSummaryItemContainer>
              ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
