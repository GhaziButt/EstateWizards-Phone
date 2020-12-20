import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
//import * as Colors from '../../assets/colors';
// import styled from 'styled-components/native';
//import * as Font from '../../assets/fonts';

 import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
 } from 'react-native-responsive-screen';

// const Line = styled.View`
//   border-width: 0.5;
//   border-color: ${Colors.GRAY_MEDIUM};
// `;

// const post = [
//     { title : 'House#3 Phase-1 DHA'  ,  image : '../assets/Main/list2.jpg' , price : '250,000' , key : '1' },
//     { title : 'Flat#2 Rafay Mall'  ,  image : '../assets/Main/list3.jpg' , price : '50,000' , key : '2' },
//     { title : 'Haveli Waris Khan'  ,  image : '../assets/Main/sampleA.jpg' , price : '350,000' , key : '3' },
//     { title : 'Frostys Cafe Bahria Phase-4'  ,  image : '../assets/Main/sampleB.jpg' , price : '550,000' , key : '4' },
// ]



const ItemCard = ({item}) => {
 //let Image_Http_URL = item.image;
//   if (item.image != undefined) {
//     Image_Http_URL = {uri: '' + item.image};
//   } else if (item.images != undefined && item.images.length > 0) {
//     Image_Http_URL = {uri: '' + item.images[0].src};
//   }
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.image_styles}
        resizeMode={'contain'}
        source={{uri: item.image}}></Image>
      {/* <Line /> */}
      <Text style={styles.list_heading}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    height: hp(29),
    // justifyContent: 'center',
    width: wp(50),
    margin: 6,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingBottom: 16,
  },
  image_styles: {
    // borderBottomWidth: 1,
    margin: 10,
    height: '70%',
    width: '90%',
    backgroundColor: 'white',
  },
  list_heading: {
    // paddingBottom: 30,
    // fontFamily: Font.FONT_FAMILY,
    paddingTop: 5,
    paddingLeft: 15,
    color: 'black',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  price: {
    paddingLeft: 15,
    color: 'black',
    fontSize: 13,
    alignSelf: 'flex-start',
    color: '#28A745',
    // fontFamily: Font.FONT_FAMILY,
  },
});

export default ItemCard;