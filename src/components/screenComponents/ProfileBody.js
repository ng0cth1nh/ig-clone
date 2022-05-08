import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'

export const ProfileBody = ({ name, accountName, profileImage, post, followers, following }) => {

   return (
      <View>
         {
            accountName ? null : (
               <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  paddingVertical: 20
               }}>
                  <View style={{
                     alignItems: 'center'
                  }}>
                     <Image
                        source={profileImage}
                        style={{
                           resizeMode: 'cover',
                           width: 80,
                           height: 80,
                           borderRadius: 100
                        }}
                     />
                     <Text style={{
                        paddingVertical: 10,
                        fontWeight: 'bold'
                     }}>
                        {name}
                     </Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                     <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{post}</Text>
                     <Text>Posts</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                     <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{followers}</Text>
                     <Text>Followers</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                     <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{following}</Text>
                     <Text>Following</Text>
                  </View>
               </View>
            )
         }
      </View>
   )
}

export const ProfileButtons = ({ id }) => {
   const [follow, setFollow] = useState(follow);
   return (
      <>
         {
            id === 0 ? null : (
               <View style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center'
               }}>
                  <TouchableOpacity
                     onPress={() => setFollow(!follow)}
                     style={{ width: '42%' }}>
                     <View style={{
                        width: '100%',
                        height: 35,
                        borderRadius: 5,
                        backgroundColor: follow ? null : '#3493D9',
                        borderWidth: follow ? 1 : 0,
                        borderColor: '#DEDEDE',
                        justifyContent: 'center',
                        alignItems: 'center'
                     }}>
                        <Text style={{
                           color: follow ? 'black' : 'white'
                        }}>{follow ? 'Following' : 'Follow'}</Text>
                     </View>
                  </TouchableOpacity>
                  <View style={{
                     width: '42%',
                     height: 35,
                     borderWidth: 1,
                     borderColor: '#DEDEDE',
                     justifyContent: 'center',
                     alignItems: 'center',
                     borderRadius: 5
                  }}>
                     <Text>Message</Text>
                  </View>
                  <Feather name='chevron-down' style={{ fontSize: 20, color: 'black' }} />
               </View>
            )
         }
      </>
   )
}