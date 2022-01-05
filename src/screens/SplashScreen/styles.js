import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const styles = StyleSheet.create({
  pages: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});

export default styles;
