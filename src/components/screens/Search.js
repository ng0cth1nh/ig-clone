import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import SearchBox from '../screenComponents/SearchBox'
import SearchContent from '../screenComponents/SearchContent'


const Search = () => {


   const [image, setImage] = useState(null);

   const getData = data => {
      setImage(data);
   }

   const windowWidth = Dimensions.get('window').width;
   const windowHeight = Dimensions.get('window').height;

   return (
      <View style={{
         width: '100%',
         height: '100%',
         backgroundColor: 'white',
         position: 'relative'
      }}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <SearchBox />
            <SearchContent data={getData} />
            <TouchableOpacity style={{
               margin: 25,
               justifyContent: 'center',
               alignItems: 'center'
            }}>
               <AntDesign name="pluscircleo" style={{ fontSize: 40, opacity: 0.5 }} />
            </TouchableOpacity>
         </ScrollView>
         {
            image ?
               (
                  <View style={{
                     position: 'absolute',
                     zIndex: 1,
                     width: '100%',
                     height: '100%',
                     backgroundColor: 'rgba(52,52,52,0.8)',
                  }}>
                     <StatusBar backgroundColor='#525252' barStyle='dark-content' />
                     <View
                        style={{
                           position: 'absolute',
                           top: windowHeight / 6,
                           left: windowWidth / 18,
                           backgroundColor: 'white',
                           width: 320,
                           height: 445,
                           borderRadius: 15,
                           zIndex: 1,
                           elevation: 50,
                        }}
                     >
                        <View style={{
                           flexDirection: 'row',
                           alignItems: 'center',
                           paddingVertical: 10,
                           paddingHorizontal: 15
                        }}>
                           <Image
                              source={image}
                              style={{
                                 height: 30,
                                 width: 30,
                                 borderRadius: 100
                              }}
                           />
                           <View style={{ paddingLeft: 8 }}>
                              <Text style={{ fontSize: 12, fontWeight: '600' }}>
                                 ng0cth1nh
                              </Text>
                           </View>
                        </View>
                        <Image source={image} style={{ width: '100%', height: '80%' }} />
                        <View style={{
                           flexDirection: 'row',
                           alignItems: 'center',
                           padding: 8,
                           width: '100%',
                           justifyContent: 'space-around'
                        }}>
                           <Ionic name='ios-heart-outline' style={{ fontSize: 26 }} />
                           <Ionic name='ios-person-circle-outline' style={{ fontSize: 26 }} />
                           <Feather name='navigation' style={{ fontSize: 26 }} />
                        </View>
                     </View>
                  </View>
               ) : null
         }
      </View>
   )
}

export default Search