import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const CustomerSupport = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text
          style={{
            fontSize: 24,
            paddingHorizontal: 21,
            flex: 1,
            fontWeight: '700',
            marginTop: 80,
          }}>
          Welcome Sarah Vaughan
        </Text>
        <Image
          style={{flex: 1, marginRight: 20}}
          resizeMode="contain"
          source={require('../../../assests/support.png')}
        />
      </View>
      <View>
        <Text style={{color: '#8F92A1', paddingHorizontal: 22}}>
          Lorem Ipsum sir Dolor amet Cons can
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            height: 50,
            width: 300,
            borderColor: 'lightgray',
            borderWidth: 0.2,
            borderRadius: 10,
            flexDirection: 'row',
            elevation: 2,
            backgroundColor: '#fefefe',
            marginLeft: 20,
            marginTop: 20,
          }}>
          <EvilIcons
            name="search"
            size={28}
            style={{
              fontWeight: '700',
              paddingTop: 13,
              paddingLeft: 20,
              color: '#8f92a1',
            }}
          />
          <TextInput placeholder="Search" />
        </View>
        <Image
          source={require('../../../assests/Tune.png')}
          style={{marginLeft: 20, marginTop: 35}}
        />
        <Entypo
          name="dots-three-vertical"
          size={18}
          color="#abadb9"
          style={{marginLeft: 20, marginTop: 35}}
        />
      </View>

      <View
        style={{
          width: '90%',
          height: 80,
          elevation: 15,
          backgroundColor: '#fff',
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, marginTop: 10, marginLeft: 10}}>
          <Text
            style={{
              color: '#092443',
              fontSize: 18,
              fontWeight: '700',
              paddingVertical: 5,
            }}>
            {' '}
            Ticket #06845
          </Text>
          <Text style={{color: '#8F92A1', fontSize: 13}}>
            {' '}
            15 May 2020 9:00 pm
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            height: 20,
            backgroundColor: '#17bcf9',
            borderRadius: 4,
            alignSelf: 'center',
            marginRight: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 8,
              alignSelf: 'center',
              paddingTop: 5,
            }}>
            General{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '90%',
          height: 80,
          elevation: 15,
          backgroundColor: '#fff',
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, marginTop: 10, marginLeft: 10}}>
          <Text
            style={{
              color: '#092443',
              fontSize: 18,
              fontWeight: '700',
              paddingVertical: 5,
            }}>
            {' '}
            Ticket #06845
          </Text>
          <Text style={{color: '#8F92A1', fontSize: 13}}>
            {' '}
            15 May 2020 9:00 pm
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            height: 20,
            backgroundColor: '#17bcf9',
            borderRadius: 4,
            alignSelf: 'center',
            marginRight: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 8,
              alignSelf: 'center',
              paddingTop: 5,
            }}>
            General{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '90%',
          height: 80,
          elevation: 15,
          backgroundColor: '#fff',
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, marginTop: 10, marginLeft: 10}}>
          <Text
            style={{
              color: '#092443',
              fontSize: 18,
              fontWeight: '700',
              paddingVertical: 5,
            }}>
            {' '}
            Ticket #06845
          </Text>
          <Text style={{color: '#8F92A1', fontSize: 13}}>
            {' '}
            15 May 2020 9:00 pm
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            height: 20,
            backgroundColor: '#17bcf9',
            borderRadius: 4,
            alignSelf: 'center',
            marginRight: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 8,
              alignSelf: 'center',
              paddingTop: 5,
            }}>
            General{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerSupport;
