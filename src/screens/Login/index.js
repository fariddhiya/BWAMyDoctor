import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {child, get, getDatabase, ref} from 'firebase/database';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../component';
import {useForm} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import {colors, storeData} from '../../utils';
import styles from './styles';

export default function Login() {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const handlerMainApp = () => {
    const auth = getAuth();
    setLoading(true);
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        const user = userCredential.user;
        setLoading(false);
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${userCredential.user.uid}`))
          .then(resDB => {
            if (resDB.exists()) {
              storeData('user', resDB.val());
              RootNavigation.reset('MainApp');
            } else {
              console.log('no data');
            }
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  const handlerRegister = () => {
    RootNavigation.navigate('Register');
  };
  return (
    <>
      <SafeAreaView style={styles.page}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label={'Email Address'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label={'Password'}
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
          />
          <Gap height={10} />
          <Link title={'Forgot My Password'} size={12} />
          <Gap height={40} />
          <Button title={'Sign In'} onPress={handlerMainApp} />
          <Gap height={30} />
          <Link
            title={'Create New Account'}
            size={16}
            align={'center'}
            onPress={handlerRegister}
          />
        </ScrollView>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
}
