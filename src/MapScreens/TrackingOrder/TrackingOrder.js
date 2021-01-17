import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Feather from "react-native-vector-icons/Feather"
const TrackingOrder = () => {
  return (
    <View style={{backgroundColor:"white", flex:1}}>
      
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

           <View style={{  alignSelf:"center", marginVertical:20}}>

           <Feather
            name="clock"
            size={55}
            style={{color:"#1b36b9",}}
            />
            <Text style={{color:"#8F92A1"}}> 45 min </Text>
           </View>


           <View
          style={{
            height: 90,
            width: 330,
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 12,
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 20,
            marginVertical:10
          }}>
          <Image
            style={{height: 90, width: 130 ,}}
            source={require('../../../assests/Rectangle6.png')}
          />

          <View style={{flexDirection: 'column', width: 200 }}>
            <Text
              style={{
                fontSize: 22,
                color: '#5B5B5B',
                paddingHorizontal: 16,
                paddingTop: 15,
              }}>
              
          Queen's Village
            </Text>

            <View
              style={{flexDirection: 'row', paddingLeft: 10,  marginTop: 10}}>
               <Image
         style={{height: 12, width: 12 }}
         source={require('../../../assests/vector2.png')}
     />
              <Text
                style={{
                  fontSize: 14,
                  color: '#8D8D8D',
                  alignSelf: 'center',
                  fontWeight: 'normal',
                  lineHeight: 14,
                  paddingLeft: 8,
                }}>
Share Location
              </Text>
            </View>
          </View>
        </View>
           

        <View
            style={{
              flexDirection: 'row',
              marginVertical: 25,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={{
               
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
              Driver profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: '#0FBCF9',
                  fontSize: 20,
                  fontWeight: '500',
                  letterSpacing: 0.5,
                  alignSelf: 'center',
                  paddingTop: 5,
                }}>
             Package Details
              </Text>
            </TouchableOpacity>
          </View> 
            </View>
            </View>

    </View>
  )
}

export default TrackingOrder
