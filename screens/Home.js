import React, { Component } from "react";
import { Text, StyleSheet, View, Button, ScreenContainer, Image, TouchableOpacity, FlatList } from "react-native";

import Swiper from 'react-native-swiper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import ItemCard from '../components/Itemcard';
import  Buy  from './Buy';



export const Home = ({navigation }) => (
    

             
   <View>
                  {/* <Text>Home </Text>
                  
     <Button title="Enter Location" onPress = {() => navigation.push("Recommended Ads at given Location") }/>
     <Button title="Enter Type" onPress = {() => alert("Lun")}/> */}
    <View style = {styles.sliderContainer } >
     <Swiper autoplay horizontal = {false} height = {200} activeDotColor = '#28A745' >
         <View style = {styles.slide }>
          <Image  source={require('../assets/Main/sampleA.jpg')}  resizeMode="cover" style={styles.sliderImage} />
         </View>
         {/* <View style = {styles.slide }> 
          <Image  source={require('../assets/Main/sampleB.jpg')}  resizeMode="cover" style={styles.sliderImage} />
         </View> */}
         <View style = {styles.slide }> 
          <Image  source={require('../assets/Main/sampleC.jpg')}  resizeMode="cover" style={styles.sliderImage}/>
         </View>       
     </Swiper>
    </View> 

    <View style={styles.categoryContainer} >
      <TouchableOpacity style= {styles.categoryButton} onPress = {() => {navigation.navigate('Buy')}}>
      <View style={styles.categoryIcon}>
         <Ionicons name= "ios-home" size ={50} color = '#28A745'/>
         <Text style = {styles.categoryBtnTxt}>Buy</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.categoryButton} onPress = {() => {}}>
      <View style={styles.categoryIcon}>
         <Ionicons name= "ios-rocket" size ={50} color = '#28A745'/>
         <Text style = {styles.categoryBtnTxt}>Rent</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.categoryButton} onPress = {() => {}}>
      <View style={styles.categoryIcon}>
         <Ionicons name= "ios-heart-half" size ={50} color = '#28A745'/>
         <Text style = {styles.categoryBtnTxt}>One Nighter</Text>
      </View>
      </TouchableOpacity>
    </View>
    
    <View style ={styles.cardsWrapper} >
       <Text>Near you</Text>
       
         <View >
           {/* <View style= {styles.cardImgWrapper}> 
            <Image
            source = {require('../assets/Main/list1.jpg')  }
            resizeMode = 'cover'
            style = {styles.cardImg} 
             />
           </View>
           <View style = {styles.cardInfo}>
             <Text style ={styles.cardTitle}> House#5 Phase-2 DHA</Text>
             <Text style ={styles.cardDetails}>Rawalpindi, Punjab, Pakistan</Text>
             <Text style ={styles.cardTitle}> Rs 40,00,000</Text>
           </View> */}

                <FlatList
                  style={styles.list_styles}
                  horizontal={true}
                  data={post}
                  refreshing={true}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        // navigation.navigate('ProductDetails', item);
                      }}>
                      <ItemCard item={item}></ItemCard>
                    </TouchableOpacity>
                  )}
                />

        </View>
    </View>


   </View>
        ); 






       const post = [
          { title : 'House#3 Phase-1 DHA'  ,  image : 'https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/08/full/1528397457-4687.jpg' , price : '250,000' , key : '1' },
          { title : 'Flat#2 Rafay Mall'  ,  image : 'https://is1-2.housingcdn.com/01c16c28/302e4062ceefef6c60bb4c2cdd9ab15e/v0/medium/1_bhk_apartment-for-sale-chinchwad_1-Pune-living_room.jpg' , price : '50,000' , key : '2' },
          { title : 'Haveli Waris Khan'  ,  image : 'data:image/jpeg;base64,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' , price : '350,000' , key : '3' },
          { title : 'Frostys Cafe Bahria Phase-4'  ,  image : 'https://designroot.in/uploads/project/croped/orchid-harmony-sample-flat-1.jpg' , price : '550,000' , key : '4' },
      ]     



const styles = StyleSheet.create({
 categoryContainer : {
   flexDirection : 'row',
   width : '90%',
   alignSelf : 'center',
   marginTop : 55,
   marginBottom : 10
 },

 categoryButton : {
  flex : 1,
  width: '30%',
  marginHorizontal : 0,
  alignSelf : 'center'

 },

 categoryIcon : {
   borderWidth : 0,
   alignItems : 'center',
  justifyContent : 'center',
  alignSelf : 'center',
  width : 90,
  height : 70,
  backgroundColor : 'white',
  borderRadius: 50

 },

  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  sliderContainer : {
    height : 200,
    width : '90%',
    marginTop : 10,
    justifyContent : 'center',
    alignSelf: 'center',
    borderRadius: 8 
  },

  slide : {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8
  },

  sliderImage : {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8
  },

  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },

  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#28A745',
  },

  list_styles: {
    marginTop: 25,
    paddingLeft: 10,
    paddingRight: 5,
  },
});

