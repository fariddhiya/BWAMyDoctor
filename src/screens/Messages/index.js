import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import {dataDoctor} from '../../assets';
import {ListDoctor} from '../../component';
import {colors, fonts} from '../../utils';

export default function Messages() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <FlatList
          data={dataDoctor}
          keyExtractor={(index, value) => value}
          renderItem={({item}) => {
            return (
              <ListDoctor
                profile={item.profile}
                name={item.name}
                desc={item.desc}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
