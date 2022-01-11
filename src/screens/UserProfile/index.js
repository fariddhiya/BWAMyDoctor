import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Gap, Header, List, Profile} from '../../component';
import * as RootNavigation from '../../RootNavigation';
import {colors} from '../../utils';

export default function UserProfile() {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
  });

  console.log(profile);

  const handlerEditProfile = () => {
    RootNavigation.navigate('UpdateProfile');
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Profile'} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile name={profile.fullName} desc={profile.profession} />
      )}

      <Gap height={14} />
      <List
        name={'Edit Profile'}
        desc={'Last Update Yesterday'}
        type={'next'}
        icon={'edit-profile'}
        onPress={handlerEditProfile}
      />
      <List
        name={'Language'}
        desc={'Last Update Yesterday'}
        type={'next'}
        icon={'edit-profile'}
      />
      <List
        name={'Give Us Rate'}
        desc={'Last Update Yesterday'}
        type={'next'}
        icon={'edit-profile'}
      />
      <List
        name={'Help Center'}
        desc={'Last Update Yesterday'}
        type={'next'}
        icon={'edit-profile'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
