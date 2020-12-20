import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class AboutUS extends Component{
    render(){
       return(
               <View style= {styles.container}>
               <Text> Here are all the things you can buy! </Text>
              </View>
        );
    }
}

export default AboutUS;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});