import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import ReelsComponent from '../screenComponents/ReelsComponent'

const Reels = () => {

   const windowWidth = Dimensions.get('window').width;
   const windowHeight = Dimensions.get('window').height;

   return (
      <View style={{
         width: windowWidth,
         height: windowHeight,
         position: 'relative',
         backgroundColor: 'black'
      }}>
         <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            zIndex: 1,
            padding: 10
         }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Reels</Text>
            <Feather name='camera' style={{ fontSize: 25, color: 'white' }} />
         </View>
         <ReelsComponent />
      </View>
   )
}

export default Reels