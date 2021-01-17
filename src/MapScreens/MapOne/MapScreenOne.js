import {View, Image, Text} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const MapScreenOne = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{height: 630, justifyContent: 'flex-end'}}>
        <View
          style={{
            height: 130,
            width: 380,
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical: 10,
            justifyContent: 'flex-end',
          }}>
          <Image
            style={{
              height: 130,
              width: 160,
              marginRight: 10,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
            }}
            source={require('../../../assests/Rectangle2.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Gustavo Hair Salon
            </Text>
            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
              <Text style={{color: '#8F92A1', fontSize: 12, paddingTop: 1}}>
                {' '}
                10${' '}
              </Text>
              <FontAwesome
                name="star"
                style={{
                  color: '#fab401',
                  fontSize: 15,
                  paddingTop: 1,
                  paddingLeft: 7,
                  paddingRight: 3,
                }}
              />
              <Text style={{color: '#8F92A1'}}> 4.9 (1900 ratings)</Text>
            </View>

            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 10}}>
              <FontAwesome
                name="map-marker"
                style={{
                  color: '#8F92A1',
                  fontSize: 15,
                  paddingTop: 7,
                  paddingLeft: 8,
                }}
              />
              <Text
                style={{
                  fontSize: 11.5,
                  color: '#8D8D8D',
                  alignSelf: 'center',
                  fontWeight: 'normal',
                  // lineHeight: 14,
                  paddingLeft: 15,
                }}>
                Gustavo Phone Shop - Near PalletMall
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MapScreenOne;
