/**
 * Bet React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import RootNavigator from './src/navigation';

//** Root  */
function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }} >
        <RootNavigator />
        <StatusBar />
      </SafeAreaView>
    </>
  );
}

export default App;
