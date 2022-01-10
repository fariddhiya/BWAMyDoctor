import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './RootNavigation';
import {Router} from './router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
