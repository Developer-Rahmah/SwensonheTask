import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "SwensonheTask/src/navigations/AppNavigator";

export default function App() {
  console.disableYellowBox = true;

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
