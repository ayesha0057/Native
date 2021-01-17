import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import FieldSet from 'react-native-fieldset';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
const PaymentDeposit = () => {
  return (
    <View style={{backgroundColor: '#f7f6f6', flex: 1}}>
      <KeyboardAwareScrollView>
      <View style={{marginTop: 40}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              flex: 3,
              color: '#D6D8DE',
              fontSize: 22,
              fontWeight: '700',
              marginLeft: 10,
            }}>
            {' '}
            Payment method
          </Text>
          <TouchableOpacity style={{flex: 1, marginLeft: 40, marginTop: 5}}>
            <Text
              style={{
                color: '#0FBCF9',
                fontSize: 17,
                fontWeight: '600',
                textTransform: 'uppercase',
              }}>
              {' '}
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Image
            style={{marginLeft: 20}}
            source={require('../../assests/Shape.png')}
          />
          <Text
            style={{
              color: '#092443',
              fontSize: 16,
              marginLeft: 20,
              marginTop: -4,
            }}>
            {' '}
            **** **** **** 4747
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#D6D8DE',
            fontSize: 22,
            fontWeight: '700',
            marginLeft: 10,
            marginTop: 20,
          }}>
          {' '}
          Transaction details
        </Text>
      </View>
      <View
        style={{
          height: 60,
          width: 380,
          borderRadius: 8,
          borderColor: '#0FBCF9',
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 25,
        }}>
         
        <Text
          style={{
            backgroundColor: '#f7f6f6',
            marginTop: -11,
            width: 60,
            marginLeft: 20,
            padding: 2,
            color: '#0FBCF9',
          }}>
          Amount
        </Text>

        <View style={{flexDirection:"row"}}>
        <Text style={{color:"#D6D8DE", fontSize:18, alignSelf:"center", paddingHorizontal:10}}> $</Text>
        <TextInput style={{ height:40, width:120, flex:1 , color:"#092443", fontSize:16}}> </TextInput>

        <TouchableOpacity style={{flex: 1, marginLeft:30, marginTop: 5}}>
            <Text
              style={{
                color: '#0FBCF9',
                fontSize: 15,
                fontWeight: '700',
                textTransform: 'uppercase',
              }}>
             change currency
            </Text>
          </TouchableOpacity>
        </View>
      </View>
   
     <TouchableOpacity
        style={{
          width: 380,
          height: 55,
          backgroundColor: '#17bcf9',
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 280,
          justifyContent:"center"
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'center',
  
            textTransform: 'uppercase',
           
          }}>
        confirm amount
        </Text>
      </TouchableOpacity>
      </KeyboardAwareScrollView>
      
    </View>
  );
};

export default PaymentDeposit;
