import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
const DeclineReport = () => {
  return (
    <View style={{backgroundColor: '#f7f6f6', flex: 1}}>
      <KeyboardAwareScrollView>
        <View style={{alignSelf: 'center', marginTop: 70}}>
          <Image source={require('../../../assests/Mainpic.png')} />
        </View>
        <Text
          style={{
            color: '#8F92A1',
            paddingHorizontal: 14,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 18,
          }}>
          Reason
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
          />
        </View>
        <Text
          style={{
            color: '#8F92A1',
            paddingHorizontal: 14,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 18,
          }}>
          Description
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
          />
        </View>
        <Text
          style={{
            color: '#8F92A1',
            paddingHorizontal: 14,
            paddingTop: 30,
            paddingBottom: 15,
            fontSize: 18,
          }}>
          Rating Your Decline
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: 300,
            alignSelf: 'center',
          }}>
          <FontAwesome
            name="star"
            style={{
              color: '#CC0A16',
              fontSize: 24,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
          <FontAwesome
            name="star"
            style={{
              color: '#CC0A16',
              fontSize: 24,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
          <FontAwesome
            name="star"
            style={{
              color: '#D6D8DE',
              fontSize: 24,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
          <FontAwesome
            name="star"
            style={{
              color: '#D6D8DE',
              fontSize: 24,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
          <FontAwesome
            name="star"
            style={{
              color: '#D6D8DE',
              fontSize: 24,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 380,
              height: 50,
              marginTop: 22,
              backgroundColor: '#17bcf9',
              borderRadius: 9,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                alignSelf: 'center',
                paddingTop: 10,
                textTransform: 'uppercase',
              }}>
              {' '}
              Submit{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 10,
    borderRadius: 13,
    width: 380,
    marginLeft: 15,
    marginBottom: -20,
    backgroundColor: 'white',
    height: 50,
  },
  inputStyle: {
    flex: 1,
  },
});
export default DeclineReport;
