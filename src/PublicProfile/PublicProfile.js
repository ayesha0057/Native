import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const PublicProfile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f9f8f8'}}>
      <ScrollView>
        <View
          style={{
            height: 200,
            width: 355,
            borderRadius: 20,
            marginVertical: 40,
            backgroundColor: 'white',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View style={{alignSelf: 'center'}}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../assests/proimage.png')}
              resizeMode="contain"
            />
            <Text
              style={{
                color: 'midnightblue',
                fontFamily: 'Open Sans',
                fontWeight: '700',
                textTransform: 'capitalize',
                fontSize: 18,
                letterSpacing: -0.4,
                paddingVertical: 5,
                alignSelf: 'center',
              }}>
              Virginia Robinson
            </Text>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                style={{alignSelf: 'center', marginBottom: 4}}
                source={require('../../assests/pin.png')}
              />
              <Text
                style={{
                  color: '#8F92A1',
                  fontSize: 17,
                  paddingLeft: 10,
                  paddingBottom: 5,
                }}>
                West Jordan
              </Text>
            </View>

            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  color: '#8F92A1',
                  paddingHorizontal: 13,
                  paddingVertical: 5,
                }}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                adipiscing elit, sed do eiusmod{' '}
              </Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Text
            style={{
              color: 'midnightblue',
              fontWeight: '700',
              fontSize: 18,
              flex: 3,
              paddingHorizontal: 20,
            }}>
            {' '}
            Recent Orders
          </Text>
          <TouchableOpacity style={{flex: 1, marginTop: 3}}>
            <Text style={{color: '#8F92A1'}}> See All </Text>
          </TouchableOpacity>
        </View>

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
            source={require('../../assests/phoness.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Iphone X
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
              <Image
                source={require('../../assests/loco.png')}
                style={{
                  marginTop: 7,
                  marginLeft: 4,
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

        <View
          style={{
            height: 130,
            width: 380,
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 10,
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
            source={require('../../assests/perfume.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Capilar Hair Tonic
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
              <Image
                source={require('../../assests/loco.png')}
                style={{
                  marginTop: 7,
                  marginLeft: 4,
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
        <View
          style={{
            height: 130,
            width: 380,
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 10,
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
            source={require('../../assests/piza.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Capilar Hair Tonic
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
              <Image
                source={require('../../assests/loco.png')}
                style={{
                  marginTop: 7,
                  marginLeft: 4,
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
      </ScrollView>
    </View>
  );
};

export default PublicProfile;
