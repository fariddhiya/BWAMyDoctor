import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {dataCategory} from '../../assets/dummy/dataDummy';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../component';
import * as RootNavigation from '../../RootNavigation';
import {getData} from '../../utils';
import {styles} from './styles';

export default function Doctor() {
  useEffect(() => {
    getData('user').then(res => {
      console.log('data user', res);
    });
  });
  const handlerChooseDoctor = () => {
    RootNavigation.navigate('ChooseDoctor');
  };
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>

          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {dataCategory.map(item => {
                  return (
                    <DoctorCategory
                      category={item.category}
                      key={item.id}
                      onPress={handlerChooseDoctor}
                    />
                  );
                })}

                <Gap width={22} />
              </View>
              <Gap height={30} />
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              name={'Alexa Rachel'}
              desc={'Pediatrician'}
              avatar={DummyDoctor1}
            />
            <RatedDoctor
              name={'Alexa Rachel'}
              desc={'Pediatrician'}
              avatar={DummyDoctor1}
            />
            <RatedDoctor
              name={'Alexa Rachel'}
              desc={'Pediatrician'}
              avatar={DummyDoctor1}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
