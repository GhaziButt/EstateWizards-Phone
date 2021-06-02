import React, { Component, useState  } from "react";
import { Text, StyleSheet, View, FlatList, Animated, StatusBar, Image, Dimensions, Modal, TouchableOpacity, Pressable, ScrollView } from "react-native";

//import { MaterialIcons } from 'react-native-vector-icons'
import { Button } from 'react-native-elements';
import MapView,  { Marker } from 'react-native-maps';
import {useSelector,useDispatch} from "react-redux";
import axios from "axios"


export default function FindHostFullScreen({route, navigation}) {


    const user_id=useSelector(state=>state.authreducer.user_id)

    
    const days = 7;

    const {Title , Location , WRoom , BRoom , Price , Descrip , IImage, user,dates,Portion,postid} = route.params;


    // Title : item.title,
    // Location : item.location,
    // WRoom : item.bathrooms,
    // BRoom : item.rooms,
    // Price : item.price,
    // Descrip : item.description,
    // IImage : item.pictures[0],
    // Portion : item.portions
    reservation=async()=>{
      console.log("ok")
      const rev = await axios.get(`http://192.168.18.121:3000/host/addrequest/${user}/${user_id}/${postid}/${dates}`)
      
      
  }
  
  cancel=async()=>{
    const res = await axios.get(`http://192.168.18.121:3000/host/removerequest/${user_id}/${postid}/${user}`)
    
  }


    return(

       <ScrollView>

      <View style={styles.container}>

       
        <Image
          style={styles.image}
          source={{uri: IImage}}
        />
  
        <Text style={styles.bedrooms}>
          {WRoom} washroom. {BRoom} bedroom
        </Text>
  
        
        <Text style={{ fontSize : 30 , fontWeight: 'bold' }} numberOfLines={2}>
          {Title}
        </Text>
  
        
        <Text style={styles.prices}>
         
          <Text style={styles.price}>PKR {Price} / night </Text>
          
        </Text>

        <Text style={styles.bedrooms}>
            {Descrip}
        </Text>
        {/* style={styles.map} */}

       
             
        <View style= {styles.modalToggle}>
                 <Button
                       title="Send Reservation"
                       type="clear"
                       onPress= {() => reservation()}
                      />
                 
                 </View>

                 <View style= {styles.modalToggle}>
                 <Button
                       title="Cancel Reservation"
                       disabled='true'
                       type="clear"
                       onPress= {() => {}}
                      />
                 
                 </View>

            
          
       
     

      </View>
      </ScrollView> 

    );
}



const styles = StyleSheet.create({

  modalToggle: {
    marginTop: 25,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#28A745',
    padding: 10,
    borderRadius: 30,
    alignSelf: 'center'
  }, 

    container: {
      margin: 20,
    },
    image: {
      width: '100%',
      aspectRatio: 3 / 2,
      resizeMode: 'cover',
      borderRadius: 10,
    },
  
    bedrooms: {
      marginVertical: 10,
      color: '#5b5b5b',
    },
    bedroomsA: {
        marginVertical: 10,
        color: '#5b5b5b',
        lineHeight : 24
      },
    description: {
      fontSize: 18,
      lineHeight: 26,
    },
    prices: {
      fontSize: 18,
      marginVertical: 10,
    },
    oldPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'line-through',
    },
    price: {
      fontWeight: 'bold',
      color: '#28A745',
      fontSize: 23
    },
    totalPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'underline',
    },
    locationContainer: {
        // ...StyleSheet.absoluteFillObject,
            height: 150,
            width: '100%',
            marginTop: 10,
            paddingTop:10
        },
        setLocationContainer:{
            padding: 10,
            height: '100%'
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        },
  });
  