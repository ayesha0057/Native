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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Login = ({navigation}) => {
  return (
    <>
      <KeyboardAwareScrollView
        style={{backgroundColor: 'white', display: 'flex'}}>
        <Text
          style={{
            color: 'gray',
            paddingHorizontal: 14,
            paddingTop: 40,
            paddingBottom: 10,
            fontSize: 19,
          }}>
          Username or E-mail
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
          />
          <FontAwesome
            name="eye-slash"
            style={{
              color: 'lightgray',
              fontSize: 35,
              alignSelf: 'center',
              paddingRight: 10,
            }}
          />
        </View>
        <View style={{marginTop: 270}}>
          <Text
            style={{color: 'gray', alignSelf: 'center', paddingBottom: 30}}
            onPress={() => navigation.navigate('RecoveryPassword')}>
            Forgot the Password?
          </Text>
          <TouchableOpacity
            style={{
              width: 380,
              height: 60,
              backgroundColor: '#17bcf9',
              borderRadius: 9,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                alignSelf: 'center',
                paddingTop: 10,
                textTransform: 'uppercase',
              }}>
              {' '}
              Login{' '}
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
    marginBottom: -20,
    height: 50,
  },
  inputStyle: {
    flex: 1,
  },
});

export default Login;
