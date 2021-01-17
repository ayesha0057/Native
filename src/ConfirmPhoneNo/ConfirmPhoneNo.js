import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Item, Label} from 'native-base';
const ConfirmPhoneNo = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Label
        style={{
          fontWeight: '700',
          marginTop: 50,
          marginHorizontal: 20,
          color: '#2B3B4B',
        }}>
        country
      </Label>
      <DropDownPicker
        items={[
          {label: 'USA', value: 'usa', hidden: true},
          {label: 'UK', value: 'uk', selected: true},
          {label: 'France', value: 'france'},
          {label: 'Germany', value: 'Germany'},
        ]}
        searchable={true}
        containerStyle={{
          height: 40,
          width: 380,
          marginTop: 20,
          alignSelf: 'center',
        }}
        style={{
          backgroundColor: 'white',
          borderTopColor: 'white',
          borderLeftColor: 'white',
        }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: 'white', color: 'gray'}}
      />
      <Label
        style={{
          fontWeight: '700',
          marginTop: 50,
          marginHorizontal: 20,
          color: '2B3B4B',
          marginBottom: 5,
        }}>
        mobile number
      </Label>

      <View style={styles.loginContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          keyboardType="number-pad"
        />
      </View>

      <Text
        style={{
          color: '#A0A0A0',
          marginTop: 210,
          alignSelf: 'center',
          borderBottomColor: 'white',
        }}>
        {' '}
        We'll send you an SMS verification code.
      </Text>
      <TouchableOpacity
        style={{
          width: 380,
          height: 60,
          backgroundColor: '#17bcf9',
          borderRadius: 9,
          alignSelf: 'center',
          marginTop: 30,
        }}
        onPress={() => navigation.navigate('VerifyNo')}>
        <Text
          style={{
            color: 'white',
            fontSize: 23,
            alignSelf: 'center',
            paddingTop: 12,
            textTransform: 'uppercase',
          }}>
          {' '}
          Send SMS
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    borderRadius: 9,
    width: 380,
    marginLeft: 15,
    marginBottom: 20,
    height: 42,
  },
  inputStyle: {
    flex: 1,
  },
});

export default ConfirmPhoneNo;
