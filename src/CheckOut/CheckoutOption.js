import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
const CheckoutOption = () => {
  return (
    <View style={{backgroundColor: '#f6f5f5', flex: 1}}>
      <View style={{marginTop: 40}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              flex: 3,
              color: '#092443',
              fontSize: 22,
              fontWeight: '700',
              marginLeft: 10,
            }}>
            {' '}
            Payment method
          </Text>
          <TouchableOpacity style={{flex: 1, marginLeft: 40, marginTop: 5}}>
            <Text
              style={{
                color: '#0FBCF9',
                fontSize: 17,
                fontWeight: '600',
                textTransform: 'uppercase',
              }}>
              {' '}
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Image
            style={{marginLeft: 20}}
            source={require('../../assests/Shape.png')}
          />
          <Text
            style={{
              color: '#8F92A1',
              fontSize: 16,
              marginLeft: 20,
              marginTop: -4,
            }}>
            {' '}
            **** **** **** 4747
          </Text>
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              flex: 3,
              color: '#092443',
              fontSize: 22,
              fontWeight: '700',
              marginLeft: 15,
            }}>
            Delivery Address
          </Text>
          <TouchableOpacity style={{flex: 1, marginLeft: 40, marginTop: 5}}>
            <Text
              style={{
                color: '#0FBCF9',
                fontSize: 17,
                fontWeight: '600',
                textTransform: 'uppercase',
              }}>
              {' '}
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Image
            style={{marginLeft: 20}}
            source={require('../../assests/house.png')}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: '#8F92A1',
                fontSize: 16,
                marginLeft: 20,
                marginTop: -4,
              }}>
              Joana Jackson
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 16, marginLeft: 20}}>
              Avenida 31 Km 25, st. Summer City
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 16, marginLeft: 20}}>
              Costa do Sol
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 16, marginLeft: 20}}>
              Paradise
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 380,
          height: 50,
          backgroundColor: '#17bcf9',
          borderRadius: 9,
          alignSelf: 'center',
          marginTop: 250,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'center',
            paddingTop: 10,
            textTransform: 'uppercase',
          }}>
          processed for payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutOption;
