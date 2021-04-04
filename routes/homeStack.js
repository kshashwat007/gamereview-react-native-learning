import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const homeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60
        },
        headerTintColor: '#444'
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Gamezone'
        }}
      />
      <Stack.Screen
        name="Reviews"
        component={ReviewDetails}
        options={{
          title: 'Review Details'
        }}
      />
    </Stack.Navigator>
  );
};

export default homeStack;
