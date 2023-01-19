import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputField: {
    ...GST.P2,
    borderRadius: RF(4),
    borderWidth: RF(1),
    borderColor: COLORS.BLUE_600,
    fontSize: RF(18),
  },
  textAreaField: {
    ...GST.P2,
    borderRadius: RF(4),
    borderWidth: RF(1),
    borderColor: COLORS.BLUE_600,
    fontSize: RF(18),
    height: RF(150),
  },
  backButton: {
    backgroundColor: COLORS.RED_600,
    width: RF(180),
  },
  backButtonText: {
    color: COLORS.WHITE,
  },
  authButton: {
    width: RF(180),
  },
});
