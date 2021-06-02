import React, { Component,useEffect } from "react";
import { Text, StyleSheet, View, FlatList, ScrollView, Animated, StatusBar, Image, Dimensions, Modal, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Button } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import Axios from "axios"
const { width, height } = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

export default function NewProject ({navigation}) {

  const [location , setLocation] = useState('karachi');
  const [modalOpen , setModalOpen ] = useState(false);
  const [projects,setprojects]=useState([])

  useEffect(() => {
    const getProjects = async () => {
  
      const res = await Axios.get(`http://192.168.18.121:3000/project/displayproject/${location}`)
      //console.log(res.data.projects)
      setprojects(res.data.projects)
    }
    getProjects()
    
  },[location]);
    
       return( 
       
        <View style={styles.container}>

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
            









                <FlatList
                   showsHorizontalScrollIndicator = {false}
                   data =  {  projects
                     
                  //   newProj.filter(function(arr){
                  //    return arr.location.toLowerCase()==location && arr.type.toLowerCase()==type
                  //  }) 
                  
                  
                  }
                   keyExtractor = {(item) => item._id}
                   horizontal
                   contentContainerStyle = {{ alignItems : 'center'  }}
                   snapToInterval = {ITEM_SIZE}
                   renderItem = {({ item }) => {
                        
                     return(
                      <TouchableOpacity
                       onPress = {() => {navigation.navigate('NewProjectsFS',
                      
                       {
                             
                         Title : item.title,
                         Location : item.location,
                         
                         Descrip : item.description,
                         
                         IImage : item.pictures[0],
                         Feature:item.features,
                        Developers : item.developer,
                        latlong:item.latlong
                      

                 }
                      
                     )}}
                      >
                      
                       <View style = {{ width : ITEM_SIZE}}>

                         
                       
                         <View
                           style = {{
                             marginHorizontal : SPACING,
                             padding : SPACING * 2,
                             alignItems : 'center',
                             backgroundColor : 'white',
                             borderRadius : 34,
                           }}
                         >

                           <Image
                             source = {{ uri: item.pictures[0]}}
                             style = {styles.posterImage}
                           />

                           <Text style = {{fontSize : 24 , fontWeight: 'bold' }} numberOfLines={1} >
                              {item.title}
                           </Text>

                           <Text style = {{fontSize : 17 , color : 'black', marginTop : 15 }} numberOfLines={1} >
                              {item.location}
                           </Text>

                           <Text style = {{fontSize : 28 , fontWeight: 'bold' , color: '#28A745' , marginTop : '10%', marginBottom : '10%' }} numberOfLines={1} >
                              {item.developers}
                           </Text>

                         

                           <Text style = {{fontSize : 16 , color: '#28A745' }} numberOfLines={1} >
                             Starting at {item.start}
                           </Text>

                           

                         </View>
                       </View>

                       </TouchableOpacity>
                     )
                   }
                  }
                
                  
                
                />





        </View>
        );
    }



    var newProj = [
      { title : 'Al-Ghurair Giga'  , 
        image : 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&w=1000&q=80' , 
        price : '250,000' , 
        description : 'A very beautiful House, very domestic'  , 
        key : '1',
        type : 'flats',
        location : 'karachi',
        locality : 'Nazimabad',
        developers : 'Al-Hajj Group',
        bed: '2',
        point : [ '24.8043' , '67.0577']
      },
    
      { title : 'Giga Heights'  ,
        image : 'https://i.pinimg.com/originals/ea/94/d5/ea94d52144e2582bcc30cdc6ca1a0f7f.jpg' ,
        price : '350,000' , 
        description : 'A AAAA'  , 
        key : '2',
        type : 'flats',
        location : 'lahore',
        locality : 'Bhatta Chowk',
        developers : 'Al-Amin Group',
        bed: '3',
        point : [ '33.5651' , '73.0169'] },
        

    
                { title : 'Gulberg Greens'  ,
        image : 'https://i.pinimg.com/originals/ea/94/d5/ea94d52144e2582bcc30cdc6ca1a0f7f.jpg' ,
        price : '450,000' , 
        description : 'A BCDE'  , 
        key : '3',
        type : 'flats',
        location : 'rawalpindi',
        locality : 'Westridge',
        developers : 'Star Developers',
        bed: '1-2',
        point : [ '33.5651' , '73.0169'] },
    
                 { title : 'Panoramic City'  ,
        image : 'https://i.pinimg.com/originals/ea/94/d5/ea94d52144e2582bcc30cdc6ca1a0f7f.jpg' ,
        price : '550,000' , 
        description : 'A DDE'  , 
        key : '4',
        type : 'flats',
        location : 'lahore',
        locality : 'DHA I',
        developers : 'Hashoo Group',
        bed: '2-4',
        point : [ '33.5651' , '73.0169']},
      ]
                






























    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
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
    
      picker : {
    
        borderWidth:0,
        borderColor:'#777',
        padding:10,
        margin:10,
        width:150,
        color: '#28A745',
        backgroundColor: '#D3D3D3',
        alignContent: 'center'
    
      },
    
    });