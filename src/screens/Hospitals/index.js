import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {dataHospital, ILHospitalBG} from '../../assets';
import {ListHospital} from '../../component';
import {styles} from './styles';

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
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
