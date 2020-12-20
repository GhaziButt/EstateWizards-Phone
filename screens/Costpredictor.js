import React, { Component  } from "react";
import { Text, StyleSheet, View, FlatList, Animated, StatusBar, Image, Dimensions, Modal } from "react-native";
import { useState } from "react";
import { MaterialIcons } from 'react-native-vector-icons'
import { Button } from 'react-native-elements';
//import  BuyForm  from '../components/locationtype';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'

export default function CostPredictor() {
  
  const [location , setLocation ] = useState('1')
  const [type , setType] = useState('House');
  const [bathroom , setBathrroom] = useState('1');
  const [bedroom , setBedroom] = useState('2');
  const [area , setArea] = useState('2');

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
    
    const body={inputt:[typee,locationn,rooms,bathrooms,areaa]}
   

    const res=await axios.post("http://192.168.1.15:3000/predict",body,config)
    console.log(res.data);
    if(res.data.success){
      alert("Price"+res.data.price)
      
      
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
    onPress = {() => mainOnpress()} //props.handleSubmit 
/>
 
               
</View>




               

           </View>
        </Modal>
             


        <View style= {styles.modalToggle}>
                  <Button
                   
                   title="Select"
                   type="clear"
                   onPress= {() =>  setModalOpen(true) }
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
  }
});