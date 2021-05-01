import React from 'react'
import {
  View, Text, StyleSheet, FlatList
} from 'react-native'
import MusicItem from './component/MusicItem'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7a1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68a8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da6-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7a3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68a8',
    title: 'Second Item',
  },
  {
    id: '58694a0f1e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7a1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68a8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da6-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7a3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68a8',
    title: 'Second Item',
  },
  {
    id: '58694a0f1e29d72',
    title: 'Third Item',
  },

]

const MusicBar = () => {

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        contentContainerStyle={styles.flatList}
        data={DATA}
        renderItem={MusicItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatList: {
    flexDirection: 'column',
  }
})

export default MusicBar
