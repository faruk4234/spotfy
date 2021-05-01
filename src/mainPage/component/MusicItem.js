import React from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput
} from 'react-native'

const Item = ({ title }) => (

  <TouchableOpacity>
    <View style={styles.item}>
      <Text>
        SASD
      </Text>
      <Text>
        SASD
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'purple',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    width: '30%',
    height: '80%'
  }
})

export default Item
