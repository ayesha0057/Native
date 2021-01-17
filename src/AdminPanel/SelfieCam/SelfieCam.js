import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const SelfieCam = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground
      style={{flex:1}}
      source={require("../../../assests/photo-blur.png")}
      >
<Text style={{color:"#fff", fontSize:18, alignSelf:"center", textAlign:"center", marginTop:90, paddingHorizontal:27}}> Place the code in the center of the
square. it will be scanned automatically.</Text>


<Image 
 
 style={{alignSelf:"center", marginTop:30}}
source={require("../../../assests/Intersect.png")}
/>

<TouchableOpacity style={{width:100, height:100, borderColor:"#9b9289" , borderWidth:1, borderRadius:50, alignSelf:"center", marginTop:40, justifyContent:"center"}}
              onPress={() => navigation.navigate("TakeSelfie")}

>

<View style={{width:80, height:80, borderColor:"#9b9289" , borderWidth:5, borderRadius:50, alignSelf:"center", backgroundColor:"red"}}>


</View>
</TouchableOpacity>
      </ImageBackground>
      
    </View>
  )
}

export default SelfieCam
