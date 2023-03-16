import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import BettingView from '../screens/BettingView';
import MakeBet from '../screens/MakeBet';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();


const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
      <HomeStack.Screen name="Betting" component={BettingView}  options={{headerShown: false}}/>
      <HomeStack.Screen name="MakeBet" component={MakeBet}  options={{headerShown: false}}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;