import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import React from 'react';
import {Image, ImageStyle, StyleSheet, View} from 'react-native';

interface Props {
  uri: string;
  style?: ImageStyle;
}

const Banner: React.FC<Props> = ({uri, style}) => {
  return (
    <View style={GST.MB4}>
      <Image source={{uri}} style={[styles.banner, style]} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: RF(150),
  },
});

export default Banner;
