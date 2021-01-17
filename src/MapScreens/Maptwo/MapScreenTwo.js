import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const MapScreenTwo = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: 630, justifyContent: 'flex-end'}}>
        <View
          style={{
            height: 100,
            width: 380,
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical: 10,
          }}>
          <Image
            source={require('../../../assests/avatar.png')}
            style={{
              height: 70,
              width: 70,
              marginLeft: 30,
              marginTop: 10,
            }}
          />
          <View style={{width: 270, marginLeft: 10}}>
            <Text
              style={{
                color: '#092443',
                fontWeight: '700',
                fontSize: 20,
                paddingTop: 15,
              }}>
              {' '}
              Myung Philippe  
            </Text>

            <TouchableOpacity
              style={{paddingLeft: 5, flexDirection: 'row', width: 220}}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#a0a0a0',
                  paddingTop: 4,
                  paddingRight: 3,
                }}>
                {' '}
                consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo
              </Text>
              <Icon
                name="close-circle"
                style={{
                  color: '#d8d8d8',
                  fontSize: 27,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MapScreenTwo;
