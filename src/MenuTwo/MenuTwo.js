import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Item, Label} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';
const MenuTwo = () => {
  const [ModalVisibalility, setModalVisibalility] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Modal visible={ModalVisibalility}>
        <View style={{flexDirection: 'row', marginTop: 20, height: 80}}>
          <Icon
            onPress={() => setModalVisibalility(false)}
            name="close-outline"
            style={{
              color: 'midnightblue',
              fontSize: 32,
              // paddingTop:
              paddingLeft: 30,
            }}
          />
          <Text
            style={{
              color: '#092443',
              // paddingTop: 10,
              fontSize: 25,
              paddingLeft: 120,
            }}>
            Menu
          </Text>
        </View>

        <View
          style={{
            height: 85,
            width: 390,
            backgroundColor: 'white',
            borderRadius: 9,
            alignSelf: 'center',
            marginTop: 30,
            elevation: 30,
            borderColor: 'lightgray',
            borderWidth: 0.4,
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#3E4462',
                fontWeight: '500',
                fontSize: 20,
                paddingHorizontal: 20,
                paddingTop: 10,
              }}>
              Notifications
            </Text>

            <Text
              style={{
                color: 'darkgray',
                fontSize: 18,
                paddingHorizontal: 15,
                paddingTop: 5,
              }}>
              {' '}
              Keep your notifications on or off
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              marginBottom: 40,
              marginRight: 10,
            }}>
            <ToggleSwitch
              isOn={true}
              onColor="whitesmoke"
              offColor="skyblue"
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="large"
              thumbOnStyle={{color: 'red', backgroundColor: 'deepskyblue'}}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 85,
            width: 390,
            backgroundColor: 'white',
            borderRadius: 9,
            alignSelf: 'center',
            marginTop: 30,
            elevation: 30,
            borderColor: 'lightgray',
            borderWidth: 0.4,
          }}>
          <Text
            style={{
              color: '#3E4462',
              fontWeight: '500',
              fontSize: 20,
              paddingHorizontal: 20,
              paddingTop: 25,
            }}>
            Profile
          </Text>
          <View
            style={{
              alignSelf: 'flex-end',
              paddingBottom: 40,
              marginTop: -30,
            }}>
            <FontAwesome
              name="angle-right"
              style={{
                color: 'lightgray',
                fontSize: 35,

                paddingRight: 20,
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 85,
            width: 390,
            backgroundColor: 'white',
            borderRadius: 9,
            alignSelf: 'center',
            marginTop: 30,
            elevation: 30,
            borderColor: 'lightgray',
            borderWidth: 0.4,
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                color: '#3E4462',
                fontWeight: '500',
                fontSize: 20,
                paddingHorizontal: 20,
                paddingTop: 25,
              }}>
              Admin Panel
            </Text>
            <View
              style={{
                alignSelf: 'flex-end',
                paddingBottom: 40,
                marginTop: -30,
              }}>
              <FontAwesome
                name="angle-right"
                style={{
                  color: 'lightgray',
                  fontSize: 35,

                  paddingRight: 20,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MenuTwo;
