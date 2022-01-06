import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyDoctor1, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';
import * as RootNavigation from '../../../RootNavigation';

export default function RatedDoctor({name, desc, avatar}) {
  const handlerDoctorProfile = () => {
    RootNavigation.navigate('DoctorProfile');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlerDoctorProfile}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{desc}</Text>
        </View>
      </View>

      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profile: {
    flex: 1,
  },
  rate: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
