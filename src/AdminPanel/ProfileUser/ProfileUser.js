import React from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileUser = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#f8f7f7'}}>
<ScrollView>

<View style={{flexDirection:"row", marginTop:30,marginLeft:60}}>
          <Image 
          source={require("../../../assests/click.png")}
      style={{marginRight:14, width:75, height:75}}
          />
           <Image  source={require("../../../assests/check2.png")}
           style={{marginLeft:-30,}}
           />
         
          <View style={{marginLeft:30}}>
            <Text style={{color:"#2E3034", fontSize:22,width:130, fontWeight:"700", lineHeight:25}}>Margaret Novakowska</Text>
           <View style={{flexDirection:"row", marginTop:10}}>
           <Image
           resizeMode="contain"
           style={{width:15, height:15, marginTop:3, }}
            source={require("../../../assests/map-pin.png")}
            />
            <Text style={{color:"#8F92A1", marginLeft:7}}>Rio de Janeiro, Brazil</Text>
           
           </View>
          </View>
        </View>
        <View style={{alignSelf:"center", marginHorizontal:45, marginTop:25, }}>

          <Text style={{width:35, height:2, backgroundColor:"#8F92A1", marginLeft:25,marginVertical:10, opacity:0.5}}></Text>
          <Text style={{color:"#8F92A1", paddingHorizontal:25}}>
          Hi! I am a Margaret, I really like traveling to really different countries, most often I am looking for flats that have very friendly landlords in a good location.
          </Text>
          <View style={{flexDirection:"row", marginTop:20, marginLeft:18,}}>
            <Image 
            style={{marginHorizontal:5, marginTop:3}}
            source={require("../../../assests/award.png")}
            />
            <Text style={{color:"#8F92A1", fontSize:15,}}>Lorem Ipsum dolor</Text>
          </View>
          <View style={{flexDirection:"row", marginTop:20, marginLeft:20,}}>
            <Image 
            style={{marginHorizontal:6, marginTop:3}}
            source={require("../../../assests/Comment.png")}
            />
            <Text style={{color:"#8F92A1", fontSize:15,}}>Speaks in Deutsch, English, Russian</Text>
          </View>
        </View>
        <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: 180,
                    paddingVertical: 15,
                    marginLeft:65
                  }}>
                  <FontAwesome
                    name="star"
                    style={{
                      color: '#f4d36e',
                      fontSize: 16,
                      paddingTop: 1,
                      paddingLeft: 7,
                    }}
                  />
                  <FontAwesome
                    name="star"
                    style={{
                      color: '#f4d36e',
                      fontSize: 16,
                      paddingTop: 1,
                      paddingLeft: 7,
                    }}
                  />
                  <FontAwesome
                    name="star"
                    style={{
                      color: '#f4d36e',
                      fontSize: 16,
                      paddingTop: 1,
                      paddingLeft: 7,
                    }}
                  />
                  <FontAwesome
                    name="star"
                    style={{
                      color: '#f4d36e',
                      fontSize: 16,
                      paddingTop: 1,
                      paddingLeft: 7,
                    }}
                  />
                  <FontAwesome
                    name="star"
                    style={{
                      color: '#f4d36e',
                      fontSize: 16,
                      paddingTop: 1,
                      paddingLeft: 7,
                    }}
                  />

                  <Text
                    style={{
                      paddingLeft: 7,
                      fontSize: 15,
                      fontWeight: '700',
                      paddingTop: -1,
                    }}>
                    {' '}
                    5,0{' '}
                  </Text>

                  <Text style={{fontSize: 13, color: '#8F92A1', paddingTop: 1}}>
                    {' '}
                    ( 433 )
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical:10 }}>
        <Text
          style={{
            color: '#092443',
            fontWeight: '700',
            fontSize: 18,
            paddingHorizontal: 20,
          }}>
          {' '}
          Recent Orders{' '}
        </Text>
        <TouchableOpacity style={{paddingLeft: 150}}>
          <Text style={{color: '#8F92A1'}}> See All </Text>
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
              source={require('../../../assests/phoness.png')}
            />

            <View style={{flexDirection: 'column', width: 210}}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#5B5B5B',
                  paddingHorizontal: 10,
                  paddingTop: 15,
                }}>
             Iphone X
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
                <Image
                  source={require('../../../assests/loco.png')}
                  style={{
                    marginTop: 7,
                    marginLeft: 4,
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
          
</ScrollView>
      
    </View>
  )
}

export default ProfileUser
