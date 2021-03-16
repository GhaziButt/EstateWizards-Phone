import React, { Component, useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, Platform, TouchableOpacity, Image, ScrollView } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
//import ImagePicker from 'react-native-image-crop-picker';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';



import sellDATA from '../components/SellData';

export default function CreateAPost({navigation}) {

  const [title , setTitle] = useState(''); 
  const [location , setLocation] = useState('');
  const [type , setType] = useState('type');
  const [washroom , setWashroom] = useState(0);
  const [bedroom , setBedroom] = useState('');
  const [description , setDescription] = useState('');
  const [price , setPrice] = useState('');

  const [image , setImage] = useState(null);
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

 
  
  finish = () => {
      
    sellDATA.title = title
    sellDATA.location = location
    sellDATA.type = type
    sellDATA.washroom = washroom
    sellDATA.bedroom = bedroom
    sellDATA.description = description
    sellDATA.price=  price

    
    console.log("Check 1");
    console.log(sellDATA);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

   const CameraImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
   }

  BottomContent = () => (

    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={CameraImage}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={pickImage}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <View>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      <TouchableOpacity
        style={styles.panelButtonC}
        onPress={() => this.BottomRef.current.snapTo(1)}>
        <Text style={styles.panelButtonTitleC}>Cancel</Text>
      </TouchableOpacity>
    </View>
  
   
  );

  UpperContent = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  BottomRef = React.createRef();
  Anim = new Animated.Value(1);

  
        return(
              
              <View style= {styles.container}>

               <BottomSheet
                  ref = {this.BottomRef}
                  snapPoints = {[600,0]}
                  renderContent = {this.BottomContent}
                  renderHeader = {this.UpperContent}
                  initialSnap = {1}
                  callbackNode = {this.Anim}
                  enabledContentGestureInteraction={false}
                  
               />

               <ScrollView>

               <Text style = {styles.text}> Title: </Text>
               <TextInput
                style = {styles.input}
                placeholder = 'e.g Kashan House'
                onChangeText = {(val) => setTitle(val)}
                
               />

               

               <Text style = {styles.text}> Type: </Text>
               <Picker
                 style = {styles.picker}
                 selectedValue={type}
                 onValueChange={(itemValue, itemIndex) =>
                    setType(itemValue)
               }>
                  
                  <Picker.Item label="House" value="house" />
                  <Picker.Item label="Plot" value="plot" />
                  <Picker.Item label="Commercial" value="commercial" />
                </Picker>

               <Text style = {styles.text}> No. of Washrooms: </Text>
               <Picker
                 style = {styles.picker}
                 selectedValue={washroom}
                 onValueChange={(itemValue, itemIndex) =>
                    setWashroom(itemValue)
               }>
                  
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                </Picker>

               <Text style = {styles.text}> No. of Bedrooms: </Text>
               <Picker
                 style = {styles.picker}
                 selectedValue={bedroom}
                 onValueChange={(itemValue, itemIndex) =>
                    setBedroom(itemValue)
               }>
                  
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                </Picker>
                
                <Text style = {styles.text}> Location: </Text>
               <Picker
                 style = {styles.picker}
                 selectedValue={location}
                 onValueChange={(itemValue, itemIndex) =>
                    setLocation(itemValue)
               }>
                  
                  <Picker.Item label="Islamabad" value="islamabad" />
                  <Picker.Item label="Rawalpindi" value="rawalpindi" />
                  <Picker.Item label="Karachi" value="karachi" />
                  <Picker.Item label="Lahore" value="lahore" />
                </Picker>

                <Text style = {styles.text}> Price: </Text>
               <TextInput
                style = {styles.picker}
                placeholder = 'PKR'
                onChangeText = {(val) => setPrice(val)}
                
               />
                

               <Text style = {styles.text} > Describe property: </Text>
               <TextInput
                style = {styles.descInput}
                placeholder = 'e.g It is a corner plot hence there os extra land involved..'
                onChangeText = {(val) => setDescription(val)}
               />

               <Button
               type = 'clear'
               title = '   Upload Picture'
               
               icon={
                <Icon
                  name="camera"
                  size={15}
                  color="#28A745"
              />
              }
               onPress = {() => this.BottomRef.current.snapTo(0)}
               
               />

               

              <Button
                 
                 style = {{ paddingBottom: 30 , width:20 , borderRadius : 15, paddingTop: 30,  }}
                 onPress = {
                   () => {navigation.navigate('Map', {
                             
                          Title : {title},
                          Location : {location},
                          WRoom : {washroom},
                          BRoom : {bedroom},
                          Price : {price},
                          Descrip : {description},
                          Type : {type}

                   }) ; this.finish()}
                  }
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

                 </ScrollView>   

              </View>
        );
    }




const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0'
  },

  input:{
    borderWidth:0,
    borderColor:'#777',
    paddingBottom:10,
    padding:10,
    margin:10,
    width:300,
    backgroundColor: '#D3D3D3'
  },

  descInput:{
    borderWidth:0,
    borderColor:'#777',
    padding:10,
    margin:10,
    width:300,
    height:125,
    backgroundColor: '#D3D3D3',
    paddingBottom: 30
  },

  picker : {

    borderWidth:0,
    borderColor:'#777',
    padding:10,
    margin:10,
    width:150,
    color: '#28A745',
    backgroundColor: '#D3D3D3',

  },

  text : {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#505050',
    paddingTop: 30
  },

  bottomButton : {
    color :'#28A745',
    backgroundColor : '#28A745',
  },

  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 17,
    borderRadius: 20,
    backgroundColor: '#28A745',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonC: {
    padding: 13,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 7,
    
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panelButtonTitleC: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#28A745',
  },

});