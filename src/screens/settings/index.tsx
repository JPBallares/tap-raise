import CustomButton from '@components/customButton';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {useAppDispatch, useAppSelector} from '@hooks/store';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {RootState} from '@store';
import {setAmount, setConfig} from '@store/slices/configSlice';
import {GST} from '@theme/globalStyles';
import {ADVANCED_PIN} from '@utils/constants';
import {ROUTES} from '@utils/routes';
import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles';

type Props = StackScreenProps<MainStackParamList, ROUTES.SETTINGS>;

const Settings = ({navigation}: Props) => {
  const config = useAppSelector((state: RootState) => state.config);
  const {logoUrl, backgroundColor, foregroundColor, donationText, amounts} =
    config;

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

  const handleAmountChange = useCallback(
    (val: string, index: number) => {
      const amount = Number(val) || 0;
      dispatch(
        setAmount({
          amount,
          index,
        }),
      );
    },
    [dispatch],
  );

  const handleBack = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: ROUTES.MAIN}],
    });
  }, [navigation]);

  return (
    <Wrapper containerStyle={GST.P4}>
      <View style={GST.MB4}>
        <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
          Link to Team Logo
        </CustomText>
        <TextInput
          style={styles.inputField}
          value={logoUrl}
          onChangeText={text => handleConfigChange(text, 'logoUrl')}
          autoCapitalize="none"
          keyboardType="url"
        />
      </View>
      <View style={GST.MB4}>
        <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
          Colors
        </CustomText>
        <View style={GST.FLEX_ROW}>
          <TextInput
            placeholder="Background"
            style={[GST.FLEX, GST.MR4, styles.inputField]}
            value={backgroundColor}
            onChangeText={text => handleConfigChange(text, 'backgroundColor')}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Text"
            style={[GST.FLEX, styles.inputField]}
            value={foregroundColor}
            onChangeText={text => handleConfigChange(text, 'foregroundColor')}
          />
        </View>
      </View>
      <View style={GST.MB4}>
        <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
          Donation Text [ Max 80 Chars]
        </CustomText>
        <TextInput
          multiline
          numberOfLines={4}
          style={styles.textAreaField}
          value={donationText}
          onChangeText={text => handleConfigChange(text, 'donationText')}
        />
      </View>
      <View style={GST.MB4}>
        <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
          Amounts
        </CustomText>
        <View style={[GST.FLEX_ROW, GST.MB4]}>
          <TextInput
            style={[GST.FLEX, GST.MR4, styles.inputField]}
            keyboardType={'numeric'}
            value={amounts[0].toString()}
            onChangeText={text => handleAmountChange(text, 0)}
          />
          <TextInput
            style={[GST.FLEX, styles.inputField]}
            keyboardType={'numeric'}
            value={amounts[1].toString()}
            onChangeText={text => handleAmountChange(text, 1)}
          />
        </View>
        <View style={[GST.FLEX_ROW, GST.MB4]}>
          <TextInput
            style={[GST.FLEX, GST.MR4, styles.inputField]}
            keyboardType={'numeric'}
            value={amounts[2].toString()}
            onChangeText={text => handleAmountChange(text, 2)}
          />
          <TextInput
            style={[GST.FLEX, styles.inputField]}
            keyboardType={'numeric'}
            value={amounts[3].toString()}
            onChangeText={text => handleAmountChange(text, 3)}
          />
        </View>
        <View style={GST.MB4}>
          <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
            Reader Name
          </CustomText>
          <TextInput style={styles.inputField} />
        </View>
      </View>
      <View style={[GST.FLEX_ROW, GST.MB4]}>
        <CustomButton
          containerStyle={{...GST.FLEX, ...GST.MR4, ...styles.advancedButton}}
          textStyle={{...styles.advancedButtonText}}
          text="Advanced"
          onPress={() =>
            navigation.navigate(ROUTES.PIN, {
              storedPin: ADVANCED_PIN,
              nextScreen: ROUTES.ADVANCE_SETTINGS,
            })
          }
        />
        <CustomButton
          containerStyle={{...GST.FLEX, ...styles.backButton}}
          textStyle={{...styles.backButtonText}}
          text="Back"
          onPress={handleBack}
        />
      </View>
    </Wrapper>
  );
};

export default Settings;
