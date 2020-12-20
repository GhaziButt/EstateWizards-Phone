import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Saved } from './screens/Saved';
import Account from './screens/Account';
import Inbox from './screens/Inbox';
import { Home } from './screens/Home';
import SearchByLocation from './screens/Searchbylocation';
import  LikedPosts  from './screens/LikedPosts';
import  Buy  from './screens/Buy';
import CreateAPost from './screens/CreateAPost';
import AboutUS from './screens/Aboutus';
import CostPredictor from './screens/Costpredictor';
import FindHost from './screens/Findhost';
import FindYourPlace from './screens/Findyourplace';
import HostYourHome from './screens/Hostyourhome';
import PriceTrends from './screens/Pricetrends';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js t start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator()

const HomeStack = createStackNavigator();
const SavedStack = createStackNavigator();
const InboxStack = createStackNavigator();
const ProfileStack = createStackNavigator();



//STACK SCREENS

const HomeStackScreen = ({ navigation }) =>(
  <HomeStack.Navigator
    screenOptions= {{
      headerStyle: {
        backgroundColor : 'white',
      },
      headerBackTitleStyle: {
        fontWeight: 'bold',
        fontStyle: 'italic'
      }
    }}
  >
    <HomeStack.Screen  
        name = "Home"
        component = {Home}  
        options = {{
          headerLeft: () => (
            <View style = {{marginLeft : 13 }}>
            <Icon.Button
             name = "ios-menu"
             size = {30}
             color = '#28A745'
             backgroundColor = 'white'
             onPress = {() => navigation.openDrawer() }
            />
            </View>
          ),
        }}
    />
    <HomeStack.Screen  
        name = "Recommended Ads at given Location"
        component = {SearchByLocation}  
    />
  </HomeStack.Navigator>
);

const SavedStackScreen = () =>(
  <SavedStack.Navigator>
    <SavedStack.Screen  
        name = "Saved Posts"
        component = {Saved}  
    />
    <SavedStack.Screen  
        name = "Liked Posts"
        component = {LikedPosts}  
    />
  </SavedStack.Navigator>
);

const InboxStackScreen = () =>(
  <InboxStack.Navigator>
    <InboxStack.Screen  
        name = "Chats"
        component = {Inbox}  
    />
  </InboxStack.Navigator>
);

const ProfileStackScreen = () =>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen  
        name = "My Profile"
        component = {Account}  
    />
  </ProfileStack.Navigator>
);


//Bottom Tabs Content

const TabScreen = () => (

  <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarColor: '#28A745',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedStackScreen}
        options={{
          tabBarColor: '#28A745',
          tabBarLabel: 'Saved Posts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chevron-double-down" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxStackScreen}
        options={{
          tabBarColor: '#28A745',
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat-processing" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileStackScreen}
        options={{
          tabBarColor: '#28A745',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alien" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
 
);

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = "Home" component ={TabScreen} />
        <Drawer.Screen name = "Buy" component ={Buy} />
        <Drawer.Screen name = "Create A Post" component ={CreateAPost} />
        <Drawer.Screen name = "Host Your Home" component ={HostYourHome} />
        <Drawer.Screen name = "Hostings near You" component ={FindHost} />
        <Drawer.Screen name = "Investment Price Trends" component ={PriceTrends} />
        <Drawer.Screen name = "House Cost Predictor" component ={CostPredictor} />
        <Drawer.Screen name = "Find your Place!" component ={FindYourPlace} />
        <Drawer.Screen name = "About 'The Wizards'" component ={AboutUS} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
