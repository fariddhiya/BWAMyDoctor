import {StyleSheet} from 'react-native';
import {fonts, colors} from '../../utils';

export const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    borderRadius: 20,
    marginTop: -30,
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 14,
  },
});
