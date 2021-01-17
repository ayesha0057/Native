import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Main = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={require('../../assests/main.png')}
          resizeMode="contain"
          style={{
            height: 290,
            marginTop: -70,
            width: 600,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              color: '#fff',
              fontWeight: '700',
              alignSelf: 'center',
            }}>
            App Logo
          </Text>
        </ImageBackground>

        <Image
          source={require('../../assests/Oval.png')}
          style={styles.imageTwo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.sliderContainer}>
        <Swiper autoplay style={{height: 100}} dotStyle={{width: 15}}>
          <View style={styles.slide}>
            <Text style={styles.sliderImage}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.sliderImage}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.sliderImage}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </Text>
          </View>
        </Swiper>
      </View>
      <TouchableOpacity
        style={[styles.buttonStyle1, styles.buttonStyle]}
        onPress={() => navigation.navigate('Login')}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon
            name="envelope"
            style={{
              marginTop: 12,

              color: 'white',
              fontSize: 35,
            }}
          />

          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
              paddingLeft: 20,
              marginTop: 10,
            }}>
            Login with E -mail
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonStyle2, styles.buttonStyle]}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <FontAwesome
            name="facebook"
            style={{
              marginTop: 12,
              color: 'white',
              fontSize: 35,
            }}
          />

          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
              paddingLeft: 25,
              marginTop: 10,
            }}>
            Login with E -mail
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonStyle3, styles.buttonStyle]}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{alignSelf: 'center', marginTop: 10}}
            source={require('../../assests/google.png')}
          />

          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '500',
              paddingLeft: 25,
              marginTop: 10,
            }}>
            Login with E - mail
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 20, color: '#cacbd5'}}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{color: 'grey'}}>Don't have any account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    height: 190,
    width: '100%',
  },
  body: {
    backgroundColor: 'white',
  },
  imageTwo: {
    marginLeft: 300,
    marginTop: -220,
  },
  sliderContainer: {
    height: 120,
    width: '90%',
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 9,
    color: '#8F92A1',
    textAlign: 'center',
  },
  buttonStyle: {
    width: 320,
    height: 55,
    borderRadius: 8,
    alignSelf: 'center',
    elevation: 9,
  },
  buttonStyle1: {
    backgroundColor: '#17bcf9',
  },
  buttonStyle2: {
    backgroundColor: '#3f63ad',
    marginTop: 20,
  },
  buttonStyle3: {
    backgroundColor: 'white',
    elevation: 9,
    marginTop: 20,
  },
});
export default Main;
