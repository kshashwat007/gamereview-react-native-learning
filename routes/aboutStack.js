import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const aboutStack = ({ navigation }) => {
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
          headerTitle: () => <Header title="About" navigation={navigation} />
        }}
      />
    </Stack.Navigator>
  );
};

export default aboutStack;
