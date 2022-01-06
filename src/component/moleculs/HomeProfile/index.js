import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';
import * as RootNavigation from '../../../RootNavigation';
import {styles} from './styles';

export default function HomeProfile() {
  const handlerUserProfile = () => {
    RootNavigation.navigate('UserProfile');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlerUserProfile}>
      <Image source={DummyUser} style={styles.avatar} />
      <View style={styles}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
}
