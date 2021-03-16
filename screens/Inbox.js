import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class Inbox extends Component{
    render(){
       return(
               <View style= {styles.container}>
               <Text>Your messages </Text>
              </View>
        );
    }
}

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

