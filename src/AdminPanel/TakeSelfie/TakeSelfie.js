import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const TakeSelfie = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        resizeMode="contain"
        style={{width: '90%', height: '75%', marginLeft: 40, marginTop: 5}}
        source={require('../../../assests/block.png')}>
        <Image
          style={{marginTop: 20, width: 400, height: 300, marginLeft: -35}}
          source={require('../../../assests/pic.png')}
          resizeMode="contain"
        />
        <Image
          source={require('../../../assests/check.png')}
          style={{marginTop: -45, marginLeft: 120}}
        />
      </ImageBackground>

      <TouchableOpacity
        style={{
          height: 80,
          width: 320,
          backgroundColor: '#fff',
          borderRadius: 12,
          elevation: 15,
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: -75,
        }}
        onPress={() => navigation.navigate('SelfieCam')}>
        <Image
          source={require('../../../assests/round.png')}
          style={{marginLeft: 20, marginTop: 30}}
        />
        <Image
          source={require('../../../assests/walking.png')}
          style={{marginLeft: 10, marginTop: 30}}
        />
        <Text
          style={{
            color: '#8F92A1',
            paddingLeft: 10,
            paddingTop: 30,
            fontSize: 16,
          }}>
          Add Insurance
        </Text>

        <Image
          style={{marginTop: 30, marginLeft: 110}}
          source={require('../../../assests/up.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 380,
          height: 60,
          backgroundColor: '#17bcf9',
          borderRadius: 9,
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('ConfirmScreen')}>
        <Text
          style={{
            color: 'white',
            fontSize: 23,
            alignSelf: 'center',
            textTransform: 'uppercase',
          }}>
          Next
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}}>
        <Text style={{color: '#8F92A1', textDecorationLine: 'underline'}}>
          {' '}
          Download & Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakeSelfie;
