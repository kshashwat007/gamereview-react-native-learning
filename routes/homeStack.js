import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const homeStack = ({ navigation }) => {
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
          headerTitle: () => <Header title="Gamezone" navigation={navigation} />
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
