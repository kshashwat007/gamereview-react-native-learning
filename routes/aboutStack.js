import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import { Image } from 'react-native';

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
          headerTitle: () => <Header title="About" navigation={navigation} />,
          headerBackground: () => (
            <Image
              source={require('../assets/game_bg.png')}
              style={{ height: '100%' }}
            />
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default aboutStack;
