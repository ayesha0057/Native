import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const DriverProfile = () => {
  return (
    <View style={{backgroundColor: '#f7f6f6', flex: 1}}>
      <ScrollView>
        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 60}}>
          <Image
            source={require('../../../assests/hat.png')}
            style={{marginRight: 14}}
          />
          <Image
            source={require('../../../assests/check2.png')}
            style={{marginLeft: -40}}
          />

          <View style={{marginLeft: 30}}>
            <Text
              style={{
                color: '#2E3034',
                fontSize: 22,
                width: 130,
                fontWeight: '700',
                lineHeight: 25,
              }}>
              Margaret Novakowska
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                resizeMode="contain"
                style={{width: 15, height: 15, marginTop: 3}}
                source={require('../../../assests/map-pin.png')}
              />
              <Text style={{color: '#8F92A1', marginLeft: 7}}>
                Rio de Janeiro, Brazil
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{alignSelf: 'center', marginHorizontal: 45, marginTop: 25}}>
          <Text
            style={{
              width: 35,
              height: 2,
              backgroundColor: '#8F92A1',
              marginLeft: 25,
              marginVertical: 10,
              opacity: 0.5,
            }}></Text>
          <Text style={{color: '#8F92A1', paddingHorizontal: 25}}>
            Hi! I am a Margaret, I really like traveling to really different
            countries, most often I am looking for flats that have very friendly
            landlords in a good location.
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 18}}>
            <Image
              style={{marginHorizontal: 5, marginTop: 3}}
              source={require('../../../assests/award.png')}
            />
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              Lorem Ipsum dolor
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
            <Image
              style={{marginHorizontal: 6, marginTop: 3}}
              source={require('../../../assests/Comment.png')}
            />
            <Text style={{color: '#8F92A1', fontSize: 15}}>
              Speaks in Deutsch, English, Russian
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: 180,
            paddingVertical: 15,
            marginLeft: 65,
          }}>
          <FontAwesome
            name="star"
            style={{
              color: '#f4d36e',
              fontSize: 16,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
          <FontAwesome
            name="star"
            style={{
              color: '#f4d36e',
              fontSize: 16,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
          <FontAwesome
            name="star"
            style={{
              color: '#f4d36e',
              fontSize: 16,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
          <FontAwesome
            name="star"
            style={{
              color: '#f4d36e',
              fontSize: 16,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />
          <FontAwesome
            name="star"
            style={{
              color: '#f4d36e',
              fontSize: 16,
              paddingTop: 1,
              paddingLeft: 7,
            }}
          />

          <Text
            style={{
              paddingLeft: 7,
              fontSize: 15,
              fontWeight: '700',
              paddingTop: -1,
            }}>
            {' '}
            5,0{' '}
          </Text>

          <Text style={{fontSize: 13, color: '#8F92A1', paddingTop: 1}}>
            {' '}
            ( 433 )
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Text
            style={{
              color: '#092443',
              fontWeight: '700',
              fontSize: 18,
              paddingHorizontal: 20,
            }}>
            {' '}
            Recent Activities{' '}
          </Text>
          <TouchableOpacity style={{paddingLeft: 150}}>
            <Text style={{color: '#8F92A1'}}> See All </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 105,
            width: 380,
            elevation: 15,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical: 10,
          }}>
          <Image
            style={{height: 106, width: 180}}
            source={require('../../../assests/Rectangle.png')}
          />

          <View style={{flexDirection: 'column', width: 200}}>
            <Text
              style={{
                fontSize: 19,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Lorem Ipsum
            </Text>

            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
              <FontAwesome
                name="map-marker"
                style={{
                  color: '#8F92A1',
                  fontSize: 15,
                  paddingTop: 7,
                  paddingLeft: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#8D8D8D',
                  alignSelf: 'center',
                  fontWeight: 'normal',
                  lineHeight: 14,
                  paddingLeft: 8,
                }}>
                Gustavo Phone Shop - Near PalletMall, Woodland Hills
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 105,
            width: 380,
            elevation: 15,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical: 10,
          }}>
          <Image
            style={{height: 106, width: 180}}
            source={require('../../../assests/Rectangle.png')}
          />

          <View style={{flexDirection: 'column', width: 200}}>
            <Text
              style={{
                fontSize: 19,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Lorem Ipsum
            </Text>

            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
              <FontAwesome
                name="map-marker"
                style={{
                  color: '#8F92A1',
                  fontSize: 15,
                  paddingTop: 7,
                  paddingLeft: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#8D8D8D',
                  alignSelf: 'center',
                  fontWeight: 'normal',
                  lineHeight: 14,
                  paddingLeft: 8,
                }}>
                Gustavo Phone Shop - Near PalletMall, Woodland Hills
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 105,
            width: 380,
            elevation: 15,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical: 10,
          }}>
          <Image
            style={{height: 106, width: 180}}
            source={require('../../../assests/Rectangle.png')}
          />

          <View style={{flexDirection: 'column', width: 200}}>
            <Text
              style={{
                fontSize: 19,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Lorem Ipsum
            </Text>

            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
              <FontAwesome
                name="map-marker"
                style={{
                  color: '#8F92A1',
                  fontSize: 15,
                  paddingTop: 7,
                  paddingLeft: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: '#8D8D8D',
                  alignSelf: 'center',
                  fontWeight: 'normal',
                  lineHeight: 14,
                  paddingLeft: 8,
                }}>
                Gustavo Phone Shop - Near PalletMall, Woodland Hills
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DriverProfile;
