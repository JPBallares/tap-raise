import CustomButton from '@components/customButton';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {useAppDispatch, useAppSelector} from '@hooks/store';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {RootState} from '@store';
import {setConfig} from '@store/reducers/configReducer';
import {GST} from '@theme/globalStyles';
import {ROUTES} from '@utils/routes';
import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles';

type Props = StackScreenProps<MainStackParamList, ROUTES.ADVANCE_SETTINGS>;

const AdvancedSettings = ({navigation}: Props) => {
  const config = useAppSelector((state: RootState) => state.config);
  const {fundraiserId, stripeKey, stripeSecret} = config;
  const dispatch = useAppDispatch();

  const handleConfigChange = useCallback(
    (val: string, key: string) => {
      dispatch(
        setConfig({
          ...config,
          [key]: val,
        }),
      );
    },
    [config, dispatch],
  );

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
          <TextInput
            style={styles.inputField}
            value={fundraiserId}
            onChangeText={text => handleConfigChange(text, 'fundraiserId')}
          />
        </View>
        <View style={GST.MB4}>
          <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
            Stripe Key
          </CustomText>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            value={stripeKey}
            onChangeText={text => handleConfigChange(text, 'stripeKey')}
          />
        </View>
        <View style={GST.MB4}>
          <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
            Stripe Secret
          </CustomText>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            value={stripeSecret}
            onChangeText={text => handleConfigChange(text, 'stripeSecret')}
          />
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
