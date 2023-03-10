import {settings} from '@assets/icons';
import Banner from '@components/banner';
import CustomButton from '@components/customButton';
import CustomImage from '@components/customImage';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {useAppSelector} from '@hooks/store';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import SquareReader from '@screens/services/reader';
import {RootState} from '@store';
import {GST} from '@theme/globalStyles';
import {SETTINGS_PIN} from '@utils/constants';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {useState} from 'react';
import {TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';

import {styles} from './styles';

type Props = StackScreenProps<MainStackParamList, ROUTES.MAIN>;

const Main = ({navigation}: Props) => {
  const {logoUrl, donationText, amounts, backgroundColor, foregroundColor} =
    useAppSelector((state: RootState) => state.config);
  const [selectedAmount, setSelectedAmount] = useState(amounts[0]);
  const textColor: TextStyle = {
    color: foregroundColor,
  };
  const background: ViewStyle = {
    backgroundColor,
  };
  const handleTapToDonate = async () => {
    const reader = new SquareReader();
    const result = await reader.startCheckout(selectedAmount);
    console.log(result);

    navigation.navigate(ROUTES.SUCCESS);
  };
  return (
    <Wrapper containerStyle={background}>
      <Banner uri={logoUrl} />
      <View style={[GST.P4, GST.FLEX]}>
        <CustomText
          size="3XL"
          center
          style={{...GST.MB4, ...GST.BOLD, ...textColor}}>
          {donationText}
        </CustomText>
        <TouchableOpacity onPress={handleTapToDonate}>
          <CustomText
            size="3XL"
            center
            style={{...GST.MB4, ...GST.MEDIUM, ...textColor}}>
            Tap to donate
          </CustomText>
        </TouchableOpacity>
        <View style={[GST.FLEX, styles.buttonContainer]}>
          {amounts
            .filter(val => val)
            .map((val, idx) => (
              <CustomButton
                text={'$' + val}
                type={val === selectedAmount ? 'B' : 'A'}
                onPress={() => setSelectedAmount(val)}
                key={idx}
              />
            ))}
        </View>
      </View>
      <View style={GST.FLEX_END}>
        <CustomImage
          path={settings}
          size={48}
          onPress={() =>
            navigation.navigate(ROUTES.PIN, {
              storedPin: SETTINGS_PIN,
              nextScreen: ROUTES.SETTINGS,
            })
          }
        />
      </View>
    </Wrapper>
  );
};

export default Main;
