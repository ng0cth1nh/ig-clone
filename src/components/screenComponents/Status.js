import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const Status = ({ route, navigation }) => {
   const { name } = route.params;
   const { image } = route.params;
   return (
      <View>
         <StatusBar backgroundColor='black' barStyle='light-content' />
      </View>
   )
}

export default Status