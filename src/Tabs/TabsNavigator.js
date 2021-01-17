import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Home from './../Home/Home';
import ShopProfile from './../ShopProfile/ShopProfile';
import SearchTab from './../SearchTab/SearchTab';
import OrderHistory from './../OrderHistory/OrderHistory';
import CameraOpen from './../CameraOpen/CameraOpen';
const Tab = createBottomTabNavigator();
const ACTIVE_TAB_COLOR = '#0FBCF9';
const INACTIVE_TAB_COLOR = '#8F92A1';
const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0FBCF9',
        inactiveTintColor: '#8F92A1',
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home-outline"
              size={23}
              focused={focused}
              color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
            />
          ),
        }}
      />

      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="inbox"
              size={23}
              focused={focused}
              color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CameraOpen"
        component={CameraOpen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 55,
                backgroundColor: '#17bcf9',
                marginBottom: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Feather
                name="plus"
                size={30}
                focused={focused}
                color="#fff"

                // color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTabScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="search"
              size={28}
              focused={focused}
              color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ShopProfile"
        component={ShopProfilStackTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person-outline"
              size={23}
              focused={focused}
              color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const HomeStack = createStackNavigator();

function HomeStackTab() {
  return (
    <HomeStack.Navigator initialRouteName="Feed">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({navigation, route}) => ({
          headerTintColor: 'white',
          // headerTransparent:true,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: '#8F92A1',
            paddingLeft: 160,
            fontSize: 25,
          },
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity style={{color: 'gray'}}>
              <FontAwesome
                name="bars"
                style={{
                  color: '#576574',
                  fontSize: 22,
                  paddingRight: 15,
                  paddingTop: 10,
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}

const ShopStack = createStackNavigator();
function ShopProfilStackTab() {
  return (
    <ShopStack.Navigator initialRouteName="Feed">
      <ShopStack.Screen
        name="ShopProfile"
        component={ShopProfile}
        options={({navigation, route}) => ({
          headerTintColor: 'white',
          headerTransparent: true,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: 'white',
            paddingLeft: 160,
            fontSize: 25,
          },
          title: 'Shop',
          headerRight: () => (
            <TouchableOpacity style={{color: 'gray'}}>
              <Feather
                name="heart"
                style={{
                  color: 'white',
                  fontSize: 25,
                  paddingRight: 15,
                  paddingTop: 10,
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </ShopStack.Navigator>
  );
}

const SearchStack = createStackNavigator();
function SearchTabScreen() {
  return (
    <SearchStack.Navigator initialRouteName="Feed">
      <SearchStack.Screen
        name="SearchTab"
        component={SearchTab}
        options={({navigation, route}) => ({
          headerTintColor: 'white',
          headerTransparent: true,
          headerStyle: {
            elevation: 0,
          },
          headerTitleStyle: {
            color: 'white',
            paddingLeft: 160,
            fontSize: 25,
          },
          title: '',
          headerRight: () => (
            <TouchableOpacity style={{color: 'gray'}}>
              <Feather
                name="heart"
                style={{
                  color: 'white',
                  fontSize: 25,
                  paddingRight: 15,
                  paddingTop: 10,
                }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <View
              style={{
                height: 50,
                width: 300,
                borderColor: 'lightgray',
                borderWidth: 0.2,
                borderRadius: 10,
                flexDirection: 'row',
                elevation: 2,
                backgroundColor: 'white',
                marginLeft: 50,
                marginTop: 20,
              }}>
              <EvilIcons
                name="search"
                style={{
                  fontSize: 30,
                  paddingTop: 13,
                  paddingLeft: 20,
                  color: '#8f92a1',
                }}
              />
              <TextInput placeholder="Stores" />
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={{color: 'gray'}}>
              <FontAwesome
                name="bars"
                style={{
                  color: '#576574',
                  fontSize: 22,
                  paddingRight: 15,
                  paddingTop: 10,
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </SearchStack.Navigator>
  );
}

const OderHistoryStack = createStackNavigator();

function OrderHistoryTab() {
  return (
    <OderHistoryStack.Navigator initialRouteName="Feed">
      <OderHistoryStack.Screen
        name="Home"
        component={OrderHistory}
        options={({navigation, route}) => ({
          headerTintColor: 'white',
          // headerTransparent:true,
          headerStyle: {
            elevation: 0,
            backgroundColor: '#f6f5f5',
          },
          headerTitleStyle: {
            color: '#8F92A1',
            paddingLeft: 110,
            fontSize: 25,
          },
          title: 'Order History',
          headerRight: () => (
            <TouchableOpacity style={{color: 'gray'}}>
              <FontAwesome
                name="bars"
                style={{
                  color: '#576574',
                  fontSize: 22,
                  paddingRight: 15,
                  paddingTop: 5,
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </OderHistoryStack.Navigator>
  );
}
