import {getDatabase, ref, update} from 'firebase/database';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../component';
import * as RootNavigation from '../../RootNavigation';
import {colors, fonts} from '../../utils';

export default function UploadPhoto({route}) {
  const {fullName, profession, uid} = route.params;
  const [photoForDB, setPhotoForDB] = useState();
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const handlerMainApp = () => {
    const db = getDatabase();
    update(ref(db, 'users/' + uid), {photo: photoForDB});
    RootNavigation.reset('MainApp');
  };
  const optionTakePhoto = {
    includeBase64: true,
    quality: 0.5,
    maxHeight: 250,
    maxWidth: 250,
  };
  const getImage = () => {
    launchImageLibrary(optionTakePhoto, response => {
      if (response.didCancel || response.errorCode) {
        showMessage({
          message: 'oops, sepertinya anda tidak memilih fotonya',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        setPhotoForDB(
          `data:${response?.assets[0].type};base64, ${response?.assets[0].base64}`,
        );
        const source = {uri: response?.assets[0].uri};
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Upload Photo'} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} resizeMode="cover" />
            {hasPhoto ? (
              <IconRemovePhoto style={styles.addPhoto} />
            ) : (
              <IconAddPhoto style={styles.addPhoto} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>

        <View>
          <Button
            title={'Upload and Continue'}
            onPress={handlerMainApp}
            disable={!hasPhoto}
          />
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
    borderRadius: 50,
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
