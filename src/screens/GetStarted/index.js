import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Gap} from '../../component';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function GetStarted() {
  const LoginHandler = () => {
    RootNavigation.navigate('Login');
  };
  const RegisterHandler = () => {
    RootNavigation.navigate('Register');
  };
  return (
    <ImageBackground source={ILGetStarted} style={styles.pages}>
      <View>
        <ILLogo />
        <Text style={styles.font}>
          Konsultasi dengan dokter lebih mudah & fleksibel
        </Text>
      </View>

      <View>
        <Button title="Get Started" onPress={RegisterHandler} />
        <Gap height={16} />
        <Button type={'secondary'} title="Sign In" onPress={LoginHandler} />
      </View>
    </ImageBackground>
  );
}
