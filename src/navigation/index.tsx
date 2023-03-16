import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeStack from './HomeStack';

/** Theme Set for navigation */
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'white'
  },
};

/** Navigation root */
const RootNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <HomeStack />
    </NavigationContainer>
  );
};

export default RootNavigator;