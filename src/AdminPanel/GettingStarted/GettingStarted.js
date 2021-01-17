import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GettingStarted = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={require('../../../assests/main.png')}
          resizeMode="contain"
          style={{
            height: 290,
            marginTop: -30,
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
          source={require('../../../assests/Oval.png')}
          style={styles.imageTwo}
          resizeMode="contain"
        />
      </View>

      <View style={{marginTop: 70, alignSelf: 'center', flexDirection: 'row'}}>
        <View
          style={{
            width: 14,
            height: 7,
            backgroundColor: '#e9e9ec',
            borderRadius: 4,
          }}></View>
        <View
          style={{
            width: 20,
            height: 7,
            backgroundColor: '#0FBCF9',
            borderRadius: 4,
            marginHorizontal: 5,
          }}></View>
        <View
          style={{
            width: 14,
            height: 7,
            backgroundColor: '#e9e9ec',
            borderRadius: 4,
          }}></View>
      </View>
      <View style={{marginTop: 40, alignSelf: 'center'}}>
        <Text style={{color: '#171717', fontSize: 25, fontWeight: '600'}}>
          {' '}
          Welcome to Admin Section
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            color: '#8F92A1',
            textAlign: 'center',
            paddingHorizontal: 60,
            paddingVertical: 20,
            fontSize: 16,
          }}>
          consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 380,
          height: 60,
          backgroundColor: '#17bcf9',
          borderRadius: 9,
          alignSelf: 'center',
          marginTop: 30,
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        onPress={() => navigation.navigate('AdminLogin')}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'center',
            textTransform: 'uppercase',
          }}>
          let’s get started
        </Text>
        <AntDesign
          style={{
            color: 'white',
            alignSelf: 'center',
            marginTop: 5,
            marginLeft: 20,
          }}
          name="arrowright"
          size={21}
        />
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
export default GettingStarted;
