import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import BtnIconSend from './BtnIcon';
import IconOnly from './IconOnly';
import styles from './styles';

export default function Button({type, title, onPress, icon, disable}) {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} />;
  }
  return (
    <TouchableOpacity
      style={disable ? styles.disableContainer : styles.container(type)}
      onPress={onPress}
      disabled={disable ? true : false}>
      <Text style={disable ? styles.disableText : styles.text(type)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
