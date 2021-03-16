import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

class LikedPosts extends Component{
    render(){
       return(
               <View style= {styles.container}>
               <Text> Here are all your Liked Ads! </Text>
              </View>
        );
    }
}

export default LikedPosts;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

