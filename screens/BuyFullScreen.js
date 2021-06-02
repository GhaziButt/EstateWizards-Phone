import React, { Component, useState,useEffect  } from "react";
import { Text, StyleSheet, View, FlatList, Animated, StatusBar, Image, Dimensions, Modal, 
  TouchableOpacity, Pressable, ScrollView, TextInput, TextComponent } from "react-native";
  import { ListItem, Avatar} from 'react-native-elements'
  import {useSelector} from 'react-redux'

//import { MaterialIcons } from 'react-native-vector-icons'
import { Button } from 'react-native-elements';
import MapView,  { Marker } from 'react-native-maps';
import Axios from "axios"





export default function BuyFullScreen({route, navigation}) {

    const [latitude , setLatitude] = useState(null);
    const [longitude , setLongitude] = useState(null);
    const [comments , setComments] = useState('');
    const [placed,setplaced]=useState(false)
    const [myuser,setmyuser]=useState(null)
    
    
    const  user_id  = useSelector(state=>state.authreducer.user_id)
    
    const days = 7;
    

    const {Title , Location , WRoom , BRoom , Price ,bidss, Descrip , Type, IImage , latlong, postid,user, PostTitle} = route.params;
   
    const [bids,setbids]=useState(route.params.bidss)
   
    useEffect(() => {
      const getplaced = async () => {
        try {
          
          console.log("okkk")
          const res = await Axios.get("http://192.168.18.121:3000/user/getuserbyid/" + user_id);
          setmyuser(res.data);
         
          console.log(res.data)
          var temp=false
          for(var i=0;i<res.data.bids.length;i++)
          {
            if(res.data.bids[i].post==postid)
            {
              temp=true
            }

          }
          setplaced(temp)
        
        
        }
      
        
        catch (err) {
          console.log(err);
        }
      };

      getplaced()
      
    },[user_id]);
   
    useEffect(() => {
      if(latlong){
        setLatitude(latlong[0])
        setLongitude(latlong[1])
      }
      
    },[latlong]);


    const upComment = async() => {
      console.log("1111")
      const res = await Axios.get(`http://192.168.18.121:3000/user/addbid/${user_id}/${postid}/${comments}`);
      console.log(res.data)
      const obj={
        user:user_id,
        bid:comments
        }
        setbids([...bids, obj]);
        setplaced(true);
        setComments('');
    }

    handleMessage=async()=>{



      console.log("ok1")
      const member1=user_id
      const member2=user
      
      //console.log(this.state.post)
      const findconv=await Axios.get(`http://192.168.18.121:3000/conversations/find/${member1}/${member2}/${postid}`)
      console.log(findconv.data)


      if(findconv.data){
          console.log('1')
          

            navigation.navigate('BuyChat',


                {
                   conversationid:findconv.data
                   
                })
            
            
            
           
          
      }
      else{
      const title="For Sell: "+PostTitle
      console.log(member1,member2)
      console.log("2")
      const newconv=await Axios.post('http://192.168.18.121:3000/conversations/',{senderId:member1,receiverId:member2,title:title,postid:postid})
        
      

        navigation.navigate('BuyChat',


            {
               conversationid:newconv.data
               
            }
        
        
        
        )

      
        
      
     
      
      
  }
}

    return(

       <ScrollView>

      <View style={styles.container}>

       
        <Image
          style={styles.image}
          source={{uri: IImage}}
        />
  
        <Text style={styles.bedrooms}>
          {WRoom} washroom. {BRoom} bedroom
        </Text>
  
        
        <Text style={styles.description} numberOfLines={2}>
          For {Type}.
          
        </Text>

        <Text style={{ 
              marginTop: 10,   
              fontSize: 28,
              lineHeight: 26,
              fontWeight: 'bold'

        }} numberOfLines={2}>
        
          {Title}.
        </Text>
  
        
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}></Text>
          <Text style={styles.price}>Rs. {Price} </Text>
          
        </Text>

        <Text style={styles.bedrooms}>
            {Descrip}
        </Text>
        {/* style={styles.map} */}
        {latlong.length>0?
        
        <View style={styles.locationContainer}>
              <MapView
                
                style={styles.map}
                region={{
                  latitude: Number(latlong[0]),
                  longitude:Number(latlong[1]),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: Number(latlong[0]),
                    longitude: Number(latlong[1]),
                  }}
                />
              </MapView>


          </View>:<View></View>}


          <View style= {styles.modalToggle}>
                 <Button
                       title="Message"
                       type="clear"
                       onPress= {()=> handleMessage()}
                      />
                 
                 </View>


                

                
                          
                   
                 <View style = {{ marginVertical : 50 , width: 350}}>

                 <Text style = {{  fontSize: 20 , fontWeight: 'bold', marginLeft: 6, marginBottom: 10 }}>Current Bids: </Text>  
                  
                
        
                { bids?.map((data) => (
                 <ListItem>
                   

                   <ListItem.Content>
                   <ListItem.Title style = {{ color: '#28A745' , fontWeight : 'bold', fontSize : 20, alignContent: 'center', alignItems: 'center' , alignSelf: 'center'}}>
                     PKR {data.bid}
                   </ListItem.Title>

                  
                   </ListItem.Content>

                </ListItem>
        
                 ))}

              
                   

                   
                </View>

                
                    

 
               

                {!placed?
                 <View style = {styles.footer}>
                 <TextInput     value = {comments}
                                onChangeText = {(text) => setComments(text)}
                                placeholder = 'Place your Bid!'
                                style = {styles.textinput} 
                               // onSubmitEditing = {(text) => upComment(text)}
                                
                                />

                     <TouchableOpacity activeOpacity = {0.5} onPress = {upComment} >  
                          <Text  style = {{ color: '#28A745' , fontWeight: 'bold', fontSize:35 }} >+</Text>
                     </TouchableOpacity>                
                 </View>:<View></View>}
       
     

      </View>
      </ScrollView> 

    );
}




var comms = [
  { text : 'Great House, I love it!'},
  { text : 'Awsome windows!'},
  { text : 'The Wizards were really useful!'},
  { text : 'I love the colors!'},
]



const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    image: {
      width: '100%',
      aspectRatio: 3 / 2,
      resizeMode: 'cover',
      borderRadius: 10,
    },
  
    bedrooms: {
      marginVertical: 10,
      color: '#5b5b5b',
    },
    bedroomsA: {
        marginVertical: 10,
        color: '#5b5b5b',
        lineHeight : 24
      },
    description: {
      fontSize: 18,
      lineHeight: 26,
    },
    prices: {
      fontSize: 18,
      marginVertical: 10,
    },
    oldPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'line-through',
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#28A745'
    },
    totalPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'underline',
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
    locationContainer: {
        // ...StyleSheet.absoluteFillObject,
            height: 150,
            width: '100%',
            marginTop: 10,
            paddingTop:10
        },
        setLocationContainer:{
            padding: 10,
            height: '100%'
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        },
        textinput : {
          bottom : 0, 
          height : 40,
          flex : 1,
          marginRight : 15,
          borderColor : 'transparent',
          backgroundColor : '#ECECEC',
          borderWidth : 1,
          padding : 10, 
          color : 'grey',
          borderRadius : 30
        },
        footer : {
          flexDirection : 'row',
          alignItems : 'center',
          width : '100%',
          padding : 15
        },
    });
  