import CustomText from '@components/customText';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  text: string;
  onPress?: () => void;
  type?: 'A' | 'B';
  containerStyle?: ViewStyle;
  textStyle?: object;
  disabled?: boolean;
}

const CustomButton: React.FC<Props> = ({
  text,
  onPress,
  type = 'A',
  containerStyle,
  textStyle,
  disabled,
}) => {
  const typeA = type === 'A';
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? COLORS.GRAY_100
            : typeA
            ? COLORS.WHITE
            : COLORS.GRAY_500,
          borderColor: disabled
            ? COLORS.GRAY_300
            : typeA
            ? COLORS.GRAY_300
            : COLORS.GRAY_900,
        },
        containerStyle,
      ]}
      onPress={onPress}>
      <CustomText
        style={[
          {
            color: disabled
              ? COLORS.GRAY_300
              : typeA
              ? COLORS.BLACK
              : COLORS.WHITE,
          },
          textStyle,
        ]}
        size="2XL">
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    ...GST.P4,
    ...GST.SHADOW,
    ...GST.MB2,
    alignItems: 'center',
    borderRadius: RF(5),
  },
});

export default CustomButton;
