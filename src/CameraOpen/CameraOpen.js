import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const CameraOpen = () => {
  return (
    <View style={{flex: 1, backgrundColor: 'white', justifyContent: 'center'}}>
      <TouchableOpacity style={{alignSelf: 'center'}}>
        <Text> Touch here to open </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraOpen;
