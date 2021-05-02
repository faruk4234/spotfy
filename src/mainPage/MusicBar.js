import React from 'react'
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity
} from 'react-native'
import Searchbar from './component/Searchbar'

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

const MusicBar = ({ navigation }) => {

  const Item = () => (

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.opacityContainer}
      >
        <Text style={styles.textStyle}>Vazgeç</Text>
      </TouchableOpacity>
      <Searchbar />

      <FlatList
        contentContainerStyle={styles.flatList}
        data={DATA}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginHorizontal: 20,
    top: '20%',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
  },
  flatList: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'purple',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 12,
  },
  opacityContainer: {
    backgroundColor: 'red',
    marginHorizontal: 50,
    borderRadius: 40,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
})

export default MusicBar
