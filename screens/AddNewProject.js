import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Modal, TextInput, TouchableOpacity } from "react-native";



export default function AddNewProject ({navigation}){


   const [modalOpen , setModalOpen ] = useState(false);

   const [title , setTitle ] = useState('');
   const [bedroom , setBedroom ] = useState('');
   const [price , setPrice ] = useState('');
   const [location , setLocation ] = useState('');
   const [type , setType ] = useState('');
   const [description , setDescription ] = useState('');
   const [locality , setLocality ] = useState('');
   const [developer , setDeveloper ] = useState('');




   Test = () => {
        console.log(title);

   }

   
   
       return(
               <View style= {styles.container}>

{/* 
                   <Modal>
                       
                           <View style={{alignItems: 'center'}}>
                            <View style={styles.header}>
                             <TouchableOpacity onPress={() => setVisible(false)}>
                                      <Image
                                             source={require('./assets/x.png')}
                                             style={{height: 30, width: 30}}
                                        />
                                        </TouchableOpacity>
                                  </View>
                             </View>
                   
                             <View style={{alignItems: 'center'}}>
                                <Image
                                   source={require('./assets/success.png')}
                                   style={{height: 150, width: 150, marginVertical: 10}}
                                 />
                            </View>

                            <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
                                  Congratulations registration was successful
                           </Text>
                       


                   </Modal>
                   
                   
                   <AddNewProjectForm/> */}


                   <View style= {styles.regform}>
                   
                   <Text style = {styles.header}>Add New Project</Text>

                   <TextInput style = {styles.textinput} placeholder= "Title" underlineColorAndroid={'transparent'} onChangeText = {(val) => setTitle(val)}/>
                   <TextInput style = {styles.textinput} placeholder= "Bedroom" underlineColorAndroid={'transparent'} onChangeText = {(val) => setBedroom(val)}/>
                   <TextInput style = {styles.textinput} placeholder= "Price" underlineColorAndroid={'transparent'} onChangeText = {(val) => setPrice(val)}/>
                   <TextInput style = {styles.textinput} placeholder= "Type" underlineColorAndroid={'transparent'} onChangeText = {(val) => setType(val)}/>
                   <TextInput style = {styles.textinput} placeholder= "Location" underlineColorAndroid={'transparent'} onChangeText = {(val) => setLocation(val)}/>
                   <TextInput style = {styles.textinput} placeholder= "Locality" underlineColorAndroid={'transparent'} onChangeText = {(val) => setLocality(val)}/>
                   <TextInput style = {styles.textinput } placeholder= "Description" underlineColorAndroid ={'transparent'} onChangeText = {(val) => setDescription(val)} />
                   <TextInput style = {styles.textinput } placeholder= "Developer" underlineColorAndroid={'transparent'} onChangeText = {(val) => setDeveloper(val)}/>

                   <TouchableOpacity  style = {styles.button} onPress = {() => Test()} >
                       <Text style = {styles.buttontxt}>Add</Text>
                   </TouchableOpacity>    


               
                   </View>
               
              </View>
        );
    }




const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  '#28A745',
    paddingLeft: 60,
    paddingRight: 60
  },
  regform : {
    alignSelf : 'stretch'
},
header : {
    fontSize : 24,
    color : 'white',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1
},
textinput : {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1

},
button : {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#004e00',
    marginTop: 30,
    borderRadius: 50,
   

},
buttontxt : {
    color : 'wheat',
    fontWeight: 'bold',
    fontSize: 20
}
});