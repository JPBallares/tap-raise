import {settings} from '@assets/icons';
import Banner from '@components/banner';
import CustomButton from '@components/customButton';
import CustomImage from '@components/customImage';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {useAppSelector} from '@hooks/store';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {RootState} from '@store';
import {GST} from '@theme/globalStyles';
import {SETTINGS_PIN} from '@utils/constants';
import {ROUTES} from '@utils/routes';
import React from 'react';
import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

type Props = StackScreenProps<MainStackParamList, ROUTES.MAIN>;

const Main = ({navigation}: Props) => {
  const {logoUrl, donationText, amounts} = useAppSelector(
    (state: RootState) => state.config,
  );
  const [selectedAmount, setSelectedAmount] = useState(amounts[0]);
  return (
    <Wrapper>
      <Banner uri={logoUrl} />
      <View style={[GST.P4, GST.FLEX]}>
        <CustomText size="3XL" center style={{...GST.MB4, ...GST.BOLD}}>
          {donationText}
        </CustomText>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SUCCESS)}>
          <CustomText size="3XL" center style={{...GST.MB4, ...GST.MEDIUM}}>
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
