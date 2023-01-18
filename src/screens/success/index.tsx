import Banner from '@components/banner';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {useAppSelector} from '@hooks/store';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {RootState} from '@store';
import {GST} from '@theme/globalStyles';
import {ROUTES} from '@utils/routes';
import React, {useEffect} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

type Props = StackScreenProps<MainStackParamList, ROUTES.SUCCESS>;

const Success = ({navigation}: Props) => {
  const {foregroundColor, backgroundColor} = useAppSelector(
    (state: RootState) => state.config,
  );
  const textColor: TextStyle = {
    color: foregroundColor,
  };
  const background: ViewStyle = {
    backgroundColor,
  };
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ROUTES.MAIN}],
      });
    }, 5000);
  }, [navigation]);
  return (
    <Wrapper containerStyle={background}>
      <Banner uri="https://picsum.photos/300/200" />
      <View style={[GST.P4, GST.FLEX_CENTERED, styles.messageContainer]}>
        <CustomText
          size="3XL"
          center
          style={{...GST.MB4, ...GST.BOLD, ...textColor}}>
          Thank you for your donation.
        </CustomText>
      </View>
    </Wrapper>
  );
};

export default Success;
