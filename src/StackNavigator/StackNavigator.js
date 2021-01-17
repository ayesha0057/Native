import React from 'react';
const Stack = createStackNavigator();
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import RecoveryPassword from '../RecoveryPassword/RecoveryPassword';
import ResetPassword from '../ResetPassword/ResetPassword';
import ConfirmPhoneNo from '../ConfirmPhoneNo/ConfirmPhoneNo';
import VerifyNo from '../Verify/VerifyNo';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import TurnOnButton from '../MapScreens/TurnOnButton/TurnOnButton';
import MapScreenOne from '../MapScreens/MapOne/MapScreenOne';
import MapScreenTwo from '../MapScreens/Maptwo/MapScreenTwo';
import MapScreenThree from '../MapScreens/MapThree/MapScreenThree';
import DeliveryNear from '../MapScreens/DeliveryNear/DeliveryNear';
import IncomingOrder from '../MapScreens/IncomingOrders/IncomingOrder';
import DeliveryRequested from '../MapScreens/DeliveryRequested/DeliveryRequested';
import TrackingOrder from '../MapScreens/TrackingOrder/TrackingOrder';
import DeclineReport from '../MapScreens/DeclineReport/DeclineReport';
import DeclineSubmitted from '../MapScreens/DeclineSubmitted/DeclineSubmitted';
import NewShop from '../NewShop/NewShop';
import ShopList from '../ShopList/ShopList';
import DeliverySummary from '../DeliverySummary/DeliverySummary';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';
import MenuTwo from '../MenuTwo/MenuTwo';
import PublicProfile from '../PublicProfile/PublicProfile';
import OrderItems from '../OrderItems/OrderItems';
import CheckoutOption from '../CheckOut/CheckoutOption';
import DeliveryAddress from '../DeliveryAddress/DeliveryAddress';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import CardRegister from '../CardRegister/CardRegister';
import PaymentDeposit from '../PaymentDesposit/PaymentDeposit';
import PaymentWidthdraw from '../PaymentWidthdraw/PaymentWidthdraw';
import ChatText from '../ChatText/ChatText';
import SendAttachment from '../SendAttachment/SendAttachment';
import ContactSupport from '../ContactSupport/ContactSupport';
import GettingStarted from '../AdminPanel/GettingStarted/GettingStarted';
import AdminLogin from '../AdminPanel/AdminLogin/AdminLogin';
import DriverVerification from '../AdminPanel/DriverVerification/DriverVerification';
import SelfieCam from '../AdminPanel/SelfieCam/SelfieCam';
import TakeSelfie from '../AdminPanel/TakeSelfie/TakeSelfie';
import ConfirmScreen from '../AdminPanel/ConfirmScreen/ConfirmScreen';
import DashboardMain from '../AdminPanel/DashboardMain/DashboardMain';
import OrderDetails from '../AdminPanel/OrderDetails/OrderDetails';
import Finances from '../AdminPanel/Finances/Finances';
import Statistics from '../AdminPanel/Statistics/Statistics';
import ClientList from '../AdminPanel/ClientList/ClientList';
import OrderHistory from '../AdminPanel/OrderHistory/OrderHistory';
import DriverProfile from '../AdminPanel/DriverProfile/DriverProfile';
import ProfileUser from '../AdminPanel/ProfileUser/ProfileUser';
import Review from '../AdminPanel/Review/Review';
import CustomerSupport from '../AdminPanel/CustomerSupport/CustomerSupport';
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        gestureDirection: 'horizontal',
      }}>
      {/* login and register Screens */}

      {/* <Stack.Screen
            name="in"
            component={Main}
            options={{
              headerTintColor: 'white',
              headerShown: false,
              headerTitleStyle: {
                color: '#17bcf9',
              },
            }}
          /> */}
      {/* 
          <Stack.Screen
            options={{
              headerTintColor: 'gray',
              headerStyle:{
                backgroundColor:"white",
                elevation:0
                            },
              headerTitleStyle: {
                color: '#abadb8',
                marginLeft: 105,
                fontSize:25
              },
              title: 'Login',
            }}

            name="Login"
            component={Login}
          />
 <Stack.Screen
            options={{
              headerTintColor: 'gray',
              headerStyle:{
                backgroundColor:"white",
                elevation:0
                
                            },
              headerTitleStyle: {
                color: '#abadb8',
                marginLeft: 90,
                fontSize:25
              },
              title: 'Register',
            }}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{
              headerTintColor: 'gray',
              headerStyle:{
                backgroundColor:"white",
                elevation:0
                            },
              headerTitleStyle: {
                color: '#abadb8',
                marginLeft: 30,
                fontSize:25
                
              },
              title: 'Recovery Password',
            }}
            name="RecoveryPassword"
            component={RecoveryPassword}
          />
          <Stack.Screen
            options={{
              headerTintColor: 'gray',
              headerStyle:{
                backgroundColor:"white",
                elevation:0
                            },
              headerTitleStyle: {
                color: '#abadb8',
                marginLeft: 45,
                fontSize:25
                
              },
              title: 'Reset Password',
            }}
            name="ResetPassword"
            component={ResetPassword}
          />
           <Stack.Screen
            options={{
              headerTintColor: 'gray',
              headerStyle:{
                backgroundColor:"white",
                elevation:0
                            },
              headerTitleStyle: {
                color: '#abadb8',
                marginLeft: 15,
                fontSize:25
                
              },
              title: "Confirm Phone Number",
            }}
            name="ConfirmPhoneNo"
            component={ConfirmPhoneNo}
          />
          <Stack.Screen
            options={{
              headerTintColor: 'gray',
              headerStyle:{
                backgroundColor:"white",
                elevation:0
                            },
              headerTitleStyle: {
                color: '#abadb8',
                marginLeft: 15,
                fontSize:25
                
              },
              title: " Verification Number",
            }}
            name="VerifyNo"
            component={VerifyNo}
          /> */}

      {/* LOgin And Register ends here */}

      {/* Profile and Menu */}
      {/* <Stack.Screen
            
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: 'whitesmoke',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
            paddingLeft:140,
                fontSize: 25,
              },
              title: ' Profile',
             
              headerRight: () => (
            
                <TouchableOpacity
                style={{color:"pink"}}
                >
                  <FontAwesome
                  name="bars"
                  style={{
                    color: '#576574',
                    fontSize: 25,
                    paddingRight: 15,
                    
                  }}
                
                />
                </TouchableOpacity>
                        
              ),
            })}
            name="Profile"
            component={Profile}
          /> */}
      {/* <Stack.Screen
            options={{
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
                alignSelf: 'center',
                fontSize: 25,
              },
              title: ' Menu',
            }}
            name="Menu"
            component={Menu}
          /> */}

      {/* <Stack.Screen
            
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerTransparent:true,
              headerStyle: {
                backgroundColor: 'whitesmoke',
                elevation: 0,
              },
              headerTitleStyle: {
                color: '#092443',
            paddingLeft:155,
                fontSize: 25,
              },
              title: "Offline",
             
              headerRight: () => (
                <TouchableOpacity
                style={{color:"pink"}}
                >
                  <FontAwesome
                  name="bars"
                  style={{
                    color: '#576574',
                    fontSize: 25,
                    paddingRight: 15,
                    
                  }}
                
                />
                </TouchableOpacity>
                        
              ),
            })}
            name="TurnOnButton"
            component={TurnOnButton}
          />  */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerTransparent:true,
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
              title: '',
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
                      fontSize: 25,
                      paddingRight: 15,
                      paddingTop: 10,
                    }}
                  />
                </TouchableOpacity>
              ),
            })}
            name="MapScreenOne"
            component={MapScreenOne}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerTransparent:true,
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
              title: '',
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
                      fontSize: 25,
                      paddingRight: 15,
                      paddingTop: 10,
                    }}
                  />
                </TouchableOpacity>
              ),
            })}
            name="MapScreenTwo"
            component={MapScreenTwo}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerTransparent: true,
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
              title: '',
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
                      fontSize: 25,
                      paddingRight: 15,
                      paddingTop: 10,
                    }}
                  />
                </TouchableOpacity>
              ),
            })}
            name="MapScreenThree"
            component={MapScreenThree}
          /> */}

      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: 'midnightblue',
            paddingLeft:140,
                fontSize: 25,
              },
              title: "Near You",
              
            })}
            name="DeliveryNear"
            component={DeliveryNear}
          />  */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerTransparent:true,
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              
              },
   
              headerTitleStyle: {
                color: 'midnightblue',
            paddingLeft:100,
                fontSize: 25,
              },
              title: "Incoming Orders",
             
            })}
            name="IncomingOrder"
            component={IncomingOrder}
          />  */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerTransparent:true,
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: 'midnightblue',
            paddingLeft:80,
                fontSize: 25,
              },
              title: "Delivery Requested",
            })}
            name="DeliveryRequested"
            component={DeliveryRequested}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerTransparent:true,
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: 'midnightblue',
            paddingLeft:80,
                fontSize: 25,
              },
              title: "",
              
            })}
            name="TrackingOrder"
            component={TrackingOrder}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerTransparent:true,
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
            paddingLeft:120,
                fontSize: 25,
              
              },
              title: "Decline Report",
              
            })}
            name="DeclineReport"
            component={DeclineReport}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#092443',
            paddingLeft:90,
                fontSize: 25,
              
              },
              title: "Decline Submitted",
              
            })}
            name="DeclineSubmitted"
            component={DeclineSubmitted}
          />  */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              
              headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
            alignSelf:"center",
                fontSize: 25,
              
              },
              title: "Shop",
              
            })}
            name="NewShop"
            component={NewShop}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              
              headerStyle: {
                backgroundColor: '#f9f8f8',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#092443',
         paddingLeft:160,
                fontSize: 25,
              
              },
              title: "Order",
              headerRight: () => (
            
                <TouchableOpacity
                style={{color:"pink", paddingRight:20}}
                >
                  <Text style={{color:"#8F92A1"}}>3 Items</Text>
                </TouchableOpacity>
                        
              ),
            })}
            name="ShopList"
            component={ShopList}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              // headerTransparent:tru
              headerStyle: {
                backgroundColor: '#f4f3f3',
                elevation: 0,
              
              },
   
              headerTitleStyle: {
                color: '#092443',
         paddingLeft:90,
                fontSize: 25,
              
              },
              title: "Delivery Summary",
              headerRight: () => (
            
                <TouchableOpacity
                style={{color:"pink", paddingRight:20}}
                >
                  <Text style={{color:"#8F92A1"}}>3 Items</Text>
                </TouchableOpacity>
                        
              ),
            })}
            name="DeliverySummary"
            component={DeliverySummary}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              // headerTransparent:tru
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              
              },
   
              headerTitleStyle: {
                color: '#092443',
         paddingLeft:135,
                fontSize: 25,
              
              },
              title: "Success",
              headerRight: () => (
            
                <TouchableOpacity
                style={{color:"pink", paddingRight:20}}
                >
                  <Text style={{color:"#8F92A1"}}>3 Items</Text>
                </TouchableOpacity>
                        
              ),
            })}
            name="OrderConfirmation"
            component={OrderConfirmation}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              // headerTransparent:tru
              headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0,
              
              },
   
              headerTitleStyle: {
                color: '#092443',
         paddingLeft:150,
                fontSize: 25,
              
              },
              title: "Menu",
             
            })}
            name="MenuTwo"
            component={MenuTwo}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
            paddingLeft:140,
                fontSize: 25,
              },
              title: ' Profile',
             
              headerRight: () => (
            
                <TouchableOpacity
                style={{color:"pink"}}
                >
                  <FontAwesome
                  name="bars"
                  style={{
                    color: '#576574',
                    fontSize: 25,
                    paddingRight: 15,
                    
                  }}
                
                />
                </TouchableOpacity>
                        
              ),
            })}
            name="PublicProfile"
            component={PublicProfile}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
            paddingLeft:160,
                fontSize: 25,
              },
              title: 'Order',
             
              headerRight: () => (
                <TouchableOpacity
                style={{paddingRight:20}}
                >
                  <Text style={{color:"#8F92A1"}}>3 Items</Text>
                </TouchableOpacity>                       
              ),
            })}
            name="OrderItems"
            component={OrderItems}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
       alignSelf:"center",
                fontSize: 25,
              },
              title: 'Checkout',
            })}
            name="CheckoutOption"
            component={CheckoutOption}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
      alignSelf:"center",
                fontSize: 25,
              },
              title: 'Delivery Address',
             
             
            })}
            name="DeliveryAddress"
            component={DeliveryAddress}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
      alignSelf:"center",
                fontSize: 25,
              },
              title: 'Payment Method',
             
             
            })}
            name="PaymentMethod"
            component={PaymentMethod}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
      alignSelf:"center",
                fontSize: 25,
              },
              title: '',
             
             
            })}
            name="CardRegister"
            component={CardRegister}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
      alignSelf:"center",
                fontSize: 25,
              },
              title: 'Deposit',
             
             
            })}
            name="PaymentDeposit"
            component={PaymentDeposit}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#f6f5f5',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
      alignSelf:"center",
                fontSize: 25,
              },
              title: 'Request Widthdraw',
             
             
            })}
            name="PaymentWidthdraw"
            component={PaymentWidthdraw}
          /> */}
      {/* <Stack.Screen           
            options={({ navigation, route }) => ({
              headerTintColor: 'gray',
              headerStyle: {
                backgroundColor: '#fff',
                elevation: 0,
              },
              headerTitleStyle: {
                color: 'midnightblue',
      alignSelf:"center",
                fontSize: 25,
              },
              title: '',
              headerLeft: () => (
            
                <View style={{flexDirection:"row", marginLeft:20, }}>
                  <Image style={{height:45, width:45}}
                  source={require("../../assests/girl.png")}
                  />
                  <View style={{ marginLeft:10}}>
                    <Text style={{color:"#092443", fontSize:15, fontWeight:"700"  }}> Esse Aute</Text>
                    <Text style={{color:"#8F92A1"}}> Online </Text>
                  </View>
                </View>
                        
              ), 
            })}
            name="SendAttachment"
            component={SendAttachment}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              
              headerStyle: {
                backgroundColor: '#f7f7f7',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Contact Support",
              
            })}
            name="ContactSupport"
            component={ContactSupport}
          /> */}
      {/* <Stack.Screen
            name="GettingStarted"
            component={GettingStarted}
            options={{
              headerTintColor: 'white',
              headerShown: false,
              headerTitleStyle: {
                color: '#17bcf9',
              },
            }}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              
              headerStyle: {
                backgroundColor: '#fff',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Admin Panel",
              
            })}
            name="AdminLogin"
            component={AdminLogin}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              
              headerStyle: {
                backgroundColor: '#fff',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Driver Verification",
              
            })}
            name="DriverVerification"
            component={DriverVerification}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              headerTransparent: true,
              headerStyle: {
                backgroundColor: '#fff',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#fff',
                fontSize: 25,
               
              alignSelf:"center"
              
              },
              title: "Take a Selfie",
              
            })}
            name="SelfieCam"
            component={SelfieCam}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#8F92A1',
           
              headerStyle: {
                backgroundColor: '#fff',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
              // alignSelf:"center"
              marginLeft:110
              
              },
              headerRight: () => (
            
                <TouchableOpacity
                style={{ paddingRight:20}}
                >
                  <FontAwesome 
                  name='camera'
                  size={20}
                  color= '#8F92A1'
                  style={{marginTop:5}}
                  />
                  
                </TouchableOpacity>
                        
              ),
              title: "Take a Selfie",
              
            })}
            name="TakeSelfie"
            component={TakeSelfie}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: 'white',
              
              headerStyle: {
                backgroundColor: '#fff',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
              alignSelf:"center"
              
              },
              title: "Congrats",
              
            })}
            name="ConfirmScreen"
            component={ConfirmScreen}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#092443',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Dashboard",
              
            })}
            name="DashboardMain"
            component={DashboardMain}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#092443',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Order Details",
              
            })}
            name="OrderDetails"
            component={OrderDetails}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#092443',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Statistics",
              
            })}
            name="Statistics"
            component={Statistics}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#092443',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Finances",
              
            })}
            name="Finances"
            component={Finances}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#092443',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Drivers List",
              
            })}
            name="ClientList"
            component={ClientList}
          /> */}

      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Order History",
              
            })}
            name="OrderHistory"
            component={OrderHistory}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Profile",
              
            })}
            name="DriverProfile"
            component={DriverProfile}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Profile",
              
            })}
            name="ProfileUser"
            component={ProfileUser}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#f7f6f6',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#8F92A1',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Review",
              
            })}
            name="Review"
            component={Review}
          /> */}
      {/* <Stack.Screen
            options={({navigation, route}) => ({
              headerTintColor: '#fff',
              
              headerStyle: {
                backgroundColor: '#fff',
                elevation: 0,
              },
   
              headerTitleStyle: {
                color: '#092443',
                fontSize: 25,
               
                alignSelf:"center"
              
              },
              title: "Support",
              
            })}
            name="CustomerSupport"
            component={CustomerSupport}
          /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
