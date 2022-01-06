import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {dataDoctor} from '../../assets';
import {List} from '../../component';
import {styles} from './styles';

export default function Messages() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <FlatList
          data={dataDoctor}
          keyExtractor={(index, value) => value}
          renderItem={({item}) => {
            return <List name={item.name} desc={item.desc} key={item.id} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}
