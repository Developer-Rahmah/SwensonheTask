import React, { Reducer } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UsersNavigator from 'SwensonheTask/src/navigations/UsersNavigator'
import { useSelector } from 'react-redux'
import SplashScreenNavigator from 'SwensonheTask/src/navigations/SplashScreenNavigator'
import { Store } from 'redux'
import { State } from 'react-native-gesture-handler'

const AppNavigator = () => {
  const Stack = createStackNavigator()
  const showGifImage = useSelector<any>(state => state.showGifImage)

  return (
    <Stack.Navigator headerMode='none'>
      {showGifImage == 'yes' ? (
        <Stack.Screen name='Splash' component={SplashScreenNavigator} />
      ) : (
        <Stack.Screen name='Users' component={UsersNavigator} />
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator
