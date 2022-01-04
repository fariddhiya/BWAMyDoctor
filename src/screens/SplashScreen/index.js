import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ILLogo} from '../../assets';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      RootNavigation.reset('GetStarted');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.pages}>
      <ILLogo />
      <Text style={styles.text}>My Doctor</Text>
    </SafeAreaView>
  );
}
