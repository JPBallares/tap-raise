import Banner from '@components/banner';
import CustomButton from '@components/customButton';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {MainStackScreenProps} from '@interfaces/navigation';
import {GST} from '@theme/globalStyles';
import {DONATION_OPTIONS} from '@utils/constants';
import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';

type Props = MainStackScreenProps & {};

const Main = ({}: Props) => {
  const [selectedAmount, setSelectedAmount] = useState(DONATION_OPTIONS[0]);
  return (
    <Wrapper>
      <Banner uri="https://picsum.photos/300/200" />
      <View style={GST.P4}>
        <CustomText size="3XL" center style={GST.MB4}>
          Your donation will help to support our football team to do great
          things !
        </CustomText>
        <CustomText size="3XL" center style={GST.MB4}>
          Tap to donate
        </CustomText>
        {DONATION_OPTIONS.map(val => (
          <CustomButton
            text={'$' + val}
            type={val === selectedAmount ? 'B' : 'A'}
            onPress={() => setSelectedAmount(val)}
          />
        ))}
      </View>
    </Wrapper>
  );
};

export default Main;
