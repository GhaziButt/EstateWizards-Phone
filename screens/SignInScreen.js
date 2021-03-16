 import React, { useState } from 'react';
 import { 
     View, 
     Text, 
     TouchableOpacity, 
     TextInput,
     Platform,
     StyleSheet ,
     StatusBar,
     Alert,
     ImageBackground,
     Image

 } from 'react-native';
 import {useSelector,useDispatch} from 'react-redux'
 import {signedin} from "../actions"

 import axios from 'axios';

 import { Button } from 'react-native-elements';


export default function SignInScreen ({navigation}) {

  const dispatch=useDispatch();
  const [email , setEmail] = useState ('');
  const [password , setPassword] = useState ('');
 
  


  loginn=async()=>{
    const config = {
        headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = {email, password}
    console.log(body);
    
  
    const res=await axios.post("http://192.168.43.211:3000/user/signin",body,config)
    
    
    if(res.data.success){
      
      const recieveddata={id:res.data.userid,name:res.data.name,location:res.data.location,token:res.data.token}
      dispatch(signedin(recieveddata))
      setIsLoggedIn(true);
      
      alert("login sucessfull")
     // navigation.navigate('Home')
      // if(recieveddata){
      //   SetLoginData({ ...loginData, redirect:true});
      // }

    }
    else{
      alert("login Unsuccesful")
    }
    
    
  }

   const BG = require('../components/white1.png') ;
   const logo = require('../components/whiteLogo.jpeg');
  

    return(


        <ImageBackground  source = {BG} style = {{ height: '100%' , width: '100%'}} >

        <View style = {styles.container}>

        

        <Text style = {({ fontSize : 15 , alignContent : 'flex-start'})}> Email </Text>
        <TextInput
         style = {styles.input}
         placeholder = 'e.g Kashan House'
         onChangeText = {(val) => setEmail(val)}
         
        />

        <Text style = {({ fontSize : 15})}> Password </Text>
        <TextInput
          style = {styles.input}
         placeholder = 'e.g Kashan House'
         onChangeText = {(val) => setPassword(val)}
         
        />
        
        <View  style = {{ paddingRight : 45 }} >
        
        <View style = {styles.Toggle}>

        <Button
        type = 'clear'
        title = 'Sign In'
        titleStyle = {{ fontSize: 25 , fontWeight: 'bold', color : '#28A745'}}
        onPress= {() =>  loginn() }
        />

        </View>

        <View  style = {{paddingTop : 100 }} >

        <Button
        type = 'clear'
        title = 'Sign Up'
        
        onPress= {() => { navigation.navigate('SignUpScreen')}}
        />

        </View>


        </View>
        

        </View>

     </ImageBackground>

    );
}





const styles = StyleSheet.create({
    container: {
      flex: 3, 
      //backgroundColor: 'yellow',
      alignContent: 'center',
      justifyContent: 'center',
      //alignItems: 'center'
      paddingLeft: 35
    },
    input:{
        borderWidth:0,
        borderColor:'#777',
        padding:10,
        margin:10,
        width:300,
        backgroundColor: '#D3D3D3'
      },
      Toggle: {
        marginTop: 25,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#28A745',
        padding: 10,
        borderRadius: 30,
        alignSelf: 'center',
        
      }, 
});