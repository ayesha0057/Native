import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const SliderInfo = [
  require('../../../assests/Ellips.png'),
  require('../../../assests/Ellipse.png'),
];
const DeliveryRequested = () => {
  const [activeSlide, setActiveSlide] = useState();

  const _renderItem = ({item, index}) => {
    return (
      <View style={{height: 670, justifyContent: 'flex-end'}}>
        <View
          style={{
            height: 320,
            width: '100%',
            elevation: 17,
            backgroundColor: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            alignSelf: 'center',
            marginTop: 20,

            marginVertical: 10,
          }}>
          <View
            style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 20}}>
            <Text style={{color: '#092443', fontSize: 23, fontWeight: '700'}}>
              {' '}
              Delivery Detail{' '}
            </Text>
            <Text style={{color: '#CC0A16', paddingTop: 3, fontSize: 17}}>
              (3){' '}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 27, marginTop: 2}}>
            <FontAwesome
              name="map-marker"
              style={{color: '#0FBCF9', paddingTop: 4, fontSize: 15}}
            />
            <Text style={{color: '#8F92A1', paddingLeft: 7}}>
              {' '}
              Sadiqabad, Rawalpindi, Pakistan
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 21, marginTop: 2}}>
            <Entypo
              name="dot-single"
              style={{color: '#0FBCF9', fontSize: 22}}
            />
            <Text style={{color: '#8F92A1'}}> 07:56 arrivel</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 15,
            }}>
            <Image source={require('../../../assests/Rectangle08.png')} />
            <Image source={require('../../../assests/Rectangle666.png')} />
            <Image source={require('../../../assests/Rectangle666.png')} />
            <Image source={require('../../../assests/Rectangle666.png')} />
          </View>
          <Text
            style={{
              alignSelf: 'center',
              color: '#092443',
              fontSize: 18,
              fontWeight: '700',
            }}>
            {' '}
            Delivery Requesting
          </Text>
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
              <Text style={{color: '#092443', fontSize: 18, fontWeight: '700'}}>
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
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 170,
                backgroundColor: 'white',
                borderColor: '8F92A1',
                borderWidth: 1,
                borderRadius: 14,
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: '#8F92A1',
                  fontSize: 20,
                  fontWeight: '500',
                  letterSpacing: 0.5,
                  alignSelf: 'center',
                  paddingTop: 3,
                }}>
                Delivery Details
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
                Finished
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <Carousel
          indicator
          autoplay
          loop
          autoplayDelay={0}
          autoplayInterval={4000}
          // ref={(c) => { this._carousel = c; }}
          data={SliderInfo}
          renderItem={_renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
    </View>
  );
};

export default DeliveryRequested;
