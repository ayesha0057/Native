import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Feather from 'react-native-vector-icons/Feather';
const NewShop = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView>
        <Text
          style={{
            color: '#092443',
            paddingHorizontal: 14,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 19,
            fontWeight: '600',
          }}>
          Name
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            placeholder="Enter you item name"
            placeholderTextColor="#8F92A1"
          />
        </View>
        <Text
          style={{
            color: '#092443',
            paddingHorizontal: 14,
            paddingTop: 30,
            paddingBottom: 15,
            fontSize: 19,
            fontWeight: '600',
          }}>
          Instructions
        </Text>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            placeholder="Type your special instructions"
          />
        </View>
        <Text
          style={{
            color: '#092443',
            paddingHorizontal: 14,
            paddingTop: 40,
            paddingBottom: 15,
            fontSize: 19,
            fontWeight: '600',
          }}>
          Quantity
        </Text>

        <View style={{flex: 1, flexDirection: 'row', marginLeft: 30}}>
          <TouchableOpacity style={{marginTop: 10}}>
            <Feather size={22} name="minus-circle" color="#8F92A1" />
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'lightgray',
              borderRadius: 13,
              width: 280,
              marginLeft: 20,
              backgroundColor: 'white',

              height: 50,
            }}>
            <TextInput
              style={styles.inputStyle}
              autoCorrect={false}
              placeholder="Enter a wish quantity"
              placeholderTextColor="#8F92A1"
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={{marginTop: 10, marginLeft: 20}}>
            <Feather size={22} name="plus-circle" color="#8F92A1" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#092443',
            paddingHorizontal: 14,
            paddingTop: 20,
            paddingBottom: 15,
            fontSize: 19,
            fontWeight: 'bold',
          }}>
          Select Delivery package Type
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View
            style={{
              height: 160,
              width: 170,
              borderRadius: 20,
              backgroundColor: 'white',
              elevation: 5,
              marginBottom: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../../assests/shopping-bag.png')} />
            <Text style={{color: '#8F92A1', fontSize: 17, fontWeight: '600'}}>
              Unit item{' '}
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 12}}>
              {' '}
              Lorem ipsum sir dolor amet
            </Text>
          </View>
          <View
            style={{
              height: 160,
              width: 170,
              borderRadius: 20,
              backgroundColor: '#0FBCF9',
              elevation: 5,
              marginBottom: 10,
            }}>
            <Feather
              name="check-circle"
              color="white"
              size={17}
              style={{alignSelf: 'flex-end', marginRight: 20, marginTop: 10}}
            />
            <Image
              source={require('../../assests/box.png')}
              style={{alignSelf: 'center', marginTop: 10}}
            />
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                fontSize: 17,
                fontWeight: '600',
              }}>
              Bundle Package
            </Text>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 12}}>
              {' '}
              Lorem ipsum sir dolor amet
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginLeft: 10,
              justifyContent: 'center',
              backgroundColor: '#0FBCF9',
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assests/shopping-cart.png')}
              style={{}}
            />
            <Text
              style={{
                textTransform: 'uppercase',
                color: 'white',
                fontSize: 19,
              }}>
              {' '}
              Add
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingHorizontal: 60,
              paddingVertical: 20,
              backgroundColor: '#0FBCF9',
              borderRadius: 10,
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                color: 'white',
                fontSize: 19,
              }}>
              {' '}
              checkout
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

    borderRadius: 13,
    width: 380,
    marginLeft: 15,
    marginBottom: -20,
    backgroundColor: 'white',
    height: 50,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 20,
  },
});

export default NewShop;
