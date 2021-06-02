import React, { Component, useLayoutEffect, useState,useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import { AntDesign } from '@expo/vector-icons';
import axios from"axios"
import ListItemChat from '../components/ListItemChat'
import {useSelector,useDispatch} from "react-redux";



export default function Inbox({navigation}){

  const  user  = {_id : useSelector(state=>state.authreducer.user_id),
    name:useSelector(state=>state.authreducer.name)}

  const [chatNamee , setChatName] = useState('Sharjeel Nasir') ;
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // const loadFont = async () => {
    //   await Font.loadAsync({
    //     'Material Icons': require('@expo/vector-icons/MaterialIcons')
    //   })
    // }
    const getConversations = async () => {
      try {
        const res = await axios.get("http://192.168.18.121:3000/conversations/" + user._id);
        
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
    //loadFont()
  }, [user._id]);



  useLayoutEffect(() => {
    navigation.setOptions({

      title: 'Inbox',
      headerStyle : { backgroundColor : '#28A745'},
      headrerTitleStyle : { color: 'wheat' },
      headerTintColor: 'wheat',

      // headerRight:() => ( 

      //   <View style = {{ flexDirection: 'row', justifyContent: 'space-between', width : 80, marginRight : 20}}>

      //     <TouchableOpacity>
      //     <MaterialIcons name="home" size={24} color="black" />
      //     </TouchableOpacity>
           

      //   </View>

      // ),
      
    });
  },[navigation]);

  
  
  
  
       return(
               <SafeAreaView>
                 <ScrollView>
                 {conversations.map((c) => (
                    <ListItemChat
                   
                    conversation = {c}
                    currentUser={user}
                    navigation={navigation}
                    />))}
                 </ScrollView>
               </SafeAreaView>
        );
    }




const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

