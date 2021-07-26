import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import 'react-native-gesture-handler';
import {GetStarted, Splash} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      {/* <GetStarted /> */}
      <Router />
    </NavigationContainer>
  );
};

export default App;
