import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const DeliveryAddress = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f6f5f5'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View
            style={{
              width: 175,
              height: 126,
              borderRadius: 10,
              backgroundColor: '#0FBCF9',
            }}>
            <Image
              source={require('../../assests/Tick.png')}
              style={{alignSelf: 'flex-end', marginRight: 20, marginTop: 10}}
            />

            <Text
              style={{
                color: 'white',
                textAlign: 'left',
                paddingHorizontal: 20,
                paddingTop: 10,
              }}>
              649 Penn Street Redford, MI 48239
            </Text>
          </View>
          <View
            style={{
              width: 175,
              height: 126,
              borderRadius: 10,
              backgroundColor: '#fff',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#8F92A1',
                textAlign: 'left',
                paddingHorizontal: 30,
              }}>
              7602 Peg Shop Street Key West, FL 33040
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View
            style={{
              width: 175,
              height: 126,
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#8F92A1',
                textAlign: 'left',
                paddingHorizontal: 25,
                paddingTop: 10,
              }}>
              649 Penn Street Redford, MI 48239
            </Text>
          </View>
          <View
            style={{
              width: 175,
              height: 126,
              borderRadius: 10,
              backgroundColor: '#fff',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#8F92A1',
                textAlign: 'left',
                paddingHorizontal: 30,
              }}>
              7602 Peg Shop Street Key West, FL 33040
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View
            style={{
              width: 175,
              height: 126,
              borderRadius: 10,
              backgroundColor: '#fff',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#8F92A1',
                textAlign: 'left',
                paddingHorizontal: 25,
                paddingTop: 10,
              }}>
              649 Penn Street Redford, MI 48239
            </Text>
          </View>
          <View
            style={{
              width: 175,
              height: 126,
              borderRadius: 10,
              backgroundColor: '#fff',
              alignSelf: 'center',
              borderColor: '#9BA3B3',
              borderStyle: 'dashed',
              borderWidth: 2,
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#0FBCF9',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Feather
                name="plus"
                color="#fff"
                size={29}
                style={{alignSelf: 'center'}}
              />
            </View>
            <Text
              style={{
                color: '#8F92A1',
                alignSelf: 'center',
                paddingTop: 10,
                fontSize: 13,
              }}>
              Add New Address{' '}
            </Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          width: 380,
          height: 55,
          backgroundColor: '#17bcf9',
          borderRadius: 10,
          alignSelf: 'center',
          marginBottom: 15,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'center',

            textTransform: 'uppercase',
          }}>
          {' '}
          select address
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryAddress;
