import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Profile = () => {
  return (
    <>
    <View style={{backgroundColor: 'whitesmoke', flex: 1}}>
    <ScrollView>
      <View
        style={{
          height: 200,
          width: 355,
          borderRadius: 20,
          marginVertical: 40,
          backgroundColor: 'white',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            height: 20,
            width: 50,
            fontSize: 13,
            backgroundColor: '#17bcf9',
            textAlign: 'center',
            borderRadius: 8,
            color: 'white',
            alignSelf: 'flex-end',
            marginRight: 30,
            marginTop: 20,
          }}>
          Driver
        </Text>
        <View style={{alignSelf: 'center'}}>
          <Image
            style={{marginTop: -20, alignSelf: 'center'}}
            source={require('../../assests/Ellipse.png')}
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
            Neelesh Chaudhary
          </Text>

          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <FontAwesome
              name="map-marker"
              style={{color: '#8F92A1', fontSize: 22}}
            />
            <Text
              style={{
                color: '#8F92A1',
                fontSize: 17,
                paddingLeft: 10,
                paddingBottom: 5,
              }}>
              Bangladesh{' '}
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

      <View style={{flexDirection: 'row', marginVertical:10 }}>
        <Text
          style={{
            color: 'midnightblue',
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
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical:10
          }}>
          <Image
            style={{height: 106, width: 180}}
            source={require('../../assests/Rectangle.png')}
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
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical:10
          }}>
          <Image
            style={{height: 106, width: 180}}
            source={require('../../assests/Rectangle.png')}
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
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical:10
          }}>
          <Image
            style={{height: 106, width: 180}}
            source={require('../../assests/Rectangle.png')}
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
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical:10
          }}>
          <Image
            style={{height: 106, width: 180}}
            source={require('../../assests/Rectangle.png')}
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


    </>
  );
};

export default Profile;
