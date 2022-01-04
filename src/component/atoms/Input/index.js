import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}
