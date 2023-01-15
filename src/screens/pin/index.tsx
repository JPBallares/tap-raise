import Wrapper from '@components/wrapper';
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Pin = () => {
  const [pin, setPin] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]).current;

  const handleChange = (text, index) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);
    if (text && index < 4) {
      inputRefs[index + 1].focus();
    }
  };

  return (
    <Wrapper containerStyle={styles.container}>
      {pin.map((digit, index) => (
        <View key={index} style={styles.inputBox}>
          <TextInput
            ref={input => {
              inputRefs[index] = input;
            }}
            style={styles.input}
            keyboardType="number-pad"
            value={digit}
            onChangeText={text => handleChange(text, index)}
            placeholder="*"
            maxLength={1}
            secureTextEntry
          />
        </View>
      ))}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    width: '100%',
    textAlign: 'center',
  },
});

export default Pin;
