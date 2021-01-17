import React from 'react';
const HorizontalView = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          height: 310,
          width: 185,
          backgroundColor: 'white',
          elevation: 8,
          borderRadius: 10,
          borderColor: 'lightgray',
          borderWidth: 1,
          marginLeft: 15,
        }}>
        <View style={{flex: 2}}>
          <Image
            source={require('../../assests/photo.png')}
            style={{
              flex: 1,
              height: null,
              width: null,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#6C6C6C',
              fontSize: 16,
              paddingHorizontal: 10,
              paddingTop: 5,
            }}>
            Picolé Gourmet
          </Text>
          <Text
            style={{
              color: '#ACACAC',
              fontSize: 11,
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}>
            Picolé Artesanal totalmente organico com pedaços de frutas
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                color: '#6C6C6C',
                marginLeft: 10,
                fontSize: 15,
                marginTop: 3,
                marginRight: -4,
              }}>
              {' '}
              $
            </Text>
            <Text style={{color: '#6C6C6C', fontSize: 19}}> 15,50</Text>
            <TouchableOpacity style={{marginLeft: 80}}>
              <Ionicons name="add" size={24} color="#0FBCF9" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          height: 310,
          width: 185,
          backgroundColor: 'white',
          elevation: 8,
          borderRadius: 10,
          borderColor: 'lightgray',
          borderWidth: 1,
          marginLeft: 15,
        }}>
        <View style={{flex: 2}}>
          <Image
            source={require('../../assests/photo2.png')}
            style={{
              flex: 1,
              height: null,
              width: null,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#6C6C6C',
              fontSize: 16,
              paddingHorizontal: 10,
              paddingTop: 5,
            }}>
            Hamburguer Artesanal
          </Text>
          <Text
            style={{
              color: '#ACACAC',
              fontSize: 11,
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}>
            Picolé Artesanal totalmente organico com pedaços de frutas
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                color: '#6C6C6C',
                marginLeft: 10,
                fontSize: 15,
                marginTop: 3,
                marginRight: -4,
              }}>
              {' '}
              $
            </Text>
            <Text style={{color: '#6C6C6C', fontSize: 19}}> 25,50</Text>
            <TouchableOpacity style={{marginLeft: 80}}>
              <Ionicons name="add" size={24} color="#0FBCF9" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 310,
          width: 185,
          backgroundColor: 'white',
          elevation: 8,
          borderRadius: 10,
          borderColor: 'lightgray',
          borderWidth: 1,
          marginLeft: 15,
        }}>
        <View style={{flex: 2}}>
          <Image
            source={require('../../assests/photo.png')}
            style={{
              flex: 1,
              height: null,
              width: null,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#6C6C6C',
              fontSize: 16,
              paddingHorizontal: 10,
              paddingTop: 5,
            }}>
            Picolé Gourmet
          </Text>
          <Text
            style={{
              color: '#ACACAC',
              fontSize: 11,
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}>
            Picolé Artesanal totalmente organico com pedaços de frutas
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                color: '#6C6C6C',
                marginLeft: 10,
                fontSize: 15,
                marginTop: 3,
                marginRight: -4,
              }}>
              {' '}
              $
            </Text>
            <Text style={{color: '#6C6C6C', fontSize: 19}}> 15,50</Text>
            <TouchableOpacity style={{marginLeft: 80}}>
              <Ionicons name="add" size={24} color="#0FBCF9" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default HorizontalView;
