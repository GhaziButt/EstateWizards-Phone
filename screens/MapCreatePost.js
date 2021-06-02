import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import MapView,  { Marker } from 'react-native-maps';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Modal from 'react-native-modal';
import CreateAPost from "./CreateAPost";
import {useSelector,useDispatch} from "react-redux";
import axios from 'axios';

export default function MapCreatePost({route, navigation}) {

    const [latitude , setLatitude] = useState(33.5651);
    const [longitude , setLongitude] = useState(73.0169);

    const locations={
      Islamabad:[33.6938118,73.0651511],
      Rawalpindi:[33.5914237,73.0535122],
      Karachi:[24.860735,67.001137],
      Lahore:[31.520370,74.358749],
      Faisalabad:[31.450365,73.134964],
      Peshawar:[34.0123846,71.5787458]
    }


    const {title , location , washroom , bedroom , price , description , type , portion, propertytype, area, image} = route.params;

    const [modalOpen , setModalOpen ] = useState(false);

    // Save1 = (value) => {
      
    //   setLatitude(value);
    //   console.log(latitude);
    //    console.log("Check 1");
    // }
      
    // Save2 = (value) => {
    //   setLongitude(value);
    //   console.log(longitude);
      
    // }

    Combo = (value) => {
       setLatitude(value.latitude);
        setLongitude(value.longitude);
    }

    useEffect(()=>{
      if(location=="Rawalpindi"){
        
        setLatitude(locations.Rawalpindi[0])
        setLongitude(locations.Rawalpindi[1])
       
      }

      if(location=="Islamabad"){
        setLatitude(locations.Islamabad[0])
        setLongitude(locations.Islamabad[1])

        
      }
      if(location=="Peshawar"){
        setLatitude(locations.Peshawar[0])
        setLongitude(locations.Peshawar[1])

        
      }

      if(location=="Karachi"){
        setLatitude(locations.Karachi[0])
        setLongitude(locations.Karachi[1])
       
      }
      if(location=="Lahore"){
        setLatitude(locations.Lahore[0])
        setLongitude(locations.Lahore[1])
        
      }
      if(location=="Faisalabad"){
        setLatitude(locations.Faisalabad[0])
        setLongitude(locations.Faisalabad[1])
      
      }

      
    },[location])
    const token=useSelector(state=>state.authreducer.token)

    CreatePost=async()=>{
      console.log("ok")
      
      console.log(token)
      const config = {
        headers: {
        "Content-Type": "application/json",
        "x-auth-token":token
        },
      };
      
      const portions=portion.toString()
      const rooms=bedroom.toString()
      const bathrooms=washroom.toString()
      
      const pictures=[image]
      const latlong=[latitude,longitude]

      const body={type,propertytype,portions,title,description,location,area,rooms,bathrooms,price,pictures,latlong}
      console.log(body)
      const res=await axios.post("http://192.168.18.121:3000/post/postad",body,config)
      if(res.data.success){
        console.log("post create hogai")

      }
      else{
        console.log("Error")
      }
    
    
    
    }
    
   
       return(

    
                

            
               <Animated.View style={styles.container} >
                     <MapView style={styles.map}
                        initialRegion ={ {latitude:latitude,longitude: longitude
                          
                          , latitudeDelta: 0.0922,
                          longitudeDelta: 0.0421,
                        
                        
                        }}
                        onPress={e => this.Combo(e.nativeEvent.coordinate) }
                     >

                         <MapView.Marker
                           coordinate = {{latitude:latitude,longitude:longitude}}
                            //image= {require('../components/insh.png')}
                            pinColor = '#28A745'
                         />

                        


                         

                     </MapView> 


                     <View style = {styles.button}>
                       
                     <Button
                            onPress = { () => {CreatePost()  ;  {navigation.navigate('Home', {} )}
                             } } 
                            title="Next"
                          />
                     </View>   

                     <View style = {styles.modal}>
                       <Modal isVisible={modalOpen} backdropOpacity = {0.9} backdropColor= {'#008900'} animationIn = {"fadeInUp"} animationInTiming = {50} style = {styles.modal} >
                         <View style={{ flex: 3}}>
                         <Text style= {{ fontSize : 45 , color : '#5a5a5a' , paddingTop : 55, fontWeight : 'bold' }}>Please Confirm!</Text>
                        <Text style= {{ fontSize : 20 , color : 'white' , paddingTop : 85 }}>{title}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{location}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{washroom}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{bedroom}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{price}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{type}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{description}</Text>
                        <Text style= {{ fontSize : 15 , color : 'red', paddingTop : 15}}>{Number(latitude)}</Text>
                        <Text style= {{ fontSize : 15 , color : 'red', paddingTop : 15}}>{Number(longitude)}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{portion}</Text>
                        <Text style= {{ fontSize : 15 , color : 'red', paddingTop : 15}}>{propertytype}</Text>
                        <Text style= {{ fontSize : 15 , color : 'red', paddingTop : 15}}>{area}</Text>


                     <View style= {styles.modalToggle}>
                 <Button
                       title="Finish"
                       type="clear"
                       onPress = { () => { navigation.navigate("CreateAPost") } }
                      />
                 
                 </View>   
                    

                          <View style = {styles.button2}>  
                     <Button
                            
                            onPress = { () => { setModalOpen(false) } }
                            icon={
                              <Icon
                                 name="arrow-left"
                                 size={15}
                                 color='white'
                              />
                             }
                            iconLeft
                               title="   Back"
                          />
                          </View>
                     
                        </View>


                      </Modal>
                    </View>
              </Animated.View>

     
        );
    }




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      button:{
        borderWidth:0,
        borderColor:'#777',
        padding:0,
        margin:5,
        width:350,
        height:150,
        backgroundColor: '#D3D3D3'
      },
      modal: {
       
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        flexDirection: 'column',
        height: 10
      },
      button1: {
        padding: 55
      },
      button2: {
        paddingTop: 25,
        color: 'red'
        
      },

      modalToggle: {
        marginTop: 25,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#28A745',
        padding: 10,
        borderRadius: 30,
        alignSelf: 'center'
}
});