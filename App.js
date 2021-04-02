import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { AppNavigator } from './routes/AppNavigator';

const getFonts = () => {
  return Font.loadAsync({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const Stack = createStackNavigator();
  if (fontsLoaded) {
    return <AppNavigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log('error')}
      />
    );
  }
}
