import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';

const aboutStack = () => {
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
        name="About"
        component={About}
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

export default aboutStack;
