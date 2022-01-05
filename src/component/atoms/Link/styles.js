import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});

export default styles;
