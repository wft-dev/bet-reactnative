import type {
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

/** navigation parameters list use for passing the values with navigation */
export type HomeStackNavigatorParamList = {
  Home: undefined;
  Betting: undefined;
  MakeBet:undefined
};

/** home screen set navigation prop */
export type HomeScreenNavigationProp = NavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, 'Betting'>
>;

/** betting screen set route prop */
export type BettingScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Betting'
>;

/** add betting screen set navigation prop */
export type MakeBetNavigationProp = NavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, 'Betting'>
>;