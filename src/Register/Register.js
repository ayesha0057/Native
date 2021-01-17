import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
const Register = () => {
  return (
    <>
      <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
        <Text
          style={{
            color: 'gray',
            paddingHorizontal: 14,
            paddingTop: 20,
            paddingBottom: 7,
            fontSize: 19,
          }}>
          Full Name
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
          />
          <Ionicons
            name="person-outline"
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
          Username
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
          />
          <Ionicons
            name="person-outline"
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
            paddingHorizontal: 19,
            paddingTop: 40,
            paddingBottom: 10,
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

        <View>
          <TouchableOpacity
            style={{
              width: 380,
              height: 50,
              marginTop: 60,
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
    height: 42,
  },
  inputStyle: {
    flex: 1,
  },
});

export default Register;
