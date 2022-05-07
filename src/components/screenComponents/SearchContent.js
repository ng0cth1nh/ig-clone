import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Animated } from 'react-native'
import React from 'react'

const SearchContent = (props) => {

   const searchData = [
      {
         id: 0,
         images: [
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
         ]
      },
      {
         id: 1,
         images: [
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
         ]
      },
      {
         id: 2,
         images: [
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg"),
            require("../../storage/images/a.jpg")
         ]
      }
   ]

   return (
      <View>
         {
            searchData.map((data, index) => {
               return (
                  <>
                     {
                        data.id === 0 ?
                           (
                              <View style={{
                                 flexDirection: 'row',
                                 flexWrap: 'wrap',
                                 justifyContent: 'space-between'
                              }}>
                                 {
                                    data.images.map((image, imgIndex) => {
                                       return (
                                          <TouchableOpacity
                                             style={{ paddingBottom: 2 }}
                                             onPressIn={() => props.data(image)}
                                             onPressOut={() => props.data(null)}
                                          >
                                             <Image source={image} style={{ width: 118, height: 150 }} />
                                          </TouchableOpacity>
                                       );
                                    })
                                 }
                              </View>
                           ) : null
                     }
                     {
                        data.id === 1 ?
                           (
                              <View style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between'
                              }}>
                                 <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    width: 261,
                                    justifyContent: 'space-between'
                                 }}>
                                    {
                                       data.images.slice(0, 4).map((image, imgIndex) => {
                                          return (
                                             <TouchableOpacity
                                                style={{ paddingBottom: 2 }}
                                                onPressIn={() => props.data(image)}
                                                onPressOut={() => props.data(null)}
                                             >
                                                <Image
                                                   source={image}
                                                   style={{ width: 129, height: 150 }}
                                                />
                                             </TouchableOpacity>
                                          )
                                       })
                                    }
                                 </View>
                                 <TouchableOpacity
                                    style={{ marginLeft: 2 }}
                                    onPressIn={() => props.data(data.images[5])}
                                    onPressOut={() => props.data(null)}
                                 >
                                    <Image source={data.images[5]} style={{ width: 129, height: 300 }} />
                                 </TouchableOpacity>
                              </View>
                           ) : null
                     }
                     {
                        data.id === 2 ?
                           (
                              <View
                                 style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                 }}
                              >
                                 <TouchableOpacity
                                    style={{ paddingRight: 2 }}
                                    onPressIn={() => props.data(data.images[2])}
                                    onPressOut={() => props.data(null)}
                                 >
                                    <Image source={data.images[2]}
                                       style={{ width: 260, height: 300 }}
                                    />
                                 </TouchableOpacity>
                                 <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    width: 130,
                                    justifyContent: 'space-between'
                                 }}>
                                    {
                                       data.images.slice(0, 2).map((image, imgIndex) => {
                                          return <TouchableOpacity
                                             style={{ paddingBottom: 2 }}
                                             onPressIn={() => props.data(image)}
                                             onPressOut={() => props.data(null)}
                                          >
                                             <Image source={image} style={{ width: 129, height: 150 }} />
                                          </TouchableOpacity>
                                       })
                                    }
                                 </View>
                              </View>
                           ) : null
                     }
                  </>
               )
            })
         }
      </View>
   )
}

export default SearchContent