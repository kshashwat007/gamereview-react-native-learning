import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import homeStack from './homeStack';
import aboutStack from './aboutStack';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={homeStack} />
        <Drawer.Screen name="About" component={aboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
