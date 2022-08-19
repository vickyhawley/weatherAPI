/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ImageScreen from "./screens/ImageScreen";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();


export const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Details' component={DetailsScreen}/>
          <Stack.Screen name='BigImageView' component={ImageScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;