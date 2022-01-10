import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Fire from '../../api/Fire';
import {Button, Gap, Header, Input, Loading} from '../../component';
import {useForm} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import {colors, storeData} from '../../utils';
import styles from './styles';

export default function Register() {
  const auth = getAuth();
  const handlerBack = () => {
    RootNavigation.goBack();
  };

  const [fullname, setFullname] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handlerRegister = () => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        setLoading(false);
        setForm('reset');

        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: user.uid,
        };
        console.log(user);

        //save realtime database firestore
        const db = getDatabase();
        set(ref(db, 'users/' + user.uid), data);

        //save local storage
        storeData('user', data);
        RootNavigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        console.log(error);
        showMessage({
          message: 'Email atau password salah',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <SafeAreaView style={styles.page}>
        <Header onPress={handlerBack} title={'Daftar Akun'} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label={'Full Name'}
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label={'Pekerjaan'}
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label={'Email'}
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label={'Password'}
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
            <Gap height={40} />
            <Button title={'Continue'} onPress={handlerRegister} />
          </ScrollView>
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
}
