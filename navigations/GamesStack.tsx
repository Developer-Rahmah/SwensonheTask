import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Games from 'SwensonheTask/src/screens/games/index'
import GameDetails from 'SwensonheTask/src/screens/games/details/index'

const Stack = createStackNavigator()
export default class GamesStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Games' component={Games} />
        <Stack.Screen name='GameDetails' component={GameDetails} />
      </Stack.Navigator>
    )
  }
}
