import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import GameScreen from '../screens/GameScreen';
import EventsScreen from '../screens/EventsScreen';

// Импорт кастомных SVG-иконок
import SinglePlanrtSvg from '../assets/svg/SinglePlanrtSvg';
import RocketSvg from '../assets/svg/RocketSvg';
import JoistikSvg from '../assets/svg/JoistikSvg';
import StarEventSvg from '../assets/svg/StarEventSvg';
import StarsCardsSvg from '../assets/svg/StarsCardsSvg';
import ChevronBackSvg from '../assets/svg/ChevronBackSvg';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CircleSettingsSvg from '../assets/svg/CircleSettingsSvg';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const navigation = useNavigation();
  return (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerStyle: { backgroundColor: '#053362' },
      tabBarStyle: { backgroundColor: '#053362' },
      tabBarIcon: ({ focused }) => {
        let IconComponent;

        if (route.name === 'Home') {
          IconComponent = SinglePlanrtSvg;
        } else if (route.name === 'Info') {
          IconComponent = RocketSvg;
        } else if (route.name === 'Game') {
          IconComponent = JoistikSvg;
        } else if (route.name === 'Events') {
          IconComponent = StarsCardsSvg;
        }

        return <IconComponent width={28} height={28} fill={focused ? 'white' : '#aaaaaa'} />;
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#aaaaaa',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{
      headerTitle: 'Space objects',
      headerTitleStyle: {
        color: 'white',
      },
      headerRight: ()=>(
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
        >
          <CircleSettingsSvg/>
        </TouchableOpacity>
      )
    }} />
    <Tab.Screen name="Info" component={InfoScreen} options={{
      headerTitle: 'Scientific base',
      headerTitleStyle: {
        color: 'white',
      },
    }} />
    <Tab.Screen name="Game" component={GameScreen} options={{
      headerShown: false,
    }}/>
    <Tab.Screen name="Events" component={EventsScreen} options={{
      headerTitle: 'Space calendar',
      headerTitleStyle: {
        color: 'white',
      },
    }}/>
  </Tab.Navigator>
)};

export default MainTabNavigator;
