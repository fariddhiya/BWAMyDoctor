import React from 'react';
import {Text, View} from 'react-native';
import {Button, Gap} from '../../../component';
import * as RootNavigation from '../../../RootNavigation';
import DarkProfile from './DarkProfile';
import styles from './styles';

export default function Header({onPress, title, type}) {
  if (type === 'dark-profile') {
    return <DarkProfile />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
      />

      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}
