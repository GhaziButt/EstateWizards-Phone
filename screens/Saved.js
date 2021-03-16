import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export const Saved = ({navigation }) => (
    

  //<ScreenContainer>
       <View>
       <Text>Home </Text>
       
       <Button title="Liked Ads" onPress = {() => navigation.push("Liked Posts") }/>
       <Button title="Saved Ads" onPress = {() => alert("Lun")}/>
  {/* //</ScreenContainer> */}
      </View>
); 


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

