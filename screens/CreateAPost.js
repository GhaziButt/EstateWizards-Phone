import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class CreateAPost extends Component{
    render(){
       return(
               <View style= {styles.container}>
               <Text> Let's Create your First Post!! </Text>
              </View>
        );
    }
}

export default CreateAPost;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});