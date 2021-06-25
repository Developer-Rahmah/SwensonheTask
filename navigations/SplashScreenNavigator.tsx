import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from 'SwensonheTask/src/screens/splashScreen/index'

const Stack = createStackNavigator()
const SplashScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
    </Stack.Navigator>
  )
}

export default SplashScreenNavigator
