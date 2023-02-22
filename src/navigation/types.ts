import type {
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

/** navigation parameters list use for passing the values with navigation */
export type HomeStackNavigatorParamList = {
  Home: undefined;
  Beting: undefined;
};

/** home screen set navigation prop */
export type HomeScreenNavigationProp = NavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, 'Beting'>
>;

/** betting screen set route prop */
export type BetingScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Beting'
>;