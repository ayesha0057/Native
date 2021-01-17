import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
const RecoveryPassword = ({navigation}) => {
  return (
    <>
      <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
        <Text
          style={{
            color: 'gray',
            alignSelf: 'center',
            paddingHorizontal: 27,
            paddingTop: 30,
            fontSize: 15,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </Text>
        <Text
          style={{
            color: 'gray',
            paddingHorizontal: 14,
            paddingTop: 70,

            fontSize: 19,
          }}>
          E-mail
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
          />
          <Icon
            name="envelope"
            style={{
              color: 'lightgray',
              fontSize: 35,
              alignSelf: 'center',
              paddingRight: 10,
            }}
          />
        </View>
        <View style={{marginTop: 300}}>
          <TouchableOpacity
            style={{
              width: 380,
              height: 60,
              backgroundColor: '#17bcf9',
              borderRadius: 9,
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                alignSelf: 'center',
                paddingTop: 12,
                textTransform: 'uppercase',
              }}>
              {' '}
              Send SMS{' '}
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
    paddingBottom: 10,
    borderRadius: 9,
    width: 380,
    marginLeft: 15,
    marginTop: 20,
    height: 50,
  },
  inputStyle: {
    flex: 1,
  },
});
export default RecoveryPassword;
