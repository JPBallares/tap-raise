import {ColorType, FontSizeType} from '@interfaces/theme';
import {COLORS} from '@theme/colors';
import {FONT_SIZES} from '@theme/fonts';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {Text, TextProps, TextStyle, View} from 'react-native';

interface Props extends TextProps {
  capital: boolean;
  size: FontSizeType;
  color: ColorType;
  onPress: () => void;
  semiBold: boolean;
  medium: boolean;
  contain: boolean;
  center: boolean;
}

const CustomText = (props: Partial<Props>) => {
  const {
    size = 'XS',
    color = 'GRAY_800',
    style,
    numberOfLines = 0,
    capital = false,
    onPress,
    contain,
    center,
  } = props;

  const textStyle: TextStyle = {
    fontSize: RF(FONT_SIZES[size]),
    color: COLORS[color],
    textTransform: capital ? 'uppercase' : 'none',
    textAlign: center ? 'center' : 'auto',
  };

  return (
    <View style={contain && GST.FLEX}>
      <Text
        onPress={onPress}
        numberOfLines={numberOfLines}
        style={[textStyle, style]}>
        {props.children}
      </Text>
    </View>
  );
};

export default CustomText;
