import React, { Component, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Formik } from 'formik';
import { TextInput } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native-elements';

export default class BuyForm extends Component {
 
    constructor(){

        super();
        this.state = {

            location : '',
            type: ''
        }
    }
    

    Show = (value) => {
        this.setState({
            location : value
        });
    }
     
    Show2 = (value) => {
        this.setState({
            type : value
        });
    }


    render()
    {

    return(


        <View>
            

        <Picker
           selectedValue= {this.state.location}
           //style={styles.picker}
           onValueChange={this.Show.bind()} //props.handleChange('location')
           //value = {props.values.location}
           itemStyle={styles.itemStyle}
        >
            <Picker.Item label="Location" value="0" />
            <Picker.Item label="Islamabad" value="islamabad" />
            <Picker.Item label="Rawalpindi" value="rawalpindi" />
            <Picker.Item label="Lahore" value="lahore" />
            <Picker.Item label="Karachi" value="karachi" />
        </Picker>

        <Picker
           selectedValue= {this.state.type}
          // style={styles.picker}
           onValueChange={this.Show2.bind()} //props.handleChange('location')
           //value = {props.values.location}
           itemStyle={styles.itemStyle}
        >
            <Picker.Item label="Type" value="0" />
            <Picker.Item label="House" value="house" />
            <Picker.Item label="Flat" value="flat" />
            <Picker.Item label="Plot" value="plot" />
            <Picker.Item label="Commercial" value="commercial" />
        </Picker>

        <Button
           title="Enter"
           type='clear'
           onPress = {() =>{}} //props.handleSubmit 
        />
         

   
</View>

       

    );

    }


    
    
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        width: 100
      },

    picker: {
        width: 100
      },
});