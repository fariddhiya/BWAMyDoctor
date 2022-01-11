import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';
import styles from './styles';

export default function Input({label, value, onChangeText, secureTextEntry}) {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry ? true : false}
      />
    </View>
  );
}
