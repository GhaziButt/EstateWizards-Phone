import React, { Component, useState, useEffect,useLayoutEffect } from "react";
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
import { cleanSingle } from "react-native-image-crop-picker";

export default function CreateAPost({navigation}) {

  const [title , setTitle] = useState(''); 
  const [location , setLocation] = useState('Rawalpindi');
  const [type , setType] = useState('sell');
  const [washroom , setWashroom] = useState(0);
  const [bedroom , setBedroom] = useState(0);
  const [description , setDescription] = useState('');
  const [price , setPrice] = useState('');
  const [portion , setPortion] = useState(1);
  const [propertytype , setPropertyType] = useState('House');
  const [area , setArea] = useState('');

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


  useLayoutEffect(() => {
    navigation.setOptions({

      title: 'Let others know about your property!',
      headerStyle : { backgroundColor : '#28A745'},
      headrerTitleStyle : { color: 'wheat' },
      headerTintColor: 'wheat',

      
      
    });
  },[navigation]);

 
  
  finish = () => {
      
    sellDATA.title = title
    sellDATA.location = location
    sellDATA.type = type
    sellDATA.washroom = washroom
    sellDATA.bedroom = bedroom
    sellDATA.description = description
    sellDATA.price=  price

    sellDATA.portion = portion
    //sellDATA.postType = postType
    sellDATA.area = area
    



    
    console.log("Check 1");
    console.log(sellDATA);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
     
      base64:true
      
    });

    console.log(result);

    if (!result.cancelled) {
      setImage("data:image/jpg;base64,"+result.base64);
      console.log(result);
    }
  };

   const CameraImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
      base64:true
      
    });

   

    if (!result.cancelled) {
      setImage("data:image/jpg;base64,"+result.base64); 
      console.log(result);
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

               <ScrollView style= {styles.regform}>

               <Text style = {styles.header}>Create your own Post.</Text>  

            <Text style = {styles.text}> Put up property for: </Text> 
               <Picker
                 style = {styles.picker}
                 selectedValue={type}
                 onValueChange={(itemValue, itemIndex) =>
                    setType(itemValue)
               }>
                  
                  <Picker.Item label="Rent" value="rent" />
                  <Picker.Item label="Sell" value="sell" />
                  
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



                {propertytype=="House" || propertytype=="Office" || propertytype=="Shop" ?
                <>
                <Text style = {styles.text}> Portions: </Text>
               <Picker
                 style = {styles.picker}
                 selectedValue={portion}
                 onValueChange={(itemValue, itemIndex) =>
                    setPortion(itemValue)
               }>
                  
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                </Picker>
                </>  : <View></View>}


                {propertytype=="House" ||propertytype=="Office" || propertytype=="Shop" || propertytype=="Flat/Apartment" ?
                <>
                <Text style = {styles.text}> No. of Rooms: </Text>
               <Picker
                 style = {styles.picker}
                 selectedValue={bedroom}
                 onValueChange={(itemValue, itemIndex) =>
                    setBedroom(itemValue)
               }>
                   <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                </Picker>
                

              <Text style = {styles.text}> No. of Washrooms: </Text>
               <Picker
                 style = {styles.picker}
                 selectedValue={washroom}
                 onValueChange={(itemValue, itemIndex) =>
                    setWashroom(itemValue)
               }>
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                </Picker>
                </>:<View></View>}

                {/* <Text style = {styles.text}> Area (in Marlas): </Text> */}
               <TextInput
               style = {styles.textinput}
                placeholder = 'Area (in Marlas)'
                onChangeText = {(val) => setArea(val)}
                
               />


               {/* <Text style = {styles.text}> Price: </Text> */}
               <TextInput
               style = {styles.textinput}
                placeholder = 'Price in PKR'
                onChangeText = {(val) => setPrice(val)}
                
               />


               


               {/* <Text style = {styles.text}> Title: </Text> */}
               <TextInput
               style = {styles.textinput}
                placeholder = 'House Title'
                onChangeText = {(val) => setTitle(val)}
                
               />

               

               {/* //<Text style = {styles.text} > Describe property: </Text> */}
               <TextInput
               style = {styles.textinput}
                placeholder = 'Decription'
                onChangeText = {(val) => setDescription(val)}
               />

               <Button
               type = 'clear'
               title = ' Upload Picture'
               style = {{ color: '#28A745' }}
               onPress = {() => this.BottomRef.current.snapTo(0)}
               
               />


                   <TouchableOpacity  style = {styles.button} onPress = {  () => {navigation.navigate('Map', {
                             
                             title,
                             location,
                             washroom,
                             bedroom,
                             price,
                             description,
                             type,
                             portion,
                             propertytype,
                             area,
                             image
   
                      }) ; this.finish()}} >
                       <Text style = {styles.buttontxt}>Next</Text>
                   </TouchableOpacity>    

               

              {/* <Button
                 
                 style = {{ paddingBottom: 30 , width:20 , borderRadius : 15, paddingTop: 30,  }}
                 onPress = {
                   () => {navigation.navigate('Map', {
                             
                          title,
                          location,
                          washroom,
                          bedroom,
                          price,
                          description,
                          type,
                          portion,
                          propertytype,
                          area,
                          image

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
                  /> */}

                 </ScrollView>   

              </View>
        );
    }




const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  'white',
    paddingLeft: 60,
    paddingRight: 60
  },

  regform : {
    alignSelf : 'stretch'
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

  text : {
   // fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 13,
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
  


  header : {
    fontSize : 35,
    color : '#28A745',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    fontWeight: 'bold'
},
textinput : {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 40,
    color: '#28A745',
    borderBottomColor: '#28A745',
    borderBottomWidth: 1

},
button : {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#28A745',
    marginTop: 27,
    borderRadius: 50,
  //  marginEnd: 10
   

},
buttontxt : {
    color : 'white',
    fontWeight: 'bold',
    fontSize: 20
}
});