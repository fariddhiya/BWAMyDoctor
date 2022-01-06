import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {dataDoctor} from '../../assets';
import {Header, List} from '../../component';
import * as RootNavigation from '../../RootNavigation';
import {colors} from '../../utils';

export default function ChooseDoctor() {
  const handlerChatting = () => {
    RootNavigation.navigate('Chatting');
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Pilih Dokter Anak'} type={'dark'} />
      <FlatList
        data={dataDoctor}
        renderItem={({item}) => {
          return (
            <List
              name={item.name}
              key={item.id}
              desc={item.desc}
              type={'next'}
              onPress={handlerChatting}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
