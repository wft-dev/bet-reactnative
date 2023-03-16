import type {
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

/** Navigation parameters list use for passing the values with navigation */
export type HomeStackNavigatorParamList = {
  Home: undefined;
  Betting: undefined;
  MakeBet: undefined
};

/** Home screen set navigation prop */
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList, 'Betting'
>;

/** Betting screen set route prop */
export type BettingScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Betting'
>;

/** Add betting screen set navigation prop */
export type MakeBetNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList, 'MakeBet'
>;