import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'SwensonheTask/src/screens/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTab from '../components/BottomTab';
import HomeStack from 'SwensonheTask/navigations/HomeStack';

const AppNavigator = () => {

  const Tab = createBottomTabNavigator()


  const Stack = createStackNavigator();

  return (
    <>
      {/* <Stack.Navigator headerMode="none"> */}



      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}

      <Tab.Navigator tabBar={props => <BottomTab  {...props} />}>
        <Tab.Screen
          name='Live'

          component={HomeStack}
          options={{
            tabBarIcon: require('SwensonheTask/assets/icons/heart.png'),
            tabBarLabel: "Live"
          }}
        />
        <Tab.Screen
          name='History'
          component={HomeStack}
          options={{
            tabBarIcon: require('SwensonheTask/assets/icons/calendar.png'),
            tabBarLabel: "History"

          }}
        />
        {/* center */}
        <Tab.Screen
          name='t'

          component={HomeStack}
          options={{
            tabBarIcon: require('SwensonheTask/assets/icons/heart-chart.png'),
            tabBarLabel: ""

          }}
        />
        <Tab.Screen
          name='Medical'

          component={HomeStack}
          options={{
            tabBarIcon: require('SwensonheTask/assets/icons/medical.png'),
            tabBarLabel: "Medical"

          }}
        />
        <Tab.Screen
          name='Account'
          component={HomeStack}
          options={{
            tabBarIcon: require('SwensonheTask/assets/icons/account.png'),
            tabBarLabel: "Account"

          }}
        />

      </Tab.Navigator>
      {/* </Stack.Navigator> */}
    </>
  );
};

export default AppNavigator;
