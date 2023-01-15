import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {ColorType} from 'interfaces/theme';
import React, {ReactNode} from 'react';
import {StatusBar, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  children: ReactNode;
  noPaddingTop: boolean;
  noPaddingBottom: boolean;
  containerStyle: ViewStyle;
  barStyle: 'default' | 'light-content' | 'dark-content';
  bgColor: ColorType;
};

const Wrapper = ({
  children,
  noPaddingTop,
  noPaddingBottom,
  containerStyle,
  barStyle = 'default',
  bgColor = 'WHITE',
}: Partial<Props>) => {
  const insets = useSafeAreaInsets();
  const paddingTop = noPaddingTop ? 0 : insets.top;
  const paddingBottom = noPaddingBottom ? 0 : insets.bottom;
  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor="transparent"
      />
      <View
        style={[
          {
            paddingTop,
            paddingBottom,
            ...GST.FLEX,
            backgroundColor: COLORS[bgColor],
          },
          containerStyle,
        ]}>
        {children}
      </View>
    </>
  );
};

export default Wrapper;
