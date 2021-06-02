import React, { Component, useState ,useEffect} from "react";
import { Text, StyleSheet, View, FlatList, Animated, StatusBar, Image, Dimensions, Modal, TouchableOpacity, Pressable, ScrollView } from "react-native";


import MapView,  { Marker } from 'react-native-maps';


export default function NewProjectsFullscreen({route, navigation}) {

    const [latitude , setLatitude] = useState(null);
    const [longitude , setLongitude] = useState(null);

    useEffect(() => {
      if(latlong){
        setLatitude(latlong[0])
        setLongitude(latlong[1])
      }
      
    },[latlong]);
    
    const days = 7;

    const {Title , Descrip ,  IImage , latlong , Developers,Location,Feature } = route.params;


    return(

       <ScrollView>

      <View style={styles.container}>

       
        <Image
          style={styles.image}
          source={{uri: IImage}}
        />
  
        
  
        
        <Text style={styles.description} numberOfLines={2}>
          {Title}
        </Text>

        <Text style={styles.description} numberOfLines={4}>
          {Feature}
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
                  latitude: latitude,
                  longitude:longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                />
              </MapView>
          </View>:<View></View>}

          <Text style={styles.developers}>
            A Project of {Developers}
        </Text>
       
     

      </View>
      </ScrollView> 

    );
}



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
    developers: {
        fontSize: 21,
        marginVertical: 20,
        color: '#5b5b5b',
      },
    bedroomsA: {
        marginVertical: 10,
        color: '#5b5b5b',
        lineHeight : 24
      },
    description: {
        paddingBottom: 10,
      paddingTop :10,  
      fontSize: 33,
      lineHeight: 26,
      color :'black'
    },
    prices: {
      fontSize: 20,
      marginVertical: 10,
      color: 'black'
    },
    oldPrice: {
      color: '#5b5b5b',
      //textDecorationLine: 'line-through',
    },
    price: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 25
    },
   type: {
        
        color: 'black',
        fontSize: 20
      },
    locality: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 22
      },
    totalPrice: {
      color: '#5b5b5b',
      textDecorationLine: 'underline',
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
  });
  