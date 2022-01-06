import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../component';
import {colors, fonts} from '../../utils';

export default function Chatting() {
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Nairobi Putri Hayza'} type={'dark-profile'} />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem />
      </View>
      <InputChat />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
