import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DummyUser, ILNullPhoto} from '../../../assets';
import * as RootNavigation from '../../../RootNavigation';
import {getData} from '../../../utils';
import {styles} from './styles';

export default function HomeProfile() {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  });

  const handlerUserProfile = () => {
    RootNavigation.navigate('UserProfile');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlerUserProfile}>
      <Image source={profile.photo} style={styles.avatar} />
      <View style={styles}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
}
