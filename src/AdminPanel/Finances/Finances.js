import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import {Item} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Finances = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f7f6f6'}}>
    <ScrollView>
    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <View
          style={{
            width: 180,
            height: 160,
            backgroundColor: '#0FBCF9',
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff', paddingLeft: 10, paddingTop: 10}}>
            Income
          </Text>
          <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 18}}>
            <Text
              style={{
                color: '#F6F5F5',
                fontSize: 25,
                fontWeight: '700',
                opacity: 0.5,
              }}>
              $
            </Text>
            <Text style={{color: '#fff', fontSize: 25, fontWeight: '700'}}>
              1.230,00
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingVertical: 15,
            }}>
            <Text
              style={{
                height: 5,
                width: 60,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              {' '}
            </Text>
            <Text
              style={{
                height: 5,
                width: 100,
                backgroundColor: '#fff',
                opacity: 0.5,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              {' '}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#F6F5F5',
                paddingLeft: 10,
                flex: 3,
                fontSize: 10,
                paddingTop: 5,
              }}>
              {' '}
              28/05
            </Text>
            <AntDesign
              name="arrowup"
              color="#fff"
              size={22}
              style={{
                paddingTop: 3,
                marginLeft: 10,
                alignSelf: 'flex-end',
                flex: 1,
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: 180,
            height: 160,
            backgroundColor: '#CC0A16',
            borderRadius: 10,
          }}>


<Text style={{color: '#fff', paddingLeft: 10, paddingTop: 10}}>
Spent
          </Text>
          <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 18}}>
            <Text
              style={{
                color: '#F6F5F5',
                fontSize: 25,
                fontWeight: '700',
                opacity: 0.5,
              }}>
              $
            </Text>
            <Text style={{color: '#fff', fontSize: 25, fontWeight: '700'}}>
            8.270,00
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingVertical: 15,
            }}>
            <Text
              style={{
                height: 5,
                width: 60,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
              {' '}
            </Text>
            <Text
              style={{
                height: 5,
                width: 100,
                backgroundColor: '#fff',
                opacity: 0.5,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}>
              {' '}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#F6F5F5',
                paddingLeft: 10,
                flex: 3,
                fontSize: 10,
                paddingTop: 5,
              }}>
              {' '}
              28/05
            </Text>
            <AntDesign
              name="arrowdown"
              color="#fff"
              size={22}
              style={{
                paddingTop: 3,
                marginLeft: 10,
                alignSelf: 'flex-end',
                flex: 1,
              }}
            />
          </View>
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

export default Finances;
