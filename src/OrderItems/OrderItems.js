import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const OrderItems = () => {
  return (
    <View style={{backgroundColor: '#f7f6f6', flex: 1}}>
      <ScrollView>
        <View
          style={{
            height: 100,
            width: 380,
            alignSelf: 'center',
            marginTop: 40,
            flexDirection: 'row',
          }}>
          <View style={{flex: 3}}>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Image
                source={require('../../assests/shapeIcon.png')}
                style={{marginTop: 5}}
              />
              <Text
                style={{
                  color: '#092443',
                  fontSize: 18,
                  fontWeight: '700',
                  marginLeft: 7,
                }}>
                {' '}
                Ice cream
              </Text>
            </View>
            <Text style={{color: '#b4bbc4', fontSize: 16, marginLeft: 30}}>
              {' '}
              Regular
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#b4bbc4', fontSize: 16, marginLeft: 30}}>
                {' '}
                Customize
              </Text>
              <FontAwesome
                color="#8F92A1"
                name="angle-down"
                size={17}
                style={{marginLeft: 10}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 12,
              marginRight: 5,
            }}>
            <Feather
              name="minus"
              color="#8F92A1"
              size={20}
              style={{marginRight: 10, marginLeft: 5}}
            />
            <Text
              style={{
                fontSize: 17,
                color: '#0FBCF9',
                marginRight: 10,
                fontWeight: '700',
              }}>
              {' '}
              1
            </Text>
            <Feather name="plus" color="#8F92A1" size={20} />
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <Text style={{color: '#092443', fontSize: 18, fontWeight: '700'}}>
              €15.25
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: 380,
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <View style={{flex: 3}}>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Image
                source={require('../../assests/shapeIcon.png')}
                style={{marginTop: 5}}
              />
              <Text
                style={{
                  color: '#092443',
                  fontSize: 18,
                  fontWeight: '700',
                  marginLeft: 7,
                }}>
                {' '}
                Ice cream
              </Text>
            </View>
            <Text style={{color: '#b4bbc4', fontSize: 16, marginLeft: 30}}>
              {' '}
              Regular
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#b4bbc4', fontSize: 16, marginLeft: 30}}>
                {' '}
                Customize
              </Text>
              <FontAwesome
                color="#8F92A1"
                name="angle-down"
                size={17}
                style={{marginLeft: 10}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 12,
              marginRight: 5,
            }}>
            <Feather
              name="minus"
              color="#8F92A1"
              size={20}
              style={{marginRight: 10, marginLeft: 5}}
            />
            <Text
              style={{
                fontSize: 17,
                color: '#0FBCF9',
                marginRight: 10,
                fontWeight: '700',
              }}>
              {' '}
              2
            </Text>
            <Feather name="plus" color="#8F92A1" size={20} />
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <Text style={{color: '#092443', fontSize: 18, fontWeight: '700'}}>
              €7.62
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: 380,
          height: 60,
          marginBottom: 25,
          borderRadius: 12,
          borderColor: 'lightgray',
          borderWidth: 1,
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flex: 2, marginLeft: 10, marginTop: 10}}>
          <Text style={{color: '#8F92A1'}}> Total Amount</Text>
          <Text style={{color: '#8F92A1'}}> inclusive of all taxes</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 80,
            marginTop: 15,
          }}>
          <Text style={{color: '#8F92A1', fontSize: 21, fontWeight: '700'}}>
            {' '}
            ${' '}
          </Text>
          <Text style={{color: '#092443', fontSize: 21, fontWeight: '700'}}>
            {' '}
            30.09
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 380,
          height: 50,
          backgroundColor: '#17bcf9',
          borderRadius: 9,
          alignSelf: 'center',
          marginBottom: 15,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'center',
            paddingTop: 10,
            textTransform: 'uppercase',
          }}>
          {' '}
          checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderItems;
