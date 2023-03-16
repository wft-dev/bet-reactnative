import { StyleSheet, View, Text, Pressable, FlatList, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/types';
import { AppButton } from '../components';
import { AppButtonNames } from '../constants';
import { EventSourceManager } from '../AppManager';

/** Home Screen */
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  /** Navigate to betting screen when click on betting view button */
  const appButtonOnPress = () => {
    navigation.navigate("Betting")
  }

  // Close eventSource connection on deactive 
  const closeEventSourceConnection = () => {
    EventSourceManager.closeRemoveConnection();
  }

  return (
    <View style={styles.container}>
      <AppButton text={AppButtonNames.activateDevice} onPress={() => { }} />
      <AppButton text={AppButtonNames.dectivateDevice} onPress={() => { closeEventSourceConnection() }} />
      <AppButton text={AppButtonNames.bettingView} onPress={() => appButtonOnPress()} />
    </View>
  );
};

/** StyleSheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default HomeScreen;