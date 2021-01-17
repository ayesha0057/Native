import React from 'react';
import {View, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const OrderDetails = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f7f6f6'}}>
      <View
        style={{
          height: 185,
          width: 350,
          backgroundColor: '#0FBCF9',
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            height: 550,
            width: 370,
            backgroundColor: '#1c36b9',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 75,
              fontWeight: '700',
              paddingLeft: 5,
              paddingTop: 15,
            }}>
            {' '}
            237
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 18,
              paddingLeft: 22,
              marginTop: -15,
              paddingBottom: 10,
            }}>
            {' '}
            New Orders this Month
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingVertical: 10,
              marginLeft: -10,
            }}>
            <Text
              style={{
                height: 5,
                width: 150,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              {' '}
            </Text>
            <Text
              style={{
                height: 5,
                width: 150,
                backgroundColor: '#fff',
                opacity: 0.5,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              {' '}
            </Text>
          </View>
          <Text style={{color: '#F6F5F5', fontSize: 15, paddingLeft: 25}}>
            {' '}
            132 Activities this Month
          </Text>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{justifyContent: 'space-evenly', marginLeft: 10}}>
              <Text style={{color: '#D6D8DE', fontSize: 11}}>$40k</Text>
              <Text style={{color: '#D6D8DE', fontSize: 11}}>$30k</Text>
              <Text style={{color: '#D6D8DE', fontSize: 11}}>$20k </Text>
              <Text style={{color: '#D6D8DE', fontSize: 11}}>$10k </Text>
              <Text style={{color: '#D6D8DE', marginLeft: 20, fontSize: 11}}>
                {' '}
                0
              </Text>
            </View>
            <View style={{marginLeft: 20}}>
              <Image source={require('../../../assests/chart-slide.png')} />
            </View>
          </View>

          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text style={{color: '#fff', paddingLeft: 10}}>Total Revenue </Text>
            <Text style={{color: '#fff', fontSize: 35, fontWeight: '700'}}>
              {' '}
              $76685.41
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <AntDesign
                name="arrowup"
                color="#148ae1"
                size={14}
                style={{paddingTop: 3, marginRight: 5}}
              />
              <Text style={{color: '#148ae1', fontSize: 14}}>7,00%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;
