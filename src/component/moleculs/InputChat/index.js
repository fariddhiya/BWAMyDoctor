import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../..';
import {colors, fonts} from '../../../utils';

export default function InputChat() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Nairobi" />
      <Button title={'send'} type={'btn-icon-send'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row', alignItems: 'center'},
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
