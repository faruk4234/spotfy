import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { IconButton, Searchbar, Avatar } from 'react-native-paper'

const [musicButton, setMusicButton] = React.useState(false)

const index = () => {
  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.opacityContainer}
      >
        <Avatar.Icon
          style={styles.avatarIcon}
          size={46}
          icon="music"
        />

      </TouchableOpacity>
      <Searchbar
        iconColor="blue"
        theme="green"
        clearIcon
        style={styles.input}
        placeholder="Text Message"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: musicButton ? 400 : 0,
    alignItems: 'flex-end',
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    height: 50,
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
  avatarIcon: {
    backgroundColor: 'green'
  },
  opacityContainer: {
    alignItems: 'flex-end',
    marginBottom: 11,
    paddingLeft: 5
  }
})

export default index
