import React, { Component,useEffect,useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { ListItem, Avatar} from 'react-native-elements'
import axios from"axios"

export default function ListItemChat ({  currentUser, conversation,navigation}) {
  const [user, setUser] = useState(null);
  const [friendid,setfriendid]=useState(null)
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        console.log(friendId)
        setfriendid(friendId)
        const res = await axios.get("http://192.168.18.121:3000/user/getuserbyid/" + friendId);
        setUser(res.data);
        
        console.log(res.data)

      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  const enterChat = ( ) => {
    navigation.navigate('Chats',{
      conversation: conversation,
      friend:friendid
    });
  }
    
       return(
                <ListItem onPress = {() => enterChat()} >
                   <Avatar
                     rounded
                     source = {{    
                         uri: 'https://i.pravatar.cc/150?img=3'
                     }}
                   />

                   <ListItem.Content>
                   <ListItem.Title style = {{ fontWeight : 'bold', fontSize : 20}}>
                      {user?.name}
                   </ListItem.Title>

                   <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                       {conversation.title}
                   </ListItem.Subtitle>
                   </ListItem.Content>

                </ListItem>
        );
    }




const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});