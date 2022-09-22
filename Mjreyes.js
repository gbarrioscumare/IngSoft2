import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'


export default function Mjreyes() {
  return (
    <ScrollView
      centerContent
      style= {styles.viewBody}m
      style={{flex: 1,backgroundColor: '#e6e8db'}}
      
      
    >
      <Image
          source  ={ require('../assets/fondito.png')}
          resizeMode = 'contain'
          style = {styles.image}
          />
          <Text></Text>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
      viewBody: {
          marginHorizontal:10
      },
      image: {
        height: 380,
        width: '100%',
        marginBottom: 5
      },
      title: {
        fontWeight: 'bold',
        fontSize: 10,
        marginVertical: 0,
        textAlign: 'center'
      }
})