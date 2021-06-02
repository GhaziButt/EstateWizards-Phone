import React, { Component, useState,useEffect } from "react";
import { Text, StyleSheet, View,  Modal, StatusBar, Animated, Dimensions  } from "react-native";
import { Button } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import MapView,  { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import Axios from "axios"

export default function FindYourPlace (){
  const locations={
    Islamabad:[33.6938118,73.0651511],
    Rawalpindi:[33.5914237,73.0535122],
    Karachi:[24.860735,67.001137],
    Lahore:[31.520370,74.358749],
    Faisalabad:[31.450365,73.134964],
    Peshawar:[34.0123846,71.5787458]
  }

  const [modalOpen , setModalOpen ] = useState(false);
  const [location , setLocation] = useState('Islamabad');
  const [type , setType] = useState('sell');
  const [propertytype , setPropertyType] = useState('House');
  const [latitude , setLatitude] = useState(33.5651);
  const [longitude , setLongitude] = useState(73.0169);

  const [posts,setPosts]=useState([]);
//  Save = (value) => {
//   setLocation(value);
// }

// Save2 = (value) => {
// setType(value);
// }

mainOnpres = async() => {
  console.log("pko")
  const res = await Axios.get(`http://192.168.18.121:3000/post/viewmap/${propertytype}/${ type }`)
 // console.log(res.data.posts)
  setPosts(res.data.posts)
  
  setModalOpen(false);
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

    console.log(latitude,longitude)

    
  },[location])

   onRegionChange =(region)=> {
    setLatitude(region.latitude)
    setLongitude(region.longitude)

  }
    
       return(
              <View style = {styles.container} >
                <StatusBar hidden />
                
                <Modal visible = {modalOpen} animationType = 'fade' >
                   <View style= {styles.modalContent}>
                     <View style= {styles.modalToggle}>
                      <Button
                       title="X"
                       type="clear"
                       onPress= {() => setModalOpen(false)}
                      />
                  
                     </View>
                     </View>

                     <View>
                     
                     
                     <Text style = {styles.text}> What are you looking for? </Text>
                         <Picker
                           style = {styles.picker}
                           selectedValue={type}
                           onValueChange={(itemValue, itemIndex) =>
                              setType(itemValue)
                         }>
                            
                            <Picker.Item label="Sell" value="sell" />
                            <Picker.Item label="Rent" value="rent" />
                            
                            
                          </Picker>
          
          
          
                          <Text style = {styles.text}> Type: </Text>
                         
                         
                         {type=="sell"?
                          <Picker
                            style = {styles.picker}
                            selectedValue={propertytype}
                            onValueChange={(itemValue, itemIndex) =>
                                setPropertyType(itemValue)
                          }>
                              
                              <Picker.Item label="House" value="House" />
                              <Picker.Item label="Residencial Plot" value="" />
                              <Picker.Item label="Commercial Plot" value="Commercial Plot" />
                              <Picker.Item label="Flat/Apartment" value="Flat/Apartment" />
                              <Picker.Item label="Office" value="Office" />
                              <Picker.Item label="Shop" value="Shop" />
          
                            </Picker>
                            :
                            <Picker
                            style = {styles.picker}
                            selectedValue={propertytype}
                            onValueChange={(itemValue, itemIndex) =>
                                setPropertyType(itemValue)
                          }>
                              
                              <Picker.Item label="House" value="House" />
                              <Picker.Item label="Flat/Apartment" value="Flat/Apartment" />
                              <Picker.Item label="Office" value="Office" />
                              <Picker.Item label="Shop" value="Shop" />
                            </Picker>}
          
          
          
                            
                            <Text style = {styles.text}> Location: </Text>
                         <Picker
                           style = {styles.picker}
                           selectedValue={location}
                           onValueChange={(itemValue, itemIndex) =>
                              setLocation(itemValue)
                         }>
                            
                            <Picker.Item label="Islamabad" value="Islamabad" />
                            <Picker.Item label="Rawalpindi" value="Rawalpindi" />
                            <Picker.Item label="Karachi" value="Karachi" />
                            <Picker.Item label="Lahore" value="Lahore" />
                            <Picker.Item label="Faisalabad" value="Faisalabad" />
                            <Picker.Item label="Peshawar" value="Peshawar" />
                          </Picker>
          
          
                   
          
          
          
          
          
                    <Button
                      title="Enter"
                      type='clear'
                      onPress = {() => mainOnpres()} //props.handleSubmit 
                  />
                   
                                 
            </View>
          

      </Modal>



      <Animated.View style={styles.container} >
                     <MapView style={styles.map}
                        region = {{
                            latitude: latitude,
                            longitude: longitude, 
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            
                        }}
                        
                     >
                       {

                         posts.map(ad => (

                          <MapView.Marker
                           key = { ad._id }
                           description = { ad.description }
                           title = { ad.title }
                          
                           coordinate = {{
                               latitude:  Number( ad.latlong[0] ) , longitude: Number(ad.latlong[1]) 
                           }}
                            //image= {require('../components/insh.png')}
                            pinColor = '#28A745'
                            
                         />

                         
           
                     ))  }
                         

                     </MapView> 


                     <View style = {styles.button}>
                       
                     <Button
                            onPress = { () => { setModalOpen(true) } }
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

              </Animated.View>     
     </View> 
        );
    }




   var buypost = [
  { title : 'House#3 Phase-1 DHA'  , 
    image : 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&w=1000&q=80' , 
    price : '250,000' , 
    description : 'A very beautiful House, very domestic'  , 
    key : '1',
    washroom : '5',
    bedroom : '3' ,
    type : 'house',
    location : 'karachi',
    point : [ '24.8043' , '67.0577']
  },

  { title : 'Flat#2 Rafay Mall'  ,
    image : 'https://i.pinimg.com/originals/ea/94/d5/ea94d52144e2582bcc30cdc6ca1a0f7f.jpg' ,
     price : '50,000' ,
      description : 'A very beautiful House, very aesthetic' ,
        washroom : '3',
         bedroom : '5' ,
          type : 'House' ,
          location : 'Karachi',
            key : '2',
            point : [ '24.8387' , '67.1209'] },

            { title : 'Flat#2 BLALALLLA'  ,
    image : 'https://i.pinimg.com/originals/ea/94/d5/ea94d52144e2582bcc30cdc6ca1a0f7f.jpg' ,
     price : '50,000' ,
      description : 'A very beautiful smells like ASSHOLE' ,
        washroom : '3',
         bedroom : '5' ,
          type : 'House' ,
          location : 'Karachi',
            key : '5',
            point : [ '24.7387' , '67.1909'] },

             { title : 'Flat#2 Beeeeeeeeeeeeeeeeeeeeeeeee'  ,
    image : 'https://i.pinimg.com/originals/ea/94/d5/ea94d52144e2582bcc30cdc6ca1a0f7f.jpg' ,
     price : '50,000' ,
      description : 'A very beautiful House, smells like ASSHOLE' ,
        washroom : '3',
         bedroom : '5' ,
          type : 'plot' ,
          location : 'Islamabad',
            key : '6',
            point : [ '33.4415' , '73.4392'] },
            


  { title : 'Killa # 4'  ,  image : 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80' ,  price : '50,000' , description : 'A very beautiful House, very domestic, smells like asshole', washroom : '4', bedroom : '8'  , type : 'Plot', key : '3',location : 'Islamabad', point : [ '33.6615' , '73.1392']},
  { title : 'Plaza # 2 Bahria Phase-4' ,  image : 'https://cdn.vox-cdn.com/thumbor/orQnkpvMpeD2246G66BgiDxiQ8c=/0x0:2000x1335/1400x1400/filters:focal(840x508:1160x828):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55683469/05_Living_and_Dining.0.jpg' , price : '550,000' , description : 'A very Bad House, very domestic, smells like asshole'  , washroom : '3', bedroom : '3' , type: 'Commercial', key : '4',location : 'Rawalpindi', point : [ '33.5651' , '73.0169'] },
]    















const styles = StyleSheet.create({
 
  container: {
    flex: 1,
  },
  
  modalToggle: {
    marginTop: 25,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#28A745',
    padding: 10,
    borderRadius: 30,
    alignSelf: 'center'
  }, 

  modalContent: {
    flex: 1
  },
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
      picker : {

        // borderWidth:0,
        // borderColor:'#777',
        // padding:10,
        // margin:10,
        // width:150,
        // color: '#28A745',
        // backgroundColor: '#D3D3D3',
        // borderBottomColor: '#28A745',
    
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#28A745',
        borderBottomColor: '#28A745',
        borderBottomWidth: 1,
        borderColor:'#28A745',
        width:150,
        backgroundColor: '#D3D3D3',
    
      },
});