import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ContactSupport = () => {
  return (
    <View style={{backgroundColor: '#f7f7f7', flex: 1}}>
      <View style={{marginTop: 30}}>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../../assests/contat.png')}
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
        Name
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
            color: '#D6D8DE',
            fontSize: 2,
            alignSelf: 'center',
            paddingRight: 10,
            paddingTop: 5,
          }}
        />
      </View>
      <Text
        style={{
          color: '#8F92A1',
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
            color: '#D6D8DE',
            fontSize: 30,
            alignSelf: 'center',
            paddingRight: 10,
            paddingTop: 5,
          }}
        />
      </View>
      <Text
        style={{
          color: '#8F92A1',
          paddingHorizontal: 19,
          paddingTop: 40,
          paddingBottom: 10,
          fontSize: 19,
        }}>
        Message
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
            color: '#D6D8DE',
            fontSize: 30,
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
            marginTop: 55,
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
            send sms{' '}
          </Text>
        </TouchableOpacity>
      </View>
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
    height: 42,
    backgroundColor: '#fff',
  },
  inputStyle: {
    flex: 1,
  },
});
export default ContactSupport;
