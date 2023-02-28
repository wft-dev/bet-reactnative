import { StyleSheet, View, Text, Pressable, FlatList, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/types';
import AppButton from '../components/AppButton';
import { AppButtonNames } from '../constants';
import { Colors } from '../utils';
import {EventSourceManger} from '../AppManger';

/** Home Screen */
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  /** naviagte to betting screen when click on betting view button */
  const appButtonOnPress = () => {
    navigation.navigate("Beting")
  }

  // close event source connection on deactive 
  const closeEventSourceConnection =() =>{
      EventSourceManger.closeRemoveConection();
    }


  return (
    <View style={styles.container}>
      <AppButton text={AppButtonNames.activateDevice} onPress={() => { }} />
      <AppButton text={AppButtonNames.dectivateDevice} onPress={() => {closeEventSourceConnection() }} />
      <AppButton text={AppButtonNames.bettingView} onPress={() => appButtonOnPress()} />
      <Text style={styles.connectionText}>Connection state changed to : connecting</Text>
      <Text style={styles.connectionText}>Connection state changed to : connected</Text>
      <Text style={styles.connectionText}>Connected to Ably with cleintid 9a115782802</Text>
    </View>
  );
};

/** StyleSheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  connectionText: {
    paddingVertical: 1,
    paddingHorizontal: 5,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Gray
  },
});


export default HomeScreen;