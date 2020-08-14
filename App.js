/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './MobileApp/screens/Home';
import AddCats from './MobileApp/screens/AddCats';



const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="AddCats" component={AddCats} />
        <Tab.Screen name="Home" component={Home} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
