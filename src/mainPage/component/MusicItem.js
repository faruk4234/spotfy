import React from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput
} from 'react-native'

const Item = ({ title }) => (

  <View style={styles.item}>
    <TouchableOpacity>
      <Text>
        SASD
      </Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'purple',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    width: '30%',
    height: '40%'
  }
})

export default Item
