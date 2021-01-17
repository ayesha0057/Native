import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const AdminLogin = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView
        style={{backgroundColor: 'white', display: 'flex'}}>
        <Text
          style={{
            color: '#8F92A1',

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
              fontSize: 30,
              alignSelf: 'center',
              paddingRight: 10,
            }}
          />
        </View>
        <Text
          style={{
            color: '#8F92A1',
            paddingHorizontal: 14,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 19,
          }}>
          Password
        </Text>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'lightgray',
            paddingBottom: 10,
            borderRadius: 9,
            width: 380,
            marginLeft: 15,
            marginBottom: -20,
            height: 50,
          }}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
          />
          <FontAwesome
            name="eye-slash"
            style={{
              color: 'lightgray',
              fontSize: 27,
              alignSelf: 'center',
              paddingRight: 10,
              paddingTop: 10,
            }}
          />
        </View>
        <View style={{marginTop: 270}}>
          <Text
            style={{color: '#A0A0A0', alignSelf: 'center', paddingBottom: 30}}
            onPress={() => navigation.navigate('DriverVerification')}>
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
    </View>
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
export default AdminLogin;
