import Banner from '@components/banner';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {GST} from '@theme/globalStyles';
import {ROUTES} from '@utils/routes';
import React, {useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

type Props = StackScreenProps<MainStackParamList, ROUTES.SUCCESS>;

const Success = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ROUTES.MAIN}],
      });
    }, 5000);
  }, [navigation]);
  return (
    <Wrapper>
      <Banner uri="https://picsum.photos/300/200" />
      <View style={[GST.P4, GST.FLEX_CENTERED, styles.messageContainer]}>
        <CustomText size="3XL" center style={{...GST.MB4, ...GST.BOLD}}>
          Thank you for your donation.
        </CustomText>
      </View>
    </Wrapper>
  );
};

export default Success;
