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
const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f6f5f5'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
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
            backgroundColor: '#F6F5F5',
            paddingHorizontal: 17,
            alignItems: 'center',
            borderRadius: 20,
            paddingVertical: 3,
          }}>
          <Text style={{color: '#8F92A1'}}>Most Recent</Text>
        </View>

        <View
          style={{
            backgroundColor: '#F6F5F5',
            paddingHorizontal: 17,
            alignItems: 'center',
            borderRadius: 20,
            paddingVertical: 3,
          }}>
          <Text style={{color: '#8F92A1'}}>Visited</Text>
        </View>
        <View
          style={{
            backgroundColor: '#F6F5F5',
            paddingHorizontal: 17,
            alignItems: 'center',
            borderRadius: 20,
            paddingVertical: 3,
          }}>
          <Text style={{color: '#8F92A1'}}>Popular</Text>
        </View>
      </View>

      {/* Trends Boxes */}
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <View>
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              elevation: 15,
              borderRadius: 10,
            }}>
            <Image
              style={{
                alignSelf: 'center',
                marginTop: 20,
                height: 40,
                width: 40,
              }}
              resizeMode="contain"
              source={require('../../assests/heart1.png')}
            />
          </View>
          <Text
            style={{
              color: '#7E7E7E',
              fontSize: 16,
              alignSelf: 'center',
              marginTop: 7,
            }}>
            Favorite
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              elevation: 15,
              borderRadius: 10,
            }}>
            <Image
              style={{
                alignSelf: 'center',
                marginTop: 20,
                height: 40,
                width: 40,
              }}
              resizeMode="contain"
              source={require('../../assests/Tag.png')}
            />
          </View>
          <Text
            style={{
              color: '#7E7E7E',
              fontSize: 16,
              alignSelf: 'center',
              marginTop: 7,
            }}>
            Cheap
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              elevation: 15,
              borderRadius: 10,
            }}>
            <Image
              style={{
                alignSelf: 'center',
                marginTop: 20,
                height: 40,
                width: 40,
              }}
              resizeMode="contain"
              source={require('../../assests/vecline.png')}
            />
          </View>
          <Text
            style={{
              color: '#7E7E7E',
              fontSize: 16,
              alignSelf: 'center',
              marginTop: 7,
            }}>
            Trends
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'white',
              elevation: 15,
              borderRadius: 10,
            }}>
            <Image
              style={{
                alignSelf: 'center',
                marginTop: 20,
                height: 40,
                width: 40,
              }}
              resizeMode="contain"
              source={require('../../assests/dots.png')}
            />
          </View>
          <Text
            style={{
              color: '#7E7E7E',
              fontSize: 16,
              alignSelf: 'center',
              marginTop: 7,
            }}>
            More
          </Text>
        </View>
      </View>
      {/* Trend Box End */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#092443',
            fontWeight: '600',
            fontSize: 23,
            paddingHorizontal: 20,
          }}>
          Today’s promo
        </Text>
        <TouchableOpacity style={{paddingHorizontal: 20, paddingTop: 2}}>
          <Text style={{color: '#0FBCF9', fontSize: 18}}> See All </Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal ScrollView */}

      <View>
        <ScrollView horizontal>
          <View
            style={{
              marginTop: 15,
              marginLeft: 10,
              height: 270,
              width: 350,
            }}>
            <ImageBackground
              source={require('../../assests/fruits.png')}
              style={{flex: 1}}
              imageStyle={{borderRadius: 10, resizeMode: 'cover'}}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginTop: 10,
                }}>
                <Image
                  style={{
                    alignSelf: 'center',
                    marginTop: 7,
                    height: 20,
                    width: 20,
                  }}
                  resizeMode="contain"
                  source={require('../../assests/heart1.png')}
                />
              </View>

              <View
                style={{
                  height: 120,
                  width: 310,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  elevation: 5,
                  borderRadius: 10,
                  marginTop: 95,
                  elevation: 12,
                }}>
                <Text
                  style={{
                    color: '#092443',
                    marginLeft: 15,
                    fontSize: 18,
                    fontWeight: '500',
                    marginTop: 15,
                  }}>
                  {' '}
                  Fruit salad mix
                </Text>
                <Text
                  style={{
                    color: '#7E7E7E',
                    marginLeft: 15,
                    paddingVertical: 3,
                  }}>
                  {' '}
                  Delics Fruit salad, Ngasem
                </Text>
                <View
                  style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                  <Text
                    style={{
                      color: '#092443',
                      paddingLeft: 5,
                      fontSize: 19,

                      marginRight: -4,
                    }}>
                    {' '}
                    18.500
                  </Text>
                  <Text
                    style={{
                      color: '#D6D8DE',
                      fontSize: 19,
                      paddingLeft: 15,
                      textDecorationLine: 'line-through',
                    }}>
                    {' '}
                    22.500
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#0FBCF9',
                      paddingHorizontal: 5,
                      marginLeft: 90,
                      paddingVertical: 5,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'white'}}> 5 Left </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              marginTop: 15,
              marginLeft: 10,
              height: 270,
              width: 350,
            }}>
            <ImageBackground
              source={require('../../assests/fruits.png')}
              style={{flex: 1}}
              imageStyle={{borderRadius: 10, resizeMode: 'cover'}}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginTop: 10,
                }}>
                <Image
                  style={{
                    alignSelf: 'center',
                    marginTop: 7,
                    height: 20,
                    width: 20,
                  }}
                  resizeMode="contain"
                  source={require('../../assests/heart1.png')}
                />
              </View>

              <View
                style={{
                  height: 120,
                  width: 310,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  elevation: 5,
                  borderRadius: 10,
                  marginTop: 95,
                  elevation: 12,
                }}>
                <Text
                  style={{
                    color: '#092443',
                    marginLeft: 15,
                    fontSize: 18,
                    fontWeight: '500',
                    marginTop: 15,
                  }}>
                  {' '}
                  Fruit salad mix
                </Text>
                <Text
                  style={{
                    color: '#7E7E7E',
                    marginLeft: 15,
                    paddingVertical: 3,
                  }}>
                  {' '}
                  Delics Fruit salad, Ngasem
                </Text>
                <View
                  style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                  <Text
                    style={{
                      color: '#092443',
                      paddingLeft: 5,
                      fontSize: 19,

                      marginRight: -4,
                    }}>
                    {' '}
                    18.500
                  </Text>
                  <Text
                    style={{
                      color: '#D6D8DE',
                      fontSize: 19,
                      paddingLeft: 15,
                      textDecorationLine: 'line-through',
                    }}>
                    {' '}
                    22.500
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#0FBCF9',
                      paddingHorizontal: 5,
                      marginLeft: 90,
                      paddingVertical: 5,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: 'white'}}> 5 Left </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
