import React, { Component  } from "react";
import { Text, StyleSheet, View, FlatList, Animated, StatusBar, Image, Dimensions, Modal } from "react-native";
import { useState } from "react";
import { MaterialIcons } from 'react-native-vector-icons'
import { Button } from 'react-native-elements';
//import  BuyForm  from '../components/locationtype';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
import MapView,  { Marker } from 'react-native-maps';

export default function CostPredictor({navigation}) {
  
  const [location , setLocation ] = useState('1')
  const [type , setType] = useState('House');
  const [bathroom , setBathrroom] = useState('1');
  const [bedroom , setBedroom] = useState('2');
  const [area , setArea] = useState('2');
  const [latitude , setLatitude] = useState(33.5651);
  const [longitude , setLongitude] = useState(73.0169);
  const [price , setPrice] = useState(0);

  const [modalOpen , setModalOpen ] = useState(true);


  
  Save = (value) => {
  setType(value);
  }

  Save2 = (value) => {
  setBathrroom(value);
  }

  Save3 = (value) => {
  setBedroom(value);
  }

  Save4 = (value) => {
  setArea(value);
  }

  Save5 = (value) => {
  setLocation(value);
  }

  Save6 = (value) => {
      
    setLatitude(value);
    console.log(latitude);
     console.log("Check 1");
  }
    
  Save7 = (value) => {
    setLongitude(value);
    console.log(longitude);
    
  }

  Combo = (value) => {
      this.Save6(value.latitude);
      this.Save7(value.longitude);
  }

  

  mainOnpress = () => {
  setModalOpen(false);
  fetchprice()
  }

  fetchprice=async()=>{
      
    const config = {
      headers: {
      "Content-Type": "application/json"
      },
    };
    var typee=''
    if(type=='house'){
        typee='0'
    }
    else{
        typee='1'
    }
    const locationn= location
    const rooms=bedroom
    const bathrooms=bathroom
    const areaa=area
    
    const body={inputt:[Number(typee),Number(locationn),Number(rooms),Number(bathrooms),Number(areaa),latitude,longitude]}
   

    const res=await axios.post("http://192.168.43.211:3000/predict",body,config)
    console.log(res.data);
    if(res.data.success){
      alert("Price"+res.data.price)
      setPrice(res.data.price)
      
      
    }
    

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

        <View>
             
             
  <Picker

   selectedValue= { type }
   //style={styles.picker}
   onValueChange={Save.bind() } //props.handleChange('location')
   //value = {props.values.location}
   itemStyle={styles.itemStyle}
>
    <Picker.Item label="House" value="house" />
    <Picker.Item label="Flat" value="flat" />
    
  </Picker>

  <Picker
   selectedValue= { bedroom }
  // style={styles.picker}
   onValueChange={ Save3.bind() } //props.handleChange('location')
   //value = {props.values.location}
   itemStyle={styles.itemStyle}
>
    <Picker.Item label="1" value="1" />
    <Picker.Item label="2" value="2" />
    <Picker.Item label="3" value="3" />
    <Picker.Item label="4" value="4" />
    <Picker.Item label="5" value="5" />
  </Picker>


  <Picker
   selectedValue= { bathroom }
  // style={styles.picker}
   onValueChange={ Save2.bind() } //props.handleChange('location')
   //value = {props.values.location}
   itemStyle={styles.itemStyle}
>
    <Picker.Item label="1" value="1" />
    <Picker.Item label="2" value="2" />
    <Picker.Item label="3" value="3" />
    <Picker.Item label="4" value="4" />
    <Picker.Item label="5" value="5" />
  </Picker>

 


<Picker
   selectedValue= { area }
  // style={styles.picker}
   onValueChange={ Save4.bind() } //props.handleChange('location')
   //value = {props.values.location}
   itemStyle={styles.itemStyle}
>
    <Picker.Item label="1" value="1" />
    <Picker.Item label="2" value="2" />
    <Picker.Item label="3" value="3" />
    <Picker.Item label="4" value="4" />
    <Picker.Item label="5" value="5" />
  </Picker>

  

<Picker
   selectedValue= { location }
  // style={styles.picker}
   onValueChange={ Save5.bind() } //props.handleChange('location')
   //value = {props.values.location}
   itemStyle={styles.itemStyle}
>
    <Picker.Item label="Islamabad" value="1" />
    <Picker.Item label="Rawalpindi" value="2" />
    <Picker.Item label="Lahore" value="3" />
    <Picker.Item label="Karachi" value="4" />
    
  </Picker>

  <Button
    title="Enter"
    type='clear'
    onPress = {() => setModalOpen(false)} //props.handleSubmit 
/>
 
               
</View>




               

           </View>
        </Modal>
             


       

         <View style={styles.locationContainer}>
              
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
                           pinColor = '#28A745'
                            
                         />

                        


                         

                     </MapView> 



               

         </View>

         <View style= {styles.modalToggle}>
                  <Button
                   
                   title="Try Again"
                   type="clear"
                   onPress= {() =>  setModalOpen(true) }
                   />
                </View>

                <View style= {styles.modalToggle}>
                  <Button
                   
                   title="Predict"
                   type="clear"
                   onPress= {() =>  { navigation.navigate('ResCostPredictor',  {
                             
                    Price:{price},
                    Location : {location},
                    WRoom : {bathroom},
                    BRoom : {bedroom},
                    Type : {type},
                    Area : {area},
                    Lat : {latitude},
                    Long : {longitude}

             }
                   
                   
                   
                   
                   
                   ) } , ()=>fetchprice() }
                   />
                </View>
         



               

        </View>
        
      



        );
    }




const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
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
  locationContainer: {
    // ...StyleSheet.absoluteFillObject,
        height: 550,
        width: '100%',
        marginTop: 10,
        paddingTop:10,
        margin: 20
    },
    setLocationContainer:{
        padding: 10,
        height: '100%'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});