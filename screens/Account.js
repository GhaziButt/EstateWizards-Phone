import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class Account extends Component{
    render(){
       return(
               <View style= {styles.container}>
               <Text>Account </Text>
              </View>
        );
    }
}

export default Account;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

