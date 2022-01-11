import {getAuth, onAuthStateChanged} from 'firebase/auth';
import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ILLogo} from '../../assets';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function SplashScreen() {
  const auth = getAuth();
  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, user => {
        if (user) {
          RootNavigation.reset('MainApp');
        } else {
          RootNavigation.reset('GetStarted');
        }
      });
    }, 3000);
  }, [RootNavigation]);
  return (
    <SafeAreaView style={styles.pages}>
      <ILLogo />
      <Text style={styles.text}>My Doctor</Text>
    </SafeAreaView>
  );
}
