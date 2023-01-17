import CustomButton from '@components/customButton';
import CustomText from '@components/customText';
import Wrapper from '@components/wrapper';
import {MainStackParamList} from '@interfaces/navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {COLORS} from '@theme/colors';
import {GST} from '@theme/globalStyles';
import {RF} from '@theme/responsive';
import {PIN_LENGTH} from '@utils/constants';
import {splitString} from '@utils/helpers';
import {ROUTES} from '@utils/routes';
import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = StackScreenProps<MainStackParamList, ROUTES.PIN>;

const Pin = ({navigation}: Props) => {
  const [pin, setPin] = useState<string>('');

  const pinDigits = useMemo(() => {
    return splitString(pin, PIN_LENGTH);
  }, [pin]);

  const handlePress = useCallback(
    (num: string) => {
      if (pin.length < PIN_LENGTH) {
        setPin(pin + num);
      }
    },
    [pin],
  );
  const handleDelete = useCallback(() => {
    if (pin.length) {
      setPin(pin.slice(0, -1));
    }
  }, [pin]);

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const buttons = useMemo(() => {
    const allButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
      <CustomButton
        key={num}
        onPress={() => handlePress(num.toString())}
        containerStyle={styles.pinButton}
        text={num.toString()}
      />
    ));
    allButtons.push(
      <CustomButton
        onPress={() => handleDelete()}
        containerStyle={styles.pinButton}
        key="delete"
        text="Delete"
      />,
    );
    allButtons.push(
      <CustomButton
        onPress={() => handleCancel()}
        containerStyle={styles.pinButton}
        key="cancel"
        text="Cancel"
      />,
    );
    return allButtons;
  }, [handleCancel, handleDelete, handlePress]);

  return (
    <Wrapper>
      <View style={styles.inputBoxContainer}>
        {pinDigits.map((digit, index) => (
          <View key={index} style={styles.inputBox}>
            <CustomText size="2XL" style={GST.BOLD}>
              {digit ? '*' : ''}
            </CustomText>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>{buttons.slice(0, 3)}</View>
        <View style={styles.buttonRow}>{buttons.slice(3, 6)}</View>
        <View style={styles.buttonRow}>{buttons.slice(6, 9)}</View>
        <View style={styles.buttonRow}>{buttons.slice(9, 12)}</View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  inputBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    ...GST.M1,
    ...GST.SHADOW,
    width: RF(50),
    height: RF(50),
    borderRadius: RF(4),
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: RF(10),
    justifyContent: 'flex-end',
  },
  buttonRow: {
    ...GST.M1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pinButton: {
    ...GST.M1,
    alignItems: 'center',
    justifyContent: 'center',
    height: RF(90),
    width: RF(90),
    padding: 0,
  },
});

export default Pin;
