import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from 'SwensonheTask/src/navigations/HomeStack'
import BottomTab from 'SwensonheTask/src/layout/BottomTab'
import PlayersStack from 'SwensonheTask/src/navigations/PlayersStack'
import GamesStack from 'SwensonheTask/src/navigations/GamesStack'

const Tab = createBottomTabNavigator()

const UsersNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen
        name='Teams'
        component={HomeStack}
        options={{
          tabBarIcon: require('SwensonheTask/assets/icons/teams.png'),
        }}
      />
      <Tab.Screen
        name='Players'
        component={PlayersStack}
        options={{
          tabBarIcon: require('SwensonheTask/assets/icons/players.png'),
        }}
      />

      <Tab.Screen
        name='Games'
        component={GamesStack}
        options={{
          tabBarIcon: require('SwensonheTask/assets/icons/flaming_football.png'),
        }}
      />
    </Tab.Navigator>
  )
}

export default UsersNavigator
