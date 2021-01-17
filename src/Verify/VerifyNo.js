import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Item, Label} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
const VerifyNo = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAwareScrollView>
        <Text
          style={{color: 'darkgray', alignSelf: 'center', paddingVertical: 40}}>
          {' '}
          SMS sent to +420 14333 29884{' '}
        </Text>
        <Label
          style={{
            fontWeight: '700',
            fontSize: 20,
            color: '#2B3B4B',
            alignSelf: 'center',
          }}>
          {' '}
          Enter Your Confirmation Code{' '}
        </Label>
        <View
          style={{
            alignSelf: 'center',
            marginVertical: 25,
            flexDirection: 'row',
          }}>
          <TextInput style={styles.inputField} keyboardType="number-pad">
            {' '}
          </TextInput>
          <TextInput style={styles.inputField} keyboardType="number-pad">
            {' '}
          </TextInput>
          <TextInput style={styles.inputField} keyboardType="number-pad">
            {' '}
          </TextInput>
          <TextInput
            style={styles.inputField}
            maxLength={1}
            keyboardType="number-pad">
            {' '}
          </TextInput>
        </View>
        <Text
          style={{color: 'darkgray', alignSelf: 'center', paddingVertical: 40}}>
          {' '}
          Resend Code ( in 29 seconds){' '}
        </Text>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  inputField: {
    height: 75,
    width: 75,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
export default VerifyNo;
