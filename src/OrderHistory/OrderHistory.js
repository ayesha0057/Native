import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {Item} from 'native-base';
const OrderHistory = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f6f5f5'}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              backgroundColor: '#0FBCF9',
              paddingHorizontal: 17,
              alignItems: 'center',
              borderRadius: 20,
              paddingVertical: 4,
            }}>
            <Text style={{color: 'white'}}>All</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 17,
              alignItems: 'center',
              borderRadius: 20,
              paddingVertical: 3,
            }}>
            <Text style={{color: '#8F92A1'}}>Past</Text>
          </View>

          <View
            style={{
              paddingHorizontal: 17,
              alignItems: 'center',
              borderRadius: 20,
              paddingVertical: 3,
            }}>
            <Text style={{color: '#8F92A1'}}>Upcoming</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 17,
              alignItems: 'center',
              borderRadius: 20,
              paddingVertical: 3,
            }}>
            <Text style={{color: '#8F92A1'}}>Favourite</Text>
          </View>
        </View>

        <Item style={{marginTop: 30, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '600'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15}}>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              $ 28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 20, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '600'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15}}>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              $ 28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 20, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '600'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15}}>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              $ 28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 20, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '600'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15}}>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              $ 28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 20, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '600'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15}}>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              $ 28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 20, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '600'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15}}>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              $ 28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 20, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '600'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15}}>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              $ 28.39
            </Text>
          </View>
        </Item>
        <Item style={{marginTop: 20, borderColor: '#E4E4E7'}}>
          <View style={{flex: 3, marginLeft: 15, marginBottom: 20}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '600'}}>
              {' '}
              Item description
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              {' '}
              Sunday, Apr 14th
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 15}}> Categorie</Text>
          </View>
          <View style={{flex: 1, marginBottom: 15}}>
            <Text style={{color: '#8F92A1', fontSize: 19, fontWeight: 'bold'}}>
              {' '}
              $ 28.39
            </Text>
          </View>
        </Item>
      </ScrollView>
    </View>
  );
};

export default OrderHistory;
