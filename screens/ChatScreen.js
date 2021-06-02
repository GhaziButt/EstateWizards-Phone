import React, { Component, useLayoutEffect, useState, useEffect } from "react";
import { Text, Image,StyleSheet, View, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from "react-native";
import {Avatar} from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import {useSelector,useDispatch} from "react-redux";
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import {Ionicons} from '@expo/vector-icons';
import axios from "axios"


export default function ChatScreen({navigation, route}){

  const  user  = {_id : useSelector(state=>state.authreducer.user_id),
    name:useSelector(state=>state.authreducer.name)}
  
  const [input , setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://192.168.18.121:3000/messages/" + route.params.conversation?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  });

  useLayoutEffect(() => {
     navigation.setOptions({
        
      title: 'Chat',
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
      headerStyle : { backgroundColor : '#28A745'}, 
      headrerTitleStyle : {  color: 'white' },
      headerTitle: () => (

          <View style = {{flexDirection: 'row' , alignItems: 'center'}} >
            <Avatar rounded source = {{ uri : 'https://i.pravatar.cc/150?img=3' }}/>
            <Text> {route.params.conversation.title} </Text>

          </View>

      ),

      // headerRight: () => (

      //   <View style = {{ flexDirection : 'row' , justifyContent : 'space-between' , width : 80 , marginRight : 20}} >
      //      <TouchableOpacity>
      //          <Ionicons name = 'video-camera' size = {24} color = 'white' />
      //      </TouchableOpacity>
      //      <TouchableOpacity>
      //          <Ionicons name = 'ios-call' size = {24} color = 'white' />
      //      </TouchableOpacity>

           

      //   </View>

      // ),

     });


  }, [navigation])

  const sendMessage = async() => {
       Keyboard.dismiss();

     //  chatDATA.message = input
      if(input.length>0){
        console.log('dob');
        const message = {
          sender: user._id,
          text: input,
          conversationId: route.params.conversation._id,
        };
        try {
          const res = await axios.post("http://192.168.18.121:3000/messages", message);
          setMessages([...messages, res.data]);
          
        } catch (err) {
          console.log(err);
        }
      } 
      // alert(chatDATA.message);

       setInput('');
  }
   
       return(
               <SafeAreaView style = {{ flex : 1 , backgroundColor : 'white'}}>
                <StatusBar style = 'light' />

                <KeyboardAvoidingView
                behavior = {Platform.OS == 'ios' ? 'padding' :'height'}
                style = {styles.container}
                keyboardVerticalOffset = {90}
                
                />

                <TouchableWithoutFeedback   >

                <>
                  <ScrollView>
 
                   {
                     messages?.map(( data) =>(
                     data.sender?.toString().trim() == user._id
                    // route.params.friendid 
                     
                     ? 
                     data.text.includes("base64")?
                        
                     <Image style={styles.image}
                     source={{uri: data.text}}>

                     </Image>:

                     <View style = {styles.rec}>
                        <Text style = {styles.recieverText}> {data.text} </Text>
                     </View>
                     
                      
                     
                     :
                     (
                     
                       data.text.includes("base64")?
                        
                       <Image style={styles.image}
                       source={{uri: data.text}}>

                       </Image>:
                      <View style = {styles.sender}>
                        <Text style = {styles.senderText}> {data.text} </Text>

                      </View>
                     )
                     ))
                   }

                  </ScrollView>

                  <View style = { styles.footer}> 
                     <TextInput value = {input}
                                onChangeText = {(text) => setInput(text)}
                                placeholder = 'Enter Message'
                                style = {styles.textinput} 
                                onSubmitEditing = {sendMessage}
                                
                                />
                                {/* name = 'ios-send' size = {24} color = '#28A745' */}
                       
                     <TouchableOpacity activeOpacity = {0.5} onPress = {sendMessage} >  
                          <Text  style = {{ color: '#28A745' , fontWeight: 'bold' }} >SEND</Text>
                     </TouchableOpacity>  
                  </View>

                  

                </>

                </TouchableWithoutFeedback> 
                
               </SafeAreaView>
        );
    }




    var chatDATA = [

      { message : ''  , 
        
      },
    
      
  ]




const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },

  rec: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative"

  },

  image: {
    width: '40%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  
  sender: {
    padding: 15,
    backgroundColor: "#2B68E6",
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative"

  },
  textinput : {
    bottom : 0, 
    height : 40,
    flex : 1,
    marginRight : 15,
    borderColor : 'transparent',
    backgroundColor : '#ECECEC',
    borderWidth : 1,
    padding : 10, 
    color : 'grey',
    borderRadius : 30
  },
  footer : {
    flexDirection : 'row',
    alignItems : 'center',
    width : '100%',
    padding : 15
  },

  senderText: {
    color: 'white'
  }
});