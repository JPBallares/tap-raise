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
    height: RF(80),
  },
  backButton: {
    ...GST.P1,
    backgroundColor: COLORS.RED_600,
  },
  backButtonText: {
    color: COLORS.WHITE,
  },
  advancedButton: {
    ...GST.P1,
    backgroundColor: COLORS.GRAY_600,
  },
  advancedButtonText: {
    color: COLORS.WHITE,
  },
});
