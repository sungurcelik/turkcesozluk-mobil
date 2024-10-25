import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailScreen from '../screens/DetailScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import BookmarkIcon from '../iconsJs/bookmarkIcon';
import HistoryIcon from '../iconsJs/historyIcon';
import SearchIcon from '../iconsJs/searchIcon';
import renderTabIcon from '../utils/helper';
import {Button, TouchableOpacity, View} from 'react-native';
import theme from '../utils/theme';
import LeftArrowIcon from '../iconsJs/leftArrowIcon';
import MoreIcon from '../iconsJs/moreIcon';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Search"
        component={SearchScreen}
      />
      <HomeStack.Screen
        options={({route, navigation}) => {
          return {
            title: (route.params && route.params.title) || 'Boş',
            headerStyle: {
              backgroundColor: theme.colors.red,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                style={{paddingHorizontal: 20, height: '100%'}}
                onPress={() => navigation.navigate('Search')}>
                <LeftArrowIcon color={theme.colors.textDark} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{paddingHorizontal: 20, height: '100%'}}
                onPress={() => navigation.navigate('Search')}>
                <MoreIcon color={theme.colors.textDark} />
              </TouchableOpacity>
            ),
          };
        }}
        name="Detail"
        component={DetailScreen}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 120,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 20,
          },
        }}>
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: renderTabIcon(HistoryIcon),
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <View
                style={{
                  backgroundColor: 'red',
                  padding: 25,
                  borderRadius: 9999,
                  borderWidth: 20,
                  borderColor: 'white',
                }}>
                <SearchIcon color={'white'} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: renderTabIcon(BookmarkIcon),
            tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
