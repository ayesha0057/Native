import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
const ConfirmScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        style={{alignSelf: 'center', marginTop: 30}}
        source={require('../../../assests/draw.png')}
      />
      <View style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 45, paddingTop: 20, fontWeight: '700'}}>
          {' '}
          Thank you!
        </Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            color: '#8F92A1',
            textAlign: 'center',
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit{' '}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 380,
          height: 60,
          backgroundColor: '#17bcf9',
          borderRadius: 9,
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'center',
        }}>
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
          Add more info to your Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmScreen;
