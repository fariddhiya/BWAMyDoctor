import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../component';
import {colors} from '../../utils';
import * as RootNavigation from '../../RootNavigation';

export default function UpdateProfile() {
  const handlerBack = () => {
    RootNavigation.goBack();
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Edit Profile'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button title={'Save'} onPress={handlerBack} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
