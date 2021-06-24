import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'SwensonheTask/src/navigations/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/services/redux/store';
export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

