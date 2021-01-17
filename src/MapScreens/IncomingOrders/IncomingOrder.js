import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
const IncomingOrder = () => {
  return (
    <View style={{backgroundColor: '#fefefe', flex: 1}}>
      <ScrollView>
        <View style={{marginTop: 70}}>
          <View
            style={{
              width: 375,
              alignSelf: 'center',
              backgroundColor: 'white',
              elevation: 1,
              borderRadius: 10,
              marginVertical: 5,
            }}>
            <ImageBackground
              style={{
                height: 135,
              }}
              resizeMode="cover"
              source={require('../../../assests/frame-content.png')}></ImageBackground>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <Image
                style={{
                  height: 55,
                  width: 55,
                  marginTop: 5,
                  marginHorizontal: 10,
                }}
                source={require('../../../assests/Ellips.png')}
              />
              <View style={{marginTop: 5}}>
                <Text
                  style={{color: '#092443', fontSize: 18, fontWeight: '700'}}>
                  Zilaide Amarantes
                </Text>
                <Text style={{color: '#8F92A1', fontSize: 16}}>
                  See Delivery Details
                </Text>
              </View>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderColor: 'lightgray',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 30,
                  marginTop: 6,
                  marginLeft: 45,
                }}>
                <MaterialIcons
                  name="call"
                  size={25}
                  style={{alignSelf: 'center', color: '#17bbf7'}}
                />
              </View>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginTop: 6,
                  marginHorizontal: 5,
                }}>
                <Icon
                  name="chatbubbles-outline"
                  size={25}
                  style={{alignSelf: 'center', color: '#17bbf7'}}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 15}}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 170,
                  backgroundColor: 'white',
                  borderColor: 'red',
                  borderWidth: 1,
                  borderRadius: 14,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    color: '#CC0A16',
                    fontSize: 20,
                    fontWeight: '500',
                    letterSpacing: 0.5,
                    alignSelf: 'center',
                    paddingTop: 3,
                  }}>
                  {' '}
                  Ignore{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 170,
                  elevation: 3,
                  backgroundColor: '#06D37D',
                  borderRadius: 14,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '500',
                    letterSpacing: 0.5,
                    alignSelf: 'center',
                    paddingTop: 5,
                  }}>
                  {' '}
                  Accept{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: 375,
              alignSelf: 'center',
              backgroundColor: 'white',
              elevation: 1,
              borderRadius: 10,
              marginVertical: 5,
            }}>
            <ImageBackground
              style={{
                height: 135,
              }}
              resizeMode="cover"
              source={require('../../../assests/frame-content.png')}></ImageBackground>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <Image
                style={{
                  height: 55,
                  width: 55,
                  marginTop: 5,
                  marginHorizontal: 10,
                }}
                source={require('../../../assests/Ellipse22.png')}
              />
              <View style={{marginTop: 5}}>
                <Text
                  style={{color: '#092443', fontSize: 18, fontWeight: '700'}}>
                  Edson Gusmão
                </Text>
                <Text style={{color: '#8F92A1', fontSize: 16}}>
                  See Delivery Details
                </Text>
              </View>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderColor: 'lightgray',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 30,
                  marginTop: 6,
                  marginLeft: 45,
                }}>
                <MaterialIcons
                  name="call"
                  size={25}
                  style={{alignSelf: 'center', color: '#17bbf7'}}
                />
              </View>
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: 30,
                  marginTop: 6,
                  marginHorizontal: 5,
                }}>
                <Icon
                  name="chatbubbles-outline"
                  size={25}
                  style={{alignSelf: 'center', color: '#17bbf7'}}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 15}}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 170,
                  backgroundColor: 'white',
                  borderColor: 'red',
                  borderWidth: 1,
                  borderRadius: 14,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    color: '#CC0A16',
                    fontSize: 20,
                    fontWeight: '500',
                    letterSpacing: 0.5,
                    alignSelf: 'center',
                    paddingTop: 3,
                  }}>
                  {' '}
                  Ignore{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 170,
                  elevation: 3,
                  backgroundColor: '#06D37D',
                  borderRadius: 14,
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '500',
                    letterSpacing: 0.5,
                    alignSelf: 'center',
                    paddingTop: 5,
                  }}>
                  {' '}
                  Accept{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default IncomingOrder;
