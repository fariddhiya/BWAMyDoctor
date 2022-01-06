import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets';
import * as RootNavigation from '../../../RootNavigation';

export default function IconOnly({icon}) {
  const handlerBack = () => {
    RootNavigation.goBack('');
  };
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    return <IconBackDark />;
  };
  return (
    <TouchableOpacity onPress={handlerBack}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
