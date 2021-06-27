import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeStack from "SwensonheTask/src/navigations/HomeStack";

import BottomTab from "../components/BottomTab";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
        <Tab.Screen
          name="Live"
          component={HomeStack}
          options={{
            tabBarIcon: require("SwensonheTask/assets/icons/heart.png"),
            tabBarLabel: "Live"
          }}
        />
        <Tab.Screen
          name="History"
          component={HomeStack}
          options={{
            tabBarIcon: require("SwensonheTask/assets/icons/calendar.png"),
            tabBarLabel: "History"
          }}
        />
        <Tab.Screen
          name="t"
          component={HomeStack}
          options={{
            tabBarIcon: require("SwensonheTask/assets/icons/heart-chart.png"),
            tabBarLabel: ""
          }}
        />
        <Tab.Screen
          name="Medical"
          component={HomeStack}
          options={{
            tabBarIcon: require("SwensonheTask/assets/icons/medical.png"),
            tabBarLabel: "Medical"
          }}
        />
        <Tab.Screen
          name="Account"
          component={HomeStack}
          options={{
            tabBarIcon: require("SwensonheTask/assets/icons/account.png"),
            tabBarLabel: "Account"
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;
