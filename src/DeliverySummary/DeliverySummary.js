import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const DeliverySummary = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f4f3f3'}}>
      <ScrollView>
        <View
          style={{
            height: 280,
            width: '90%',
            elevation: 17,
            backgroundColor: 'white',
            borderRadius: 40,
            alignSelf: 'center',
            marginTop: 20,

            marginVertical: 10,
          }}>
          <View style={{alignSelf: 'center', marginVertical: 20}}>
            <Feather name="clock" size={55} style={{color: '#1b36b9'}} />
            <Text style={{color: '#8F92A1'}}> 45 min </Text>
          </View>
          <Text
            style={{
              color: '#092443',
              fontSize: 19,
              fontWeight: '700',
              alignSelf: 'center',
            }}>
            {' '}
            Thai Long Vogue Clothes
          </Text>

          <View
            style={{
              height: 90,
              width: 330,
              elevation: 10,
              backgroundColor: 'white',
              borderRadius: 12,
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: 20,
              marginVertical: 10,
            }}>
            <Image
              style={{
                height: 90,
                width: 130,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
              source={require('../../assests/Rectangle6.png')}
            />

            <View style={{flexDirection: 'column', width: 200}}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#5B5B5B',
                  paddingHorizontal: 16,
                  paddingTop: 15,
                }}>
                City name or user
              </Text>

              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 10}}>
                <Image
                  source={require('../../assests/loco.png')}
                  style={{
                    marginTop: 1,
                    marginLeft: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 11.5,
                    color: '#8D8D8D',
                    alignSelf: 'center',
                    fontWeight: 'normal',
                    // lineHeight: 14,
                    paddingLeft: 10,
                  }}>
                  Avenida Palmbeach
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 70,
            width: 380,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            elevation: 12,
            alignSelf: 'center',
            marginTop: 30,
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <Image
            style={{marginLeft: 14, marginTop: 10}}
            source={require('../../assests/strawberrypic.png')}
          />
          <View style={{marginTop: 10, marginLeft: 8}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '500'}}>
              {' '}
              Golden fruit jam
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 13}}>
              {' '}
              Quantity 01 Bottle
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 68,
              borderRadius: 6,
              borderColor: '#8F92A1',
              borderWidth: 1,
              marginTop: 20,
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#092443',
                alignSelf: 'center',
                paddingTop: 3,
                fontSize: 16,
              }}>
              01
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 68,
              borderRadius: 6,
              borderColor: '#8F92A1',
              borderWidth: 1,
              marginTop: 20,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: '#092443',
                alignSelf: 'center',
                paddingTop: 3,
                fontSize: 16,
              }}>
              {' '}
              $10.99
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 70,
            width: 380,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            elevation: 12,
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <Image
            style={{marginLeft: 14, marginTop: 10}}
            source={require('../../assests/lemon.png')}
          />
          <View style={{marginTop: 10, marginLeft: 8}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '500'}}>
              {' '}
              Golden fruit jam
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 13}}>
              {' '}
              Quantity 01 Bottle
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 68,
              borderRadius: 6,
              borderColor: '#8F92A1',
              borderWidth: 1,
              marginTop: 20,
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#092443',
                alignSelf: 'center',
                paddingTop: 3,
                fontSize: 16,
              }}>
              01
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 68,
              borderRadius: 6,
              borderColor: '#8F92A1',
              borderWidth: 1,
              marginTop: 20,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: '#092443',
                alignSelf: 'center',
                paddingTop: 3,
                fontSize: 16,
              }}>
              {' '}
              $10.99
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 70,
            width: 380,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            elevation: 12,
            alignSelf: 'center',
            marginTop: 10,
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <Image
            style={{marginLeft: 14, marginTop: 10}}
            source={require('../../assests/cherry.png')}
          />
          <View style={{marginTop: 10, marginLeft: 8}}>
            <Text style={{color: '#092443', fontSize: 17, fontWeight: '500'}}>
              {' '}
              Golden fruit jam
            </Text>
            <Text style={{color: '#8F92A1', fontSize: 13}}>
              {' '}
              Quantity 01 Bottle
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 68,
              borderRadius: 6,
              borderColor: '#8F92A1',
              borderWidth: 1,
              marginTop: 20,
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#092443',
                alignSelf: 'center',
                paddingTop: 3,
                fontSize: 16,
              }}>
              01
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 68,
              borderRadius: 6,
              borderColor: '#8F92A1',
              borderWidth: 1,
              marginTop: 20,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: '#092443',
                alignSelf: 'center',
                paddingTop: 3,
                fontSize: 16,
              }}>
              {' '}
              $10.99
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View
        style={{
          height: 71,
          width: 365,
          borderColor: '#D6D8DE',
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 10,
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <View style={{flex: 2, justifyContent: 'center', marginLeft: 10}}>
          <Text style={{color: '#8F92A1', fontSize: 19}}> Total Amount</Text>
          <Text style={{color: '#8F92A1', fontSize: 12}}>
            {' '}
            inclusive of all taxes
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: '#8F92A1', fontSize: 22, fontWeight: '700'}}>
            {' '}
            $
          </Text>
          <Text style={{color: '#092443', fontSize: 22, fontWeight: '600'}}>
            {' '}
            30.49
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 380,
          height: 60,
          backgroundColor: '#17bcf9',
          borderRadius: 9,
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            paddingTop: 15,
            textTransform: 'uppercase',
            alignSelf: 'center',
          }}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliverySummary;
