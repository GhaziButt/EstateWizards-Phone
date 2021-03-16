import React, { Component, useState } from "react";
import { Text, StyleSheet, View,  Modal, StatusBar, Animated, Dimensions  } from "react-native";
import { Button } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import MapView,  { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function FindYourPlace (){

  const [modalOpen , setModalOpen ] = useState(false);
  const [location , setLocation] = useState('karachi');
  const [type , setType] = useState('house');


  Save = (value) => {
  setLocation(value);
  console.log(value);
  }

  Save2 = (value) => {
  setType(value);
  console.log(value);
  }

   mainOnpress = () => {
  setModalOpen(false);

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
                     
                     
          <Picker

           selectedValue= { location }
           //style={styles.picker}
           onValueChange={Save.bind() } //props.handleChange('location')
           //value = {props.values.location}
           itemStyle={styles.itemStyle}
        >
            <Picker.Item label="Location" value="0" />
            <Picker.Item label="Islamabad" value="islamabad" />
            <Picker.Item label="Rawalpindi" value="rawalpindi" />
            <Picker.Item label="Lahore" value="lahore" />
            <Picker.Item label="Karachi" value="karachi" />
          </Picker>

          <Picker
             selectedValue= { type }
          // style={styles.picker}
             onValueChange={ Save2.bind() } //props.handleChange('location')
           //value = {props.values.location}
           itemStyle={styles.itemStyle}
        >
            <Picker.Item label="Type" value="0" />
            <Picker.Item label="House" value="house" />
            <Picker.Item label="Flat" value="flat" />
            <Picker.Item label="Plot" value="plot" />
            <Picker.Item label="Commercial" value="commercial" />
          </Picker>

          <Button
            title="Enter"
            type='clear'
            onPress = {() => mainOnpress()}//props.handleSubmit 
        />
         
                       
         </View>

      </Modal>



      <Animated.View style={styles.container} >
                     <MapView style={styles.map}
                        initialRegion = {{
                            latitude: 30.3753,
                            longitude: 69.3451, 
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        
                     >
                       {

                         buypost.filter(function(arr){
                   return arr.location.toLowerCase()==location && arr.type.toLowerCase()==type}).map(marker => (

                          <MapView.Marker
                           key = { marker.key }
                           description = { marker.description }
                           title = { marker.title }
                          
                           coordinate = {{
                               latitude:  Number( marker.point[0] ) , longitude: Number(marker.point[1]) 
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
      }
});