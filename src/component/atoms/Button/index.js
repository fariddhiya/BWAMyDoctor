import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import IconOnly from './IconOnly';
import styles from './styles';

export default function Button({type, title, onPress, icon}) {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}
