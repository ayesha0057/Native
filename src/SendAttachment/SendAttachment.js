import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const SendAttachment = () => {
  return (
    <View style={{backgroundColor: '#f8f7f7', flex: 1}}>
      <KeyboardAwareScrollView>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              marginTop: 200,
              marginLeft: 20,
              elevation: 15,
              borderTopRightRadius: 12,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <Text style={{color: '#092443', fontSize: 16, alignSelf: 'center'}}>
              {' '}
              Driver, Jorel are avaliable now!
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              marginTop: 20,
              marginLeft: 20,
              elevation: 15,
              borderTopRightRadius: 12,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <Text style={{color: '#092443', fontSize: 16, alignSelf: 'center'}}>
              {' '}
              Hello, how can i help you today?
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <View
            style={{
              paddingVertical: 20,
              paddingHorizontal: 20,
              backgroundColor: '#0FBCF9',
              marginTop: 20,
              marginRight: 20,
              elevation: 15,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              maxWidth: 340,
            }}>
            <Text style={{color: '#fff', fontSize: 16, alignSelf: 'center'}}>
              Show me Nikolas email from last month, the one which talk about
              the Summer Design Event in Seattle
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              marginTop: 20,
              marginLeft: 20,
              elevation: 15,
              borderTopRightRadius: 12,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <Text style={{color: '#092443', fontSize: 16, alignSelf: 'center'}}>
              {' '}
              Sure, i’ll send it now!
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              marginTop: 20,
              marginLeft: 20,
              elevation: 15,
              borderTopRightRadius: 12,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <Text style={{color: '#092443', fontSize: 16, alignSelf: 'center'}}>
              {' '}
              Sure, i’ll send it now!
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              marginTop: 20,
              marginLeft: 20,
              elevation: 15,
              borderTopRightRadius: 12,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <Text style={{color: '#092443', fontSize: 16, alignSelf: 'center'}}>
              {' '}
              Sure, i’ll send it now!
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 200,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{marginTop: 20, marginLeft: 30, paddingHorizontal: 10}}
            source={require('../../assests/circle.png')}
          />

          <View
            style={{
              borderColor: '#F0F0F0',
              borderWidth: 1.5,
              flex: 3,
              height: 40,
              marginLeft: 10,
              borderRadius: 30,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <TextInput
              placeholder="Type your message here"
              placeholderTextColor="#D6D8DE"
            />
          </View>

          <View style={{flex: 1, marginTop: 15, marginLeft: 30}}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#0FBCF9',
                borderRadius: 50,
                justifyContent: 'center',
              }}>
              <Feather
                size={20}
                color="#fff"
                style={{alignSelf: 'center'}}
                name="mic"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'space-evenly',
          }}>
          <View>
            <View
              style={{
                justifyContent: 'center',

                height: 45,
                width: 45,
                backgroundColor: '#dbf5fe',
                borderRadius: 50,
              }}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../assests/land.png')}
              />
            </View>
            <Text style={{color: '#A0A0A0', paddingTop: 3}}> Image</Text>
          </View>

          <View>
            <View
              style={{
                justifyContent: 'center',

                height: 45,
                width: 45,
                backgroundColor: '#dbf5fe',
                borderRadius: 50,
              }}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../assests/location.png')}
              />
            </View>
            <Text style={{color: '#A0A0A0', paddingTop: 3}}> Image</Text>
          </View>
          <View>
            <View
              style={{
                justifyContent: 'center',

                height: 45,
                width: 45,
                backgroundColor: '#dbf5fe',
                borderRadius: 50,
              }}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../assests/video.png')}
              />
            </View>
            <Text style={{color: '#A0A0A0', paddingTop: 3}}> Image</Text>
          </View>
          <View>
            <View
              style={{
                justifyContent: 'center',

                height: 45,
                width: 45,
                backgroundColor: '#dbf5fe',
                borderRadius: 50,
              }}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../assests/person.png')}
              />
            </View>
            <Text style={{color: '#A0A0A0', paddingTop: 3}}> Image</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SendAttachment;
