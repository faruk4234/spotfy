import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainPage from './MainPage'
import MusicBar from './MusicBar'

const Stack = createStackNavigator()

function index() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.1],
                outputRange: [0, 0.15],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
      >

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={MainPage}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Music"
          component={MusicBar}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index
