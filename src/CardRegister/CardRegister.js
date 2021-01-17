import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const CardRegister = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <KeyboardAwareScrollView>
        <ImageBackground
          source={require('../../assests/card.png')}
          style={{width: 370, height: 200, alignSelf: 'center'}}
          imageStyle={{borderRadius: 20}}>
          <View style={{marginTop: 30, marginLeft: 30}}>
            <Image source={require('../../assests/mc.png')} />
            <Text style={{color: '#fff', fontSize: 18}}> Platinum</Text>
          </View>
          <View style={{marginTop: 50, marginLeft: 39}}>
            <Text style={{color: '#fff', fontSize: 18}}> • • • • 0212 </Text>
          </View>
        </ImageBackground>
        <Text
          style={{
            color: '#8F92A1',
            paddingHorizontal: 25,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 18,
          }}>
          Name on card
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
            paddingHorizontal: 25,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 18,
          }}>
          Card number
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View>
            <Text
              style={{
                color: '#8F92A1',
                paddingHorizontal: 5,
                paddingTop: 40,
                paddingBottom: 15,
                fontSize: 18,
              }}>
              Expiry date
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: 'lightgray',
                paddingBottom: 10,
                borderRadius: 13,
                width: 170,
                marginBottom: -20,
                backgroundColor: 'white',
                height: 45,
              }}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#8F92A1',
                paddingHorizontal: 5,
                paddingTop: 40,
                paddingBottom: 15,
                fontSize: 18,
              }}>
              CVC
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: 'lightgray',
                paddingBottom: 10,
                borderRadius: 13,
                width: 170,
                marginBottom: -20,
                backgroundColor: 'white',
                height: 45,
              }}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry
              />
              <SimpleLineIcons
                size={24}
                style={{alignSelf: 'flex-end', marginRight: 10, marginTop: -15}}
                name="credit-card"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 380,
            height: 55,
            backgroundColor: '#17bcf9',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              alignSelf: 'center',

              textTransform: 'uppercase',
            }}>
            {' '}
            Save changes
          </Text>
        </TouchableOpacity>
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
    width: 370,
    alignSelf: 'center',
    marginBottom: -30,
    backgroundColor: 'white',
    height: 45,
  },
  inputStyle: {
    flex: 1,
  },
});
export default CardRegister;
