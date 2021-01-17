import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ShopProfile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#e3e2e6'}}>
      <ScrollView>
        <View style={{height: 380}}>
          <ImageBackground
            source={require('../../assests/mel.png')}
            style={{with: '100%', height: 280}}>
            <View
              style={{
                height: 240,
                width: 365,
                backgroundColor: 'white',
                borderRadius: 20,
                elevation: 13,
                alignSelf: 'center',
                marginTop: 140,
              }}>
              <View style={{height: 140, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Image
                    source={require('../../assests/Mask.png')}
                    style={{
                      height: 90,
                      width: 90,
                      alignSelf: 'center',
                      marginTop: 30,
                    }}
                  />
                </View>
                <View style={{flex: 2, marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 25,
                      width: 170,
                      textAlign: 'left',
                      fontWeight: '700',
                      paddingTop: 20,
                      fontFamily: ' Open Sans',
                      letterSpacing: 0.4,
                    }}>
                    Thai Long Vogue Clothes
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      // marginLeft:,
                      justifyContent: 'space-evenly',
                      width: 180,
                      paddingVertical: 5,
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

                    <Text
                      style={{fontSize: 13, color: '#8F92A1', paddingTop: 1}}>
                      {' '}
                      ( 433 )
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 10,
                      // marginTop: 2,
                    }}>
                    <FontAwesome
                      name="map-marker"
                      style={{color: '#8F92A1', paddingTop: 4, fontSize: 15}}
                    />
                    <Text style={{color: '#8F92A1', paddingLeft: 7}}>
                      Rio de Janeiro, Brazil
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 280,
                  flexDirection: 'row',
                  marginVertical: 10,
                  justifyContent: 'space-evenly',
                }}>
                <View
                  style={{
                    backgroundColor: '#0FBCF9',
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    borderRadius: 7,
                    paddingVertical: 4,
                  }}>
                  <Text style={{color: 'white'}}>Clothes</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#0FBCF9',
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    borderRadius: 7,
                    paddingVertical: 3,
                  }}>
                  <Text style={{color: 'white'}}>Hats</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#0FBCF9',
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    borderRadius: 7,
                    paddingVertical: 3,
                  }}>
                  <Text style={{color: 'white'}}>Special</Text>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>
                <Image
                  style={{marginRight: -7}}
                  source={require('../../assests/avatar2.png')}
                />
                <Image
                  style={{marginRight: -7}}
                  source={require('../../assests/avatar3.png')}
                />
                <Image
                  style={{marginRight: -7}}
                  source={require('../../assests/avatar4.png')}
                />
                <Image
                  style={{marginRight: -7}}
                  source={require('../../assests/avatar5.png')}
                />
                <Image
                  style={{marginRight: -7}}
                  source={require('../../assests/avatar2.png')}
                />
                <Image
                  style={{marginRight: -10}}
                  source={require('../../assests/avatar5.png')}
                />
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: '#1B36B9',
                    borderRadius: 100,
                  }}>
                  <Text style={{color: 'white', paddingLeft: 3, paddingTop: 4}}>
                    +7
                  </Text>
                </View>

                <View
                  style={{flexDirection: 'row', width: 120, paddingLeft: 10}}>
                  <Text style={{fontSize: 11, color: '#8F92A1'}}>
                    Tom and others 7 friends ordered there{' '}
                  </Text>
                </View>

                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#8F92A1',
                      paddingTop: 5,
                      paddingLeft: 10,
                      fontSize: 16,
                    }}>
                    {' '}
                    Show
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#092443',
              fontWeight: '700',
              fontSize: 18,
              paddingHorizontal: 20,
            }}>
            Popular
          </Text>
          <TouchableOpacity style={{paddingHorizontal: 20, paddingTop: 2}}>
            <Text style={{color: '#8F92A1', fontSize: 18}}> See All </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 155,
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
              height: 155,
              width: 160,
              marginRight: 10,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
            }}
            source={require('../../assests/hats.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#092443',
                paddingHorizontal: 10,
                paddingTop: 10,
              }}>
              Showcase hats
            </Text>
            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 2}}>
              <Text style={{color: '#8F92A1', fontSize: 11.5}}>
                consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                vitae congue
              </Text>
            </View>

            <View style={{flexDirection: 'row', paddingLeft: 5, paddingTop: 5}}>
              <Text
                style={{color: '#1B36B9', fontSize: 21, fontWeight: 'bold'}}>
                {' '}
                $2.149,00
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 155,
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
              height: 155,
              width: 160,
              marginRight: 10,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
            }}
            source={require('../../assests/girl3.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#092443',
                paddingHorizontal: 10,
                paddingTop: 10,
              }}>
              Winter Clothes
            </Text>
            <View
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 2}}>
              <Text style={{color: '#8F92A1', fontSize: 11.5}}>
                consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus
                vitae congue
              </Text>
            </View>

            <View style={{flexDirection: 'row', paddingLeft: 5, paddingTop: 5}}>
              <Text
                style={{color: '#1B36B9', fontSize: 21, fontWeight: 'bold'}}>
                {' '}
                $2.149,00
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ShopProfile;
