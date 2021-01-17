import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ShopList = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f9f8f8'}}>
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
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <Feather
              name="minus"
              color="#8F92A1"
              size={20}
              style={{marginRight: 10, marginLeft: 10}}
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
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <Feather
              name="minus"
              color="#8F92A1"
              size={20}
              style={{marginRight: 10, marginLeft: 10}}
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
        </View>
      </ScrollView>

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

export default ShopList;
