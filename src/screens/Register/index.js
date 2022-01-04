import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Header, Input} from '../../component';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function Register() {
  const handlerBack = () => {
    RootNavigation.goBack();
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header onPress={handlerBack} title={'Daftar Akun'} />
      <View style={styles.content}>
        <Input label={'Full Name'} />
        <Input label={'Pekerjaan'} />
        <Input label={'Email'} />
        <Input label={'Password'} />
        <Button title={'Continue'} />
      </View>
    </SafeAreaView>
  );
}
