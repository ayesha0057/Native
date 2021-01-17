import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const PaymentMethod = () => {
  return (
    <View style={{backgroundColor: '#f9f8f8', flex: 1}}>
      <ScrollView>
        <View
          style={{
            width: 360,
            height: 120,
            backgroundColor: '#fff',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <Image
            style={{marginLeft: 12, alignSelf: 'center'}}
            source={require('../../assests/mc.png')}
          />
          <View style={{marginTop: 20, marginLeft: 20}}>
            <Text style={{color: '#101C2A', fontSize: 18, fontWeight: '600'}}>
              {' '}
              Master Card
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 14}}>
              {' '}
              Account: xxxx65
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 14}}> Agency: xx21</Text>
            <Text style={{color: '#8F92A1', fontSize: 14}}>
              {' '}
              Card Number: xxxx-xxxx-xxxx-x1421
            </Text>
          </View>
          <View style={{alignSelf: 'center', marginLeft: 12}}>
            <Image source={require('../../assests/blu.png')} />
          </View>
        </View>

        <View
          style={{
            width: 360,
            height: 120,
            backgroundColor: '#fff',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <Image
            style={{marginLeft: 12, alignSelf: 'center'}}
            source={require('../../assests/visa.png')}
          />
          <View style={{marginTop: 20, marginLeft: 20}}>
            <Text style={{color: '#101C2A', fontSize: 18, fontWeight: '600'}}>
              Visa
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 14}}>
              Account: xxxx84
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 14}}>Agency: xx32</Text>
            <Text style={{color: '#8F92A1', fontSize: 14}}>
              Card Number: xxxx-xxxx-xxxx-x1136
            </Text>
          </View>
          <View style={{alignSelf: 'center', marginLeft: 12}}>
            <Image
              style={{Color: '#17bcf9'}}
              source={require('../../assests/grey.png')}
            />
          </View>
        </View>

        <View
          style={{
            width: 360,
            height: 120,
            backgroundColor: '#fff',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <Image
            style={{marginLeft: 12, alignSelf: 'center', height: 20, width: 20}}
            source={require('../../assests/shp.png')}
          />
          <View style={{marginTop: 20, marginLeft: 40, flex: 2}}>
            <Text style={{color: '#101C2A', fontSize: 18, fontWeight: '600'}}>
              Paypal
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 14}}>
              Email: xxxxxxx@xxxxl.com
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 14}}>ID: xxxx21</Text>
          </View>
          <View style={{alignSelf: 'center', marginRight: 30}}>
            <Image
              style={{Color: '#17bcf9'}}
              source={require('../../assests/grey.png')}
            />
          </View>
        </View>
        <View
          style={{
            width: 360,
            height: 126,
            borderRadius: 10,
            backgroundColor: '#fff',
            alignSelf: 'center',
            borderColor: '#9BA3B3',
            borderStyle: 'dashed',
            borderWidth: 2,
            justifyContent: 'center',
            marginTop: 20,
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
            Add New Card
          </Text>
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
          Save changes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethod;
