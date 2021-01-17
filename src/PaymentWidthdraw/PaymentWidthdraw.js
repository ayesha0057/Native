import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const PaymentWidthdraw = () => {
  return (
    <View style={{backgroundColor: '#f7f6f6', flex: 1}}>
      <View style={{alignSelf: 'center', flexDirection: 'row', marginTop: 100}}>
        <Text style={{fontSize: 35, fontWeight: '700', color: '#D6D8DE'}}>
          {' '}
          $
        </Text>
        <Text style={{fontSize: 35, fontWeight: '700', color: '#092443'}}>
          {' '}
          4.537
        </Text>
      </View>
      <View style={{alignSelf: 'center', marginTop: 40, flexDirection: 'row'}}>
        <Text style={{color: '#8F92A1', fontSize: 17}}> Withdraw to:</Text>
        <Text
          style={{
            color: '#8F92A1',
            fontSize: 17,
            textDecorationLine: 'underline',
          }}>
          {' '}
          Bank Investiment Modal
        </Text>
      </View>
      <View style={{alignSelf: 'center', marginTop: 20}}>
        <Text style={{color: '#8F92A1', fontSize: 17}}> Account: xx053</Text>
      </View>
      <TouchableOpacity style={{alignSelf: 'center', marginTop: 15}}>
        <Text
          style={{color: '#0FBCF9', textTransform: 'uppercase', fontSize: 17}}>
          {' '}
          Change Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 380,
          height: 55,
          backgroundColor: '#17bcf9',
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 240,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'center',

            textTransform: 'uppercase',
          }}>
          confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentWidthdraw;
