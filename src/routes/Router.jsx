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
import theme from '../utils/theme';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
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
            backgroundColor: 'white',
            borderTopColor: 'white',
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
            tabBarIcon: ({color}) => <SearchIcon />,
            tabBarLabel: '',
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
