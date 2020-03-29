import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import CatScreen from './screens/Cat';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cat" component={CatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const screenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};
