import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default function Link({size, title, align}) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
}
