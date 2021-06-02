import React, { Component, useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, ScrollView, Animated, StatusBar, Image, Dimensions, Modal, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';

import { Picker } from '@react-native-picker/picker';
import axios from "axios"
//import CalendarPicker from 'react-native-calendar-picker';
import DatepickerRange from 'react-native-range-datepicker';
//import { clockRunning } from "react-native-reanimated";

const { width, height } = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

//import moment from 'moment-timezone';

export default function FindHost ({navigation}) {

  const [modalOpen , setModalOpen ] = useState(false);
  const [location , setLocation] = useState('Islamabad');
  const [selectedStartDate , setSelStartDate] = useState(new Date());
  const [selectedEndDate , setSelEndDate] = useState(new Date());
  const [datess,setdates]=useState(null)
  const [hostings,sethostings]=useState(null)
  //const { selectedStartDate, selectedEndDate } = this.state;
  const minDate = new Date(); // Today
  const maxDate = new Date(2017, 6, 3);
  const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';
  
 // this.onDateChange = this.onDateChange.bind(this);


 useEffect(() => {
  var getDates = function(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    for(var i=0; i<dates.length; i++){
        dates[i]=dates[i].toISOString().substring(0, 10)
    }
    setdates(dates)
  };   

  getDates(selectedStartDate,selectedEndDate)
  console.log(datess)
}, [selectedStartDate]);


useEffect (() => {
  if(datess){
    
    const gethost = async () => {
      try {
        console.log("ok1")
        const res = await axios.get(`http://192.168.18.121:3000/host/displayhostings/${datess}/${location}`)
        console.log(res.data.posts)
        console.log("ok2")
        sethostings(res.data.posts)
      } catch (err) {
        console.log(err);
      }
    };
    gethost()
   
  }
  
}, [datess]);

  onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      console.log(selectedEndDate);
      setSelEndDate(date)
       } 
       
       else {
                console.log(selectedStartDate);
                setSelStartDate(date)
        }
  
      }


     


   
       return(
                     
               <View style= {styles.container}>
                 
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






                      <View style = {styles.calender} >

                      {/* <CalendarPicker
                        startFromMonday={true}
                       allowRangeSelection={true}
                       minDate={minDate}
                       maxDate={maxDate}
                       todayBackgroundColor="#f2e6ff"
                       selectedDayColor="#7300e6"
                       selectedDayTextColor="#FFFFFF"
                       onDateChange={onDateChange}
                      />

                      <View>

                      <Text>SELECTED START DATE:{ startDate }</Text>
                      <Text>SELECTED END DATE:{ endDate }</Text>
 
                      </View> */}



                       <DatepickerRange
                          startDate = '13052017'
                          untilDate = '26062017'
                          onConfirm = {( startDate, untilDate ) => { setSelStartDate(startDate) ; setSelEndDate(untilDate) ; console.log(typeof(selectedStartDate)) ; console.log(selectedEndDate) ; setModalOpen(false)}}
                        />

                      </View>


                     </View>
                 </Modal>
                 

                 <View style= {styles.modalToggle}>
                 <Button
                       title="Select"
                       type="clear"
                       onPress= {() => setModalOpen(true)}
                      />
                 
                 </View>






                 <View>



                 <FlatList
                   showsHorizontalScrollIndicator = {false}
                   data =  { hostings
                     
                  //   newProj.filter(function(arr){
                  //    return arr.location.toLowerCase()==location && arr.type.toLowerCase()==type
                  //  }) 
                  
                  
                  }
                   keyExtractor = {(item) => item.key}
                   horizontal
                   contentContainerStyle = {{ alignItems : 'center'  }}
                   snapToInterval = {ITEM_SIZE}
                   renderItem = {({ item }) => {
                        
                     return(
                      <TouchableOpacity
                       onPress = {() => {navigation.navigate('Find HostFS',
                      
                       {

                        Title : item.title,
                        Location : item.location,
                        WRoom : item.bathrooms,
                        BRoom : item.rooms,
                        Price : item.price,
                        Descrip : item.description,
                        IImage : item.pictures[0],
                        Portion : item.portions,
                        user:item.user,
                        dates:datess,
                        postid:item._id




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

                           <Text style = {{fontSize : 24 , fontWeight: 'bold' }} numberOfLines={2} >
                              {item.title}
                           </Text>

                           <Text style = {{fontSize : 17 , color : 'black', marginTop : 15 }} numberOfLines={1} >
                              {item.location}
                           </Text>

                           <Text style = {{fontSize : 28 , fontWeight: 'bold' , color: '#28A745' , marginTop : '10%', marginBottom : '10%' }} numberOfLines={1} >
                              {item.price}
                           </Text>

                         

                           {/* <Text style = {{fontSize : 16 , color: '#28A745' }} numberOfLines={1} >
                              {item.type}
                           </Text> */}

                           

                         </View>
                       </View>

                       </TouchableOpacity>
                     )
                   }
                  }
                
                  
                
                />



                 </View>


              </View>
        );
    }




const styles = StyleSheet.create({
  container: {
    flex:1,
    
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
  calender: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },

  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },

});