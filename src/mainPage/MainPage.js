import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { Avatar } from 'react-native-paper'
import Searchbar from './component/Searchbar'

const MainPage = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = React.useState('')

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Music')}
          style={styles.opacityContainer}
        >
          <Avatar.Icon
            style={styles.avatarIcon}
            size={42}
            icon="music"
          />
        </TouchableOpacity>

        <View style={styles.container}>
          <Searchbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </View>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  childContainer: {
    alignItems: 'flex-end',
    flex: 3,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  avatarIcon: {
    backgroundColor: 'green'

  },
  opacityContainer: {
    marginBottom: 11,
    paddingLeft: 5,
    opacity: 1
  }
})

export default MainPage
