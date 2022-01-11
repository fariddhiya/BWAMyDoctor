import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Fire} from './api';
import {navigationRef} from './RootNavigation';
import {Router} from './router';

const App = () => {
  Fire;
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
