import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
const ClientList = () => {
  return (
    <View style={{backgroundColor: '#f8f7f7', flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#1B36B9',
              fontSize: 16,
              fontWeight: '600',
              paddingHorizontal: 10,
            }}>
            {' '}
            New Clients Requests
          </Text>
          <Text
            style={{
              color: '#8F92A1',
              fontSize: 12,
              paddingHorizontal: 15,
              paddingTop: 4,
            }}>
            {' '}
            See All
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 25,
          }}>
          <View>
            <Image source={require('../../../assests/hat.png')} />
            <Text
              style={{
                color: '#092443',
                fontSize: 16,
                fontWeight: '600',
                alignSelf: 'center',
              }}>
              Margaret
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={require('../../../assests/arrow.png')} />
              <Text style={{color: '#8F92A1'}}> World</Text>
            </View>
          </View>

          <View>
            <Image source={require('../../../assests/red.png')} />
            <Text
              style={{
                color: '#092443',
                fontSize: 16,
                fontWeight: '600',
                alignSelf: 'center',
              }}>
              Ava Max
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={require('../../../assests/arrow.png')} />
              <Text style={{color: '#8F92A1', paddingHorizontal: 7}}>
                Location
              </Text>
            </View>
          </View>
          <View>
            <Image source={require('../../../assests/red.png')} />
            <Text
              style={{
                color: '#092443',
                fontSize: 16,
                fontWeight: '600',
                alignSelf: 'center',
              }}>
              Ava Max
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={require('../../../assests/arrow.png')} />
              <Text style={{color: '#8F92A1', paddingHorizontal: 7}}>
                Location
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#1B36B9',
              fontSize: 18,
              fontWeight: '600',
              paddingHorizontal: 15,
            }}>
            {' '}
            Client List
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../../assests/hat.png')}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#092443', fontSize: 16, fontWeight: '700'}}>
              {' '}
              Margaret Novakowska
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Image
                source={require('../../../assests/map-pin.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 2,
                  marginHorizontal: 5,
                }}
              />
              <Text style={{color: '#8F92A1'}}> World</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../../assests/click.png')}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#092443', fontSize: 16, fontWeight: '700'}}>
              {' '}
              Lorem Ipsum sir dolor
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Image
                source={require('../../../assests/map-pin.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 2,
                  marginHorizontal: 5,
                }}
              />
              <Text style={{color: '#8F92A1'}}>Location</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../../assests/click.png')}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#092443', fontSize: 16, fontWeight: '700'}}>
            Lorem Ipsum sir dolor
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Image
                source={require('../../../assests/map-pin.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 2,
                  marginHorizontal: 5,
                }}
              />
              <Text style={{color: '#8F92A1'}}>Location</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../../assests/click.png')}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#092443', fontSize: 16, fontWeight: '700'}}>
            Lorem Ipsum sir dolor
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Image
                source={require('../../../assests/map-pin.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 2,
                  marginHorizontal: 5,
                }}
              />
              <Text style={{color: '#8F92A1'}}>Location</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../../assests/click.png')}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#092443', fontSize: 16, fontWeight: '700'}}>
            Lorem Ipsum sir dolor
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Image
                source={require('../../../assests/map-pin.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 2,
                  marginHorizontal: 5,
                }}
              />
              <Text style={{color: '#8F92A1'}}>Location</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../../assests/click.png')}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#092443', fontSize: 16, fontWeight: '700'}}>
            Lorem Ipsum sir dolor
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Image
                source={require('../../../assests/map-pin.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 2,
                  marginHorizontal: 5,
                }}
              />
              <Text style={{color: '#8F92A1'}}>Location</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../../assests/click.png')}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#092443', fontSize: 16, fontWeight: '700'}}>
            Lorem Ipsum sir dolor
            </Text>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <Image
                source={require('../../../assests/map-pin.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 2,
                  marginHorizontal: 5,
                }}
              />
              <Text style={{color: '#8F92A1'}}>Location</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ClientList;
