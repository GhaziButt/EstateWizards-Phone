import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import MapView,  { Marker } from 'react-native-maps';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Modal from 'react-native-modal';

export default function MapCreatePost({route, navigation}) {

    const [latitude , setLatitude] = useState(33.5651);
    const [longitude , setLongitude] = useState(73.0169);

    const {Title , Location , WRoom , BRoom , Price , Descrip , Type} = route.params;

    const [modalOpen , setModalOpen ] = useState(false);

    Save1 = (value) => {
      
      setLatitude(value);
      console.log(latitude);
       console.log("Check 1");
    }
      
    Save2 = (value) => {
      setLongitude(value);
      console.log(longitude);
      
    }

    Combo = (value) => {
        this.Save1(value.latitude);
        this.Save2(value.longitude);
    }
   
       return(

    
                


               <Animated.View style={styles.container} >
                     <MapView style={styles.map}
                        initialRegion = {{
                            latitude: 33.5651,
                            longitude: 73.0169 , 
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        onPress={e => this.Combo(e.nativeEvent.coordinate) }
                     >

                         <MapView.Marker
                           coordinate = {{
                               latitude: Number(latitude) , longitude: Number(longitude) 
                           }}
                            //image= {require('../components/insh.png')}
                            pinColor = '#28A745'
                         />

                        


                         

                     </MapView> 


                     <View style = {styles.button}>
                       
                     <Button
                            onPress = { () => {setModalOpen(true)} }
                            icon={
                              <Icon
                                 name="arrow-right"
                                 size={15}
                                 color="white"
                              />
                             }
                            iconRight
                               title="Next  "
                          />
                     </View>   

                     <View style = {styles.modal}>
                       <Modal isVisible={modalOpen} backdropOpacity = {0.9} backdropColor= {'#008900'} animationIn = {"fadeInUp"} animationInTiming = {50} style = {styles.modal} >
                         <View style={{ flex: 3}}>
                         <Text style= {{ fontSize : 45 , color : '#5a5a5a' , paddingTop : 55, fontWeight : 'bold' }}>Please Confirm!</Text>
                        <Text style= {{ fontSize : 20 , color : 'white' , paddingTop : 85 }}>{Title.title}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{Location.location}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{WRoom.washroom}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{BRoom.bedroom}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{Price.price}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{Type.type}</Text>
                        <Text style= {{ fontSize : 20 , color : 'white', paddingTop : 15}}>{Descrip.description}</Text>
                        <Text style= {{ fontSize : 15 , color : 'red', paddingTop : 15}}>{Number(latitude)}</Text>
                        <Text style= {{ fontSize : 15 , color : 'red', paddingTop : 15}}>{Number(longitude)}</Text>

                        
                     <View style = {styles.button1}>  
                     <Button
                            
                            onPress = { () => { navigation.navigate("CreateAPost") } }
                            icon={
                              <Icon
                                 name="arrow-right"
                                 size={15}
                                 color="white"
                              />
                             }
                            iconRight
                               title="Next  "
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
        
      }
});