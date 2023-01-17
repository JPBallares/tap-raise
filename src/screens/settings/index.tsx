import CustomButton from '@components/customButton';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {GST} from '@theme/globalStyles';
import {ADVANCED_PIN} from '@utils/constants';
import {ROUTES} from '@utils/routes';
import React, {useCallback} from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles';

type Props = StackScreenProps<MainStackParamList, ROUTES.SETTINGS>;

const Settings = ({navigation}: Props) => {
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
        <TextInput style={styles.inputField} />
      </View>
      <View style={GST.MB4}>
        <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
          Colors
        </CustomText>
        <View style={GST.FLEX_ROW}>
          <TextInput style={[GST.FLEX, GST.MR4, styles.inputField]} />
          <TextInput style={[GST.FLEX, styles.inputField]} />
        </View>
      </View>
      <View style={GST.MB4}>
        <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
          Donation Text [ Max 80 Chars]
        </CustomText>
        <TextInput multiline numberOfLines={4} style={styles.textAreaField} />
      </View>
      <View style={GST.MB4}>
        <CustomText size="2XL" style={{...GST.BOLD, ...GST.MB4}}>
          Amounts
        </CustomText>
        <View style={[GST.FLEX_ROW, GST.MB4]}>
          <TextInput style={[GST.FLEX, GST.MR4, styles.inputField]} />
          <TextInput style={[GST.FLEX, styles.inputField]} />
        </View>
        <View style={[GST.FLEX_ROW, GST.MB4]}>
          <TextInput style={[GST.FLEX, GST.MR4, styles.inputField]} />
          <TextInput style={[GST.FLEX, styles.inputField]} />
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
