import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const TurnOnButton = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'flex-end',
            height: 590,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2bd37d',
              height: 80,
              width: 80,
              borderRadius: 60,
              marginTop: 30,
              alignSelf: 'center',
            }}>
            <Icon
              name="md-power-outline"
              size={28}
              style={{alignSelf: 'center', paddingTop: 25, color: 'white'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              paddingTop: 22,
              color: '#092443',
              fontSize: 17,
              letterSpacing: -0.7,
            }}>
            {' '}
            Start Taking Orders
          </Text>
        </View>
      </View>
    </>
  );
};

export default TurnOnButton;
