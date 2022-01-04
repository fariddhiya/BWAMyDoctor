import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

const styles = StyleSheet.create({
  pages: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
    padding: 40,
  },
  font: {
    fontSize: 28,
    color: colors.white,
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
