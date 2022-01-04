import React from 'react';
import {Text, View} from 'react-native';
import {Gap} from '../../../component';
import {Button} from '../../atoms';
import styles from './styles';

export default function Header({onPress, title}) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon={'back-dark'} onPress={onPress} />

      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}
