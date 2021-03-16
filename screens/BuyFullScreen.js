import React, { Component, useState  } from "react";
import { Text, StyleSheet, View, FlatList, Animated, StatusBar, Image, Dimensions, Modal, TouchableOpacity, Pressable, ScrollView } from "react-native";

import { MaterialIcons } from 'react-native-vector-icons'
import { Button } from 'react-native-elements';
import MapView,  { Marker } from 'react-native-maps';


export default function BuyFullScreen({route, navigation}) {

    const [latitude , setLatitude] = useState(Lat);
    const [longitude , setLongitude] = useState(Lon);
    
    const days = 7;

    const {Title , Location , WRoom , BRoom , Price , Descrip , Type, IImage , Lat , Lon} = route.params;


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
          {Type}.{Title}
        </Text>
  
        
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>$500,000</Text>
          <Text style={styles.price}>  ${Price} </Text>
          
        </Text>

        <Text style={styles.bedrooms}>
            {Descrip}
        </Text>
        {/* style={styles.map} */}

        <View style={styles.locationContainer}>
              <MapView
                
                style={styles.map}
                region={{
                  latitude: Number(Lat),
                  longitude:Number(Lon),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: Number(Lat),
                    longitude: Number(Lon),
                  }}
                />
              </MapView>
          </View>
       
     

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
      fontWeight: 'bold',
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
  