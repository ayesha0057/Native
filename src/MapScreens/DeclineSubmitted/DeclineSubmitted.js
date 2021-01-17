import React from 'react';
import {View, Image, Text} from 'react-native';
const DeclineSubmitted = () => {
  return (
    <View style={{backgroundColor: '#f6f6f6', flex: 1}}>
      <View style={{alignSelf: 'center', marginVertical: 40}}>
        <Image source={require('../../../assests/Deliveryboy.png')} />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#3E4462',
            fontSize: 23,
            fontWeight: '500',
          }}>
          {' '}
          Thank you !
        </Text>
        <Text style={{color: '#7E7E7E'}}> You reporte will help us to</Text>
      </View>
    </View>
  );
};

export default DeclineSubmitted;
