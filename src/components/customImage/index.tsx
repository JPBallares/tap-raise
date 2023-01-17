import {ColorType} from '@interfaces/theme';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from 'react-native-fast-image';

type Props = {
  path: Source;
  uri: string;
  resizeMode: ResizeMode;
  size: number;
  width: number;
  percentWidth: number;
  height: number;
  percentHeight: number;
  customStyle: ImageStyle;
  onPress: () => void;
  tintColor: ColorType;
  containerStyle: ViewStyle;
  radius: number;
};

const CustomImage = ({
  path,
  uri,
  resizeMode = 'contain',
  size,
  width = 0,
  height = 0,
  customStyle,
  percentWidth,
  percentHeight,
  onPress,
  tintColor,
  containerStyle,
  radius,
}: Partial<Props>) => {
  const style: StyleProp<ImageStyle> = {
    width: percentWidth ? `${percentWidth}%` : RF(size || width),
    height: percentHeight ? `${percentHeight}%` : RF(size || height),
    borderRadius: radius ? RF(radius) : 0,
  };

  return (
    <>
      <TouchableOpacity
        disabled={!onPress}
        onPress={onPress}
        hitSlop={GST.HITSLOP}
        style={containerStyle}>
        <FastImage
          source={uri ? {uri} : path}
          resizeMode={resizeMode}
          style={[style, customStyle]}
          tintColor={tintColor && COLORS[tintColor]}
        />
      </TouchableOpacity>
    </>
  );
};

export default CustomImage;
