import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../component';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function Register() {
  const handlerBack = () => {
    RootNavigation.goBack();
  };
  const handlerUploadPhoto = () => {
    RootNavigation.navigate('UploadPhoto');
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header onPress={handlerBack} title={'Daftar Akun'} />
      <View style={styles.content}>
        <Input label={'Full Name'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={40} />
        <Button title={'Continue'} onPress={handlerUploadPhoto} />
      </View>
    </SafeAreaView>
  );
}
