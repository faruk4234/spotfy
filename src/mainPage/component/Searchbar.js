import React from 'react'
import {
  StyleSheet
} from 'react-native'

import { Searchbar } from 'react-native-paper'

const Searchbars = ({ searchQuery, setSearchQuery }) => (

  <Searchbar
    iconColor="blue"
    theme="green"
    clearIcon
    style={styles.input}
    placeholder="Text Message"
    onChangeText={setSearchQuery}
    value={searchQuery}
  />
)

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 45,
    margin: 10,
    paddingRight: 20,
    borderWidth: 0.6,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
})

export default Searchbars
