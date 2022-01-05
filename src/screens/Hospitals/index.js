import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {dataHospital, ILHospitalBG} from '../../assets';
import {ListHospital} from '../../component';
import {colors, fonts} from '../../utils';

export default function Hospitals() {
  return (
    <SafeAreaView style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <FlatList
          data={dataHospital}
          keyExtractor={(index, value) => value}
          renderItem={({item}) => {
            return (
              <ListHospital
                type={item.type}
                name={item.name}
                address={item.address}
                pic={item.pic}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    borderRadius: 20,
    marginTop: -30,
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 14,
  },
});
