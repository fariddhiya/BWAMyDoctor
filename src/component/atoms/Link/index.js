import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function Link({size, title, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
}
