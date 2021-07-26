import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  ComingSoon,
  DetailMovie,
  TvShow,
  GetStarted,
  Splash,
} from '../pages';
import {BottomNavigator} from '../component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ComingSoon" component={ComingSoon} />
      <Tab.Screen name="TvShow" component={TvShow} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMovie"
        component={DetailMovie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
