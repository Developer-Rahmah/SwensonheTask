import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'SwensonheTask/src/screens/home/HomeScreen';

const AppNavigator = () => {



  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator headerMode="none">



        <Stack.Screen name="HomeScreen" component={HomeScreen} />


      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
