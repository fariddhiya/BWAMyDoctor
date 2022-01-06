import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ILCatObat, ILCatPsikiater, ILCatUmum} from '../../../assets';
import {styles} from './styles';

export default function DoctorCategory({category, onPress}) {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ILCatUmum style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <ILCatPsikiater style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <ILCatObat style={styles.illustration} />;
    }
    return <ILCatUmum style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
}
