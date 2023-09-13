import React from 'react';
import { StyleSheet, View } from 'react-native';
import Starter from './screens/Starter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Starter" component={Starter} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}

