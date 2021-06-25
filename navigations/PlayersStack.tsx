import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Players from 'SwensonheTask/src/screens/players/index'
import PlayerDetails from 'SwensonheTask/src/screens/players/details/index'

const Stack = createStackNavigator()
export default class PlayersStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Players' component={Players} />
        <Stack.Screen name='PlayerDetails' component={PlayerDetails} />
      </Stack.Navigator>
    )
  }
}
