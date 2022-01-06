import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../component';
import {colors, fonts} from '../../utils';
import * as RootNavigation from '../../RootNavigation';

export default function UploadPhoto() {
  const handlerMainApp = () => {
    RootNavigation.reset('MainApp');
  };
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Upload Photo'} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image
              source={ILNullPhoto}
              resizeMode="contain"
              style={styles.avatar}
            />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>

        <View>
          <Button title={'Upload and Continue'} onPress={handlerMainApp} />
          <Gap height={30} />
          <Link
            title={'Skip for this'}
            align={'center'}
            size={16}
            onPress={handlerMainApp}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
