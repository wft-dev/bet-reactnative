import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import BetingView from '../screens/BetingView';
import AddBetting from '../screens/AddBetting';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();


const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
      <HomeStack.Screen name="Beting" component={BetingView}  options={{headerShown: false}}/>
      <HomeStack.Screen name="AddBetting" component={AddBetting}  options={{headerShown: false}}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;