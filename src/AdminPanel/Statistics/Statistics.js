import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {Item} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
const Statistics = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f7f6f6'}}>
      <ScrollView>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Image source={require('../../../assests/circlechart.png')} />
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 30, alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              name="dot-single"
              size={28}
              color="#1B36B9"
              style={{marginTop: -3}}
            />
            <Text style={{color: '#9C9C9C'}}> cat#1</Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 15}}>
            <Entypo
              name="dot-single"
              size={28}
              style={{marginTop: -3}}
              color="#0FBCF9"
            />
            <Text style={{color: '#9C9C9C'}}> cat#2</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Entypo
              name="dot-single"
              size={28}
              color="#0FBCF9"
              style={{marginTop: -3}}
            />
            <Text style={{color: '#9C9C9C'}}> cat#3</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View>
            <Text style={{color: '#1B36B9', fontSize: 16, fontWeight: '700'}}>
              {' '}
              Past
            </Text>
            <Text
              style={{
                height: 3.5,
                marginTop: 4,
                width: 60,
                backgroundColor: '#1B36B9',
                borderRadius: 40,
                marginLeft: -5,
              }}>
              {' '}
            </Text>
          </View>
          <Text style={{color: '#8F92A1', fontSize: 16}}>Upcoming</Text>
          <Text style={{color: '#8F92A1', fontSize: 16}}> Favourites</Text>
        </View>
        <Item style={{marginTop: 30, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '700'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15, flexDirection: 'row'}}>
            <Text style={{color: '#8F92A1', fontSize: 19}}>$</Text>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 30, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '700'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15, flexDirection: 'row'}}>
            <Text style={{color: '#8F92A1', fontSize: 19}}>$</Text>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 30, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '700'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15, flexDirection: 'row'}}>
            <Text style={{color: '#8F92A1', fontSize: 19}}>$</Text>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              28.39
            </Text>
          </View>
        </Item>
      </ScrollView>
    </View>
  );
};

export default Statistics;
