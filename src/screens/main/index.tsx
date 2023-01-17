import {settings} from '@assets/icons';
import Banner from '@components/banner';
import CustomButton from '@components/customButton';
import CustomImage from '@components/customImage';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {GST} from '@theme/globalStyles';
import {DONATION_OPTIONS} from '@utils/constants';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';

type Props = StackScreenProps<MainStackParamList, ROUTES.MAIN>;

const Main = ({navigation}: Props) => {
  const [selectedAmount, setSelectedAmount] = useState(DONATION_OPTIONS[0]);
  return (
    <Wrapper>
      <Banner uri="https://picsum.photos/300/200" />
      <View style={GST.P4}>
        <CustomText size="3XL" center style={{...GST.MB4, ...GST.BOLD}}>
          Your donation will help to support our football team to do great
          things !
        </CustomText>
        <CustomText size="3XL" center style={{...GST.MB4, ...GST.MEDIUM}}>
          Tap to donate
        </CustomText>
        {DONATION_OPTIONS.map((val, idx) => (
          <CustomButton
            text={'$' + val}
            type={val === selectedAmount ? 'B' : 'A'}
            onPress={() => setSelectedAmount(val)}
            key={idx}
          />
        ))}
        <View style={GST.FLEX_END}>
          <CustomImage
            path={settings}
            size={48}
            onPress={() => navigation.navigate(ROUTES.PIN)}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default Main;
