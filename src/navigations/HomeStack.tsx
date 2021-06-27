import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import HomeScreen from "SwensonheTask/src/screens/home/HomeScreen";

const Stack = createStackNavigator();
export default class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Teams"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    );
  }
}
