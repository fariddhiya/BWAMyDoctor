import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../component';
import {colors} from '../../utils';

export default function DoctorProfile() {
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Doctor Profile'} />
      <Profile name={'Nairobi Putri Hayza'} desc={'Dokter Anak'} />
      <Gap height={10} />
      <ProfileItem label={'Alumnus'} value={'Universitas Indonesia, 2020'} />
      <ProfileItem
        label={'Tempat Praktik'}
        value={'Universitas Indonesia, 2020'}
      />
      <ProfileItem label={'No. STR'} value={'0000116622081996'} />
      <View style={styles.action}>
        <Button title={'Start Consultation'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
