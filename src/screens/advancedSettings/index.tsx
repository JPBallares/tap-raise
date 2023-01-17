import CustomButton from '@components/customButton';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {GST} from '@theme/globalStyles';
import {ROUTES} from '@utils/routes';
import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles';

type Props = StackScreenProps<MainStackParamList, ROUTES.ADVANCE_SETTINGS>;

const AdvancedSettings = ({navigation}: Props) => {
  const handleBack = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: ROUTES.SETTINGS}],
    });
  }, [navigation]);

  return (
    <Wrapper containerStyle={GST.P4}>
      <View style={GST.FLEX}>
        <View style={GST.MB4}>
          <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
            Fundraiser ID
          </CustomText>
          <TextInput style={styles.inputField} />
        </View>
        <View style={GST.MB4}>
          <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
            Stripe Key
          </CustomText>
          <TextInput style={styles.inputField} secureTextEntry />
        </View>
        <View style={GST.MB4}>
          <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
            Stripe Secret
          </CustomText>
          <TextInput style={styles.inputField} secureTextEntry />
        </View>
      </View>
      <View style={[GST.FLEX_END, GST.MB4]}>
        <CustomButton
          containerStyle={{...styles.backButton}}
          textStyle={{...styles.backButtonText}}
          text="Back"
          onPress={handleBack}
        />
      </View>
    </Wrapper>
  );
};

export default AdvancedSettings;
