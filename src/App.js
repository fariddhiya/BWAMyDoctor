import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './RootNavigation';
import {Router} from './router';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};

export default App;
