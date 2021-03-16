import React, { Component  } from "react";
import { Text, StyleSheet, View, FlatList, Animated, StatusBar, Image, Dimensions, Modal } from "react-native";
import { Button } from 'react-native-elements';




export default function ResCostPredict ( { route ,navigation}){

    const { Location , WRoom , BRoom ,  Type, Lat , Long , Area, Price} = route.params;

    return(
     
        <Text style = {{ fontSize: 30 }}>  {Price.price}   </Text>
    );
}