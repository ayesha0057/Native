import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
const OrderConfirmation = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f6f5f5'}}>
      <View style={{alignSelf: 'center'}}>
        <Image source={require('../../assests/success.png')} />
      </View>

      <View style={{marginHorizontal: 20}}>
        <Text style={{color: '#3E4462', fontSize: 24, alignSelf: 'center'}}>
          Your order is confirmed!
        </Text>
        <Text
          style={{
            color: '#7E7E7E',
            fontSize: 12,
            paddingHorizontal: 70,
            textAlign: 'center',
            paddingVertical: 10,
          }}>
          we'll deliver your order immediately, make sure your order put on the
          doorstep
        </Text>
      </View>

      <View style={{marginTop: 80}}>
        <TouchableOpacity
          style={{
            width: 380,
            height: 60,
            backgroundColor: '#17bcf9',
            borderRadius: 9,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingTop: 15,
              textTransform: 'uppercase',
              alignSelf: 'center',
            }}>
            check order status
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderConfirmation;
