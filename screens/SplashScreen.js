import React , {useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';


import { Button } from 'react-native-elements';


//import { useTheme } from '@react-navigation/native';

var BG = require('../components/Black.jpg');
var Logo = require('../components/Logo.jpeg');


 


const SplashScreen = ({navigation}) => {

       
   

   
   // const { colors } = useTheme();

    return (
    
          <ImageBackground  source = {BG}  style = {{ height: '100%' , width: '100%'}} >
                <View style = {{ flex:1 , justifyContent: 'center', alignItems: 'center'}}>
                      <Image source = {Logo} style = {{ height:240 , width:240}} ></Image>
                      <Button style = {{  backgroundColor: '#28A745' }} onPress= {() => { navigation.navigate('SignInScreen') }} type = 'outline' title = 'Start Searching!' containerStyle = {{ color: '#28A745'  }}  titleStyle = {{color: '#28A745', fontWeight:'bold', fontSize: 20 }}/>
                </View>
         </ImageBackground>

    
   // 
    

    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 3, 
    backgroundColor: '#009387',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'

  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});