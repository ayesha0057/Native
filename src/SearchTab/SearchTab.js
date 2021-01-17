import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SearchTab = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 90,
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
        {/* Slider starts here */}

        <View style={styles.Container}>
          <Swiper
            // autoplay
            loop
            style={{height: 200}}
            buttonWrapperStyle={{
              marginTop: -40,
              backgroundColor: 'transparent',
            }}
            activeDotColor="#0FBCF9"
            nextButton={
              <Text style={{fontSize: 30}}>
                <MaterialIcons name="navigate-next" color="white" size={34} />
              </Text>
            }
            prevButton={
              <Text style={{fontSize: 30}}>
                <Ionicons name="chevron-back" color="white" size={29} />
              </Text>
            }
            dotStyle={{marginHorizontal: 20}}
            showsButtons={true}>
            <View style={[styles.slide]}>
              <ImageBackground
                style={styles.sliderImage}
                source={require('../../assests/Rectangle9.png')}>
                <View
                  style={{
                    zIndex: 30,
                    height: 240,
                    justifyContent: 'flex-end',
                    marginHorizontal: 30,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
                    Hurry Up!
                  </Text>
                  <Text style={{color: 'white', fontSize: 16}}>
                    Valid til 30th October
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground
                style={styles.sliderImage}
                resizeMode="cover"
                source={require('../../assests/girl3.png')}>
                <View
                  style={{
                    zIndex: 30,
                    height: 240,
                    justifyContent: 'flex-end',
                    marginHorizontal: 30,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
                    Hurry Up!
                  </Text>
                  <Text style={{color: 'white', fontSize: 16}}>
                    Valid til 30th October
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground
                style={styles.sliderImage}
                source={require('../../assests/hats.png')}>
                <View
                  style={{
                    zIndex: 30,
                    height: 240,
                    justifyContent: 'flex-end',
                    marginHorizontal: 30,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
                    Hurry Up!
                  </Text>
                  <Text style={{color: 'white', fontSize: 16}}>
                    Valid til 30th October
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.slide}>
              <ImageBackground
                style={styles.sliderImage}
                source={require('../../assests/Rectangle9.png')}>
                <View
                  style={{
                    zIndex: 30,
                    height: 240,
                    justifyContent: 'flex-end',
                    marginHorizontal: 30,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
                    Hurry Up!
                  </Text>
                  <Text style={{color: 'white', fontSize: 16}}>
                    Valid til 30th October
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </Swiper>
        </View>

        {/* Slider ends here */}
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
            Daily Deals
          </Text>
          <TouchableOpacity style={{paddingHorizontal: 20, paddingTop: 2}}>
            <Text style={{color: '#8F92A1', fontSize: 18}}> See All </Text>
          </TouchableOpacity>
        </View>

        {/* ScrollViewH Horizontal Starts here */}

        <View style={{height: 330, width: '100%'}}>
          <ScrollView horizontal>
            <View
              style={{
                flex: 1,
                height: 310,
                width: 185,
                backgroundColor: 'white',
                elevation: 8,
                borderRadius: 10,
                borderColor: 'lightgray',
                borderWidth: 1,
                marginLeft: 15,
              }}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assests/photo.png')}
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: '#6C6C6C',
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingTop: 5,
                  }}>
                  Picolé Gourmet
                </Text>
                <Text
                  style={{
                    color: '#ACACAC',
                    fontSize: 11,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                  }}>
                  Picolé Artesanal totalmente organico com pedaços de frutas
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text
                    style={{
                      color: '#6C6C6C',
                      marginLeft: 10,
                      fontSize: 15,
                      marginTop: 3,
                      marginRight: -4,
                    }}>
                    {' '}
                    $
                  </Text>
                  <Text style={{color: '#6C6C6C', fontSize: 19}}> 15,50</Text>
                  <TouchableOpacity style={{marginLeft: 80}}>
                    <Ionicons name="add" size={24} color="#0FBCF9" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                height: 310,
                width: 185,
                backgroundColor: 'white',
                elevation: 8,
                borderRadius: 10,
                borderColor: 'lightgray',
                borderWidth: 1,
                marginLeft: 15,
              }}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assests/photo2.png')}
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: '#6C6C6C',
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingTop: 5,
                  }}>
                  Hamburguer Artesanal
                </Text>
                <Text
                  style={{
                    color: '#ACACAC',
                    fontSize: 11,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                  }}>
                  Picolé Artesanal totalmente organico com pedaços de frutas
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text
                    style={{
                      color: '#6C6C6C',
                      marginLeft: 10,
                      fontSize: 15,
                      marginTop: 3,
                      marginRight: -4,
                    }}>
                    {' '}
                    $
                  </Text>
                  <Text style={{color: '#6C6C6C', fontSize: 19}}> 25,50</Text>
                  <TouchableOpacity style={{marginLeft: 80}}>
                    <Ionicons name="add" size={24} color="#0FBCF9" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                height: 310,
                width: 185,
                backgroundColor: 'white',
                elevation: 8,
                borderRadius: 10,
                borderColor: 'lightgray',
                borderWidth: 1,
                marginLeft: 15,
              }}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assests/photo.png')}
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: '#6C6C6C',
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingTop: 5,
                  }}>
                  Picolé Gourmet
                </Text>
                <Text
                  style={{
                    color: '#ACACAC',
                    fontSize: 11,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                  }}>
                  Picolé Artesanal totalmente organico com pedaços de frutas
                </Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Text
                    style={{
                      color: '#6C6C6C',
                      marginLeft: 10,
                      fontSize: 15,
                      marginTop: 3,
                      marginRight: -4,
                    }}>
                    {' '}
                    $
                  </Text>
                  <Text style={{color: '#6C6C6C', fontSize: 19}}> 15,50</Text>
                  <TouchableOpacity style={{marginLeft: 80}}>
                    <Ionicons name="add" size={24} color="#0FBCF9" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* ScrollView horizontal Ends */}

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
            Daily Deals
          </Text>
          <TouchableOpacity style={{paddingHorizontal: 20, paddingTop: 2}}>
            <Text style={{color: '#8F92A1', fontSize: 18}}> See All </Text>
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
            source={require('../../assests/phones.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Gustavo Phone Shop
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
              <FontAwesome
                name="map-marker"
                style={{
                  color: '#8F92A1',
                  fontSize: 15,
                  paddingTop: 7,
                  paddingLeft: 8,
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
            source={require('../../assests/phones.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Gustavo Phone Shop
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
              <FontAwesome
                name="map-marker"
                style={{
                  color: '#8F92A1',
                  fontSize: 15,
                  paddingTop: 7,
                  paddingLeft: 8,
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
            source={require('../../assests/phones.png')}
          />

          <View style={{flexDirection: 'column', width: 210}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5B5B5B',
                paddingHorizontal: 10,
                paddingTop: 15,
              }}>
              Gustavo Phone Shop
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
              <FontAwesome
                name="map-marker"
                style={{
                  color: '#8F92A1',
                  fontSize: 15,
                  paddingTop: 7,
                  paddingLeft: 8,
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
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    height: 270,
    width: '100%',
    marginTop: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  sliderImage: {
    height: 300,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 80,
  },
});
export default SearchTab;
