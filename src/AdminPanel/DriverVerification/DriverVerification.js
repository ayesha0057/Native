import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const DriverVerification = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            color: '#092443',
            fontSize: 25,
            alignSelf: 'center',
            fontWeight: '700',
          }}>
          Submit your Documents{' '}
        </Text>
        <Text
          style={{
            color: '#8F92A1',
            alignSelf: 'center',
            textAlign: 'center',
            paddingHorizontal: 35,
            paddingTop: 10,
          }}>
          Lorem ipsum sir dolor amet consequiteur ame exercitum dolore cos
        </Text>
      </View>
      <View
        style={{
          height: 80,
          width: 320,
          backgroundColor: '#fff',
          borderRadius: 12,
          elevation: 10,
          marginTop: 30,
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assests/done.png')}
          style={{marginLeft: 20, marginTop: 30}}
        />
        <Image
          source={require('../../../assests/walking.png')}
          style={{marginLeft: 10, marginTop: 30}}
        />
        <Text
          style={{
            color: '#8F92A1',
            paddingLeft: 10,
            paddingTop: 30,
            fontSize: 16,
          }}>
          Photo ID{' '}
        </Text>

        <Image
          style={{marginTop: 30, marginLeft: 140}}
          source={require('../../../assests/up.png')}
        />
      </View>
      <TouchableOpacity
        style={{
          height: 80,
          width: 320,
          backgroundColor: '#fff',
          borderRadius: 12,
          elevation: 10,
          marginTop: 30,
          alignSelf: 'center',
          flexDirection: 'row',
          
        }}
        onPress={() => navigation.navigate("SelfieCam")}
        >
        <Image
          source={require('../../../assests/round.png')}
          style={{marginLeft: 20, marginTop: 30}}
        />
        <Image
          source={require('../../../assests/walking.png')}
          style={{marginLeft: 10, marginTop: 30}}
        />
        <Text
          style={{
            color: '#8F92A1',
            paddingLeft: 10,
            paddingTop: 30,
            fontSize: 16,
          }}>
          Take a Selfie{' '}
        </Text>

        <FontAwesome
          name="angle-right"
          color="#d6d8de"
          size={25}
          style={{marginTop: 30, marginLeft: 120}}
        />
      </TouchableOpacity>
      <View
        style={{
          height: 80,
          width: 320,
          backgroundColor: '#fff',
          borderRadius: 12,
          elevation: 10,
          marginTop: 30,
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assests/round.png')}
          style={{marginLeft: 20, marginTop: 30}}
        />
        <Image
          source={require('../../../assests/walking.png')}
          style={{marginLeft: 10, marginTop: 30}}
        />
        <Text
          style={{
            color: '#8F92A1',
            paddingLeft: 10,
            paddingTop: 30,
            fontSize: 16,
          }}>
Add Insurance
        </Text>

        <FontAwesome
          name="angle-right"
          color="#d6d8de"
          size={25}
          style={{marginTop: 30, marginLeft: 120}}
        />
      </View>
      <TouchableOpacity style={{ width:380, height:60, backgroundColor:"#17bcf9", borderRadius:9,  alignSelf:"center", marginTop:30, justifyContent:"center"}}
     
     >
       <Text style={{color:"white", fontSize:23, alignSelf:"center",textTransform:"uppercase"}} >Next</Text>
     </TouchableOpacity>

     <TouchableOpacity style={{alignSelf:"center", marginTop:20}}>

       <Text style={{color:"#8F92A1", textDecorationLine:"underline"}}> Why is it Needed?</Text>
     </TouchableOpacity>
    </View>
  );
};

export default DriverVerification;
