
import React, { Component  } from "react";
import { Text, StyleSheet, View, FlatList, Animated, StatusBar, Image, Dimensions, Modal, TouchableOpacity } from "react-native";
import { useState } from "react";
import { MaterialIcons } from 'react-native-vector-icons'
import { Button } from 'react-native-elements';
//import  BuyForm  from '../components/locationtype';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;





export default function Buy({navigation}) {
   
 const [location , setLocation] = useState('karachi');
 const [type , setType] = useState('house');
 const [modalOpen , setModalOpen ] = useState(false);

 
 Save = (value) => {
  setLocation(value);
}

Save2 = (value) => {
setType(value);
}

mainOnpress = () => {
  setModalOpen(false);
}

// filterbyLoc = () => {
  
//    const buy = buypost.filter(item =>  { item.location == location && item.type == type}) ;

//    setModalOpen(false);
//  }

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

                <FlatList
                   showsHorizontalScrollIndicator = {false}
                   data =  {  buypost.filter(function(arr){
                     return arr.location.toLowerCase()==location && arr.type.toLowerCase()==type
                   }) }
                   keyExtractor = {(item) => item.key}
                   horizontal
                   contentContainerStyle = {{ alignItems : 'center'  }}
                   snapToInterval = {ITEM_SIZE}
                   renderItem = {({ item }) => {
                        
                     return(
                      <TouchableOpacity
                      onPress = {() => {navigation.navigate('BuyFullScreen',
                      
                      {
                             
                        Title : item.title,
                        Location : item.location,
                        WRoom : item.washroom,
                        BRoom : item.bedroom,
                        Price : item.price,
                        Descrip : item.description,
                        Type : item.type,
                        IImage : item.image,
                        Lat : item.point[0],
                        Lon : item.point[1]

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
                             source = {{ uri: item.image}}
                             style = {styles.posterImage}
                           />

                           <Text style = {{fontSize : 24 }} numberOfLines={1} >
                              {item.title}
                           </Text>

                           <Text style = {{fontSize : 28 , fontWeight: 'bold' , color: '#28A745' , marginTop : '10%', marginBottom : '10%' }} numberOfLines={1} >
                              {item.price}
                           </Text>

                           <Text style = {{fontSize : 12 }} numberOfLines={2} >
                              {item.description}
                           </Text>

                           <Text style = {{fontSize : 16 , color: '#28A745' }} numberOfLines={1} >
                              {item.type}
                           </Text>

                           <Text style = {{fontSize : 12  }} numberOfLines={1} >
                              {item.location}
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
      description : 'A very nice view of the beach!' ,
        washroom : '3',
         bedroom : '5' ,
          type : 'House' ,
          location : 'Karachi',
            key : '5',
            point : [ '24.7387' , '67.1909'] },

             { title : 'Flat#2 Beeeeeeeeeeeeeeeeeeeeeeeee'  ,
    image : 'https://i.pinimg.com/originals/ea/94/d5/ea94d52144e2582bcc30cdc6ca1a0f7f.jpg' ,
     price : '50,000' ,
      description : 'A very beautiful House, smells like summer' ,
        washroom : '3',
         bedroom : '5' ,
          type : 'plot' ,
          location : 'Islamabad',
            key : '6',
            point : [ '33.4415' , '73.4392'] },
            


  { title : 'Killa # 4'  ,  image : 'https://wallpapercave.com/wp/wp2406660.jpg' ,  price : '50,000' , description : 'A very beautiful House, very light rich', washroom : '4', bedroom : '8'  , type : 'Plot', key : '3',location : 'Islamabad', point : [ '33.6615' , '73.1392']},
  { title : 'Plaza # 2 Bahria Phase-4' ,  image : 'https://cdn.vox-cdn.com/thumbor/orQnkpvMpeD2246G66BgiDxiQ8c=/0x0:2000x1335/1400x1400/filters:focal(840x508:1160x828):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55683469/05_Living_and_Dining.0.jpg' , price : '550,000' , description : 'A very Bad House, very domestic, smells like Serenity'  , washroom : '3', bedroom : '3' , type: 'Commercial', key : '4',location : 'Rawalpindi', point : [ '33.5651' , '73.0169'] },
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
  }

});