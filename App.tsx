import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import WelcomeScreen from './src/navigation/WelcomeScreen';
import SetailedInfoScreen from './src/screens/SetailedInfoScreen';
import { TouchableOpacity, Text } from 'react-native';
import ChevronBackSvg from './src/assets/svg/ChevronBackSvg.tsx';
import { useNavigation } from '@react-navigation/native';
import NewObjectScreen from './src/screens/NewObjectScreen';
import FiltersScreen from './src/screens/FiltersScreen';
import ReadMoreScreen from './src/screens/ReadMoreScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import GameProccesScreen from './src/screens/GameProccesScreen';
import LoseScreen from './src/screens/LoseScreen';

const Stack = createStackNavigator();

function CustomHeaderLeft() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
    >
      <ChevronBackSvg />
      <Text style={{ color: 'white', marginLeft: 5, fontSize: 16 }}>Back</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen
              name="SetailedInfo"
              component={SetailedInfoScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#053362',
                },
                headerLeft: () => <CustomHeaderLeft />,
                headerTitle: ''
              }}
            />
            <Stack.Screen
              name="NewObject"
              component={NewObjectScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#053362',
                },
                headerLeft: () => <CustomHeaderLeft />,
                headerTitle: ''
              }}
            />
            <Stack.Screen
              name="Filters"
              component={FiltersScreen}
              options={{
                presentation: 'modal',
                headerStyle: {
                  backgroundColor: '#053362',
                },
                headerLeft: () => <CustomHeaderLeft />,
                headerTitle: ''
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#053362',
                },
                headerLeft: () => <CustomHeaderLeft />,
                headerTitle: ''
              }}
            />
            <Stack.Screen
              name="ReadMore"
              component={ReadMoreScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#053362',
                },
                headerLeft: () => <CustomHeaderLeft />,
                headerTitle: ''
              }}
            />
            <Stack.Screen
              name="GameProcces"
              component={GameProccesScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#053362',
                },
                headerLeft: () => <CustomHeaderLeft />,
                headerTitle: ''
              }}
            />
            <Stack.Screen
              name="Lose"
              component={LoseScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#053362',
                },
                headerLeft: () => <CustomHeaderLeft />,
                headerTitle: '',
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
