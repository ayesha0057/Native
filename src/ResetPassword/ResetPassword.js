import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Icon from 'react-native-vector-icons/EvilIcons';
const ResetPassword = ({navigation}) => {
  return (
    <>
      <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
        <Text
          style={{
            color: 'gray',
            paddingHorizontal: 14,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 19,
          }}>
          Password
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
            keyboardType = 'number-pad'
          />
          <FontAwesome
            name="eye-slash"
            style={{
              color: 'lightgray',
              fontSize: 25,
              alignSelf: 'center',
              paddingRight: 10,
              paddingTop: 5,
            }}
          />
        </View>
        <Text
          style={{
            color: 'gray',
            paddingHorizontal: 14,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 19,
          }}>
          Confirm Password
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
            keyboardType = 'number-pad'
          />
          <FontAwesome
            name="eye-slash"
            style={{
              color: 'lightgray',
              fontSize: 25,
              alignSelf: 'center',
              paddingRight: 10,
              paddingTop: 5,
            }}
          />
        </View>
        <View style={{marginTop: 330}}>
          <TouchableOpacity
            style={{
              width: 380,
              height: 60,
              backgroundColor: '#17bcf9',
              borderRadius: 9,
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('ConfirmPhoneNo')}>
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                alignSelf: 'center',
                paddingTop: 12,
                textTransform: 'uppercase',
              }}>
              {' '}
              Reset{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 9,
    width: 380,
    marginLeft: 15,
    marginBottom: -20,
    height: 42,
  },
  inputStyle: {
    flex: 1,
  },
});

export default ResetPassword;
