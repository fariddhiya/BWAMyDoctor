import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../component';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function Login() {
  const handlerMainApp = () => {
    RootNavigation.reset('MainApp');
  };
  const handlerRegister = () => {
    RootNavigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label={'Email Address'} />
      <Gap height={24} />
      <Input label={'Password'} />
      <Gap height={10} />
      <Link title={'Forgot My Password'} size={12} />
      <Gap height={40} />
      <Button title={'Sign In'} onPress={handlerMainApp} />
      <Gap height={30} />
      <Link
        title={'Create New Account'}
        size={16}
        align={'center'}
        onPress={handlerRegister}
      />
    </SafeAreaView>
  );
}
