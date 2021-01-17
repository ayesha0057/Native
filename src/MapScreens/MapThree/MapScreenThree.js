import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const MapScreenThree = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: 630, justifyContent: 'flex-end'}}>
        <View
          style={{
            height: 100,
            width: 380,
            elevation: 10,
            backgroundColor: '#2bd37d',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical: 10,
          }}>
          <View style={{marginLeft: 40, flex: 1}}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 22,
                paddingTop: 15,
              }}>
              Order Accepted  
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'white',
                paddingTop: 4,
                paddingRight: 3,
              }}>
              Lorem ipsum sir dolor amet cons ame
            </Text>
          </View>
          <TouchableOpacity style={{paddingLeft: 5}}>
            <Icon
              name="close-circle"
              style={{
                color: 'white',
                fontSize: 27,
                marginRight: 30,
                marginVertical: 22,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MapScreenThree;
