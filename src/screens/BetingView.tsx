import { StyleSheet, View, Text, Pressable, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/types';
import { Colors, Images } from '../utils';
import { BettingData } from '../constants'

/** Beting Screen */
const BetingView = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // list of betting cars with name and beting value 
  const renderListItems = ({ item }) => {
    return (
      <Pressable
        style={styles.carContainer}
        onPress={() =>
          navigation.goBack()
        }
      >
        <View>
          <Image
            source={Images.carImg}
            style={styles.carImage}
          />
        </View>
        <View style={styles.carSubContainer}>
          <Text style={styles.carText}>
            {item.name}
          </Text>
          <Text style={styles.valueText}>
            {item.value}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.demoText}>The Demo Race</Text>
      <FlatList data={BettingData} renderItem={renderListItems} />
    </View>
  );
};

/** StyleSheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderColor: Colors.Silver,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignContent:'center'
  },
  carSubContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    marginLeft: 10,
  },
  carImage: {
    width: 100,
    height: 50
  },
  demoText: {
    paddingVertical: 1,
    paddingHorizontal: 2,
    fontSize: 45,
    fontWeight: '700',
    textAlign:'center',
    color: Colors.DarkGray
  },
  carText: {
    paddingVertical: 6,
    paddingHorizontal: 2,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.LightBlack
  },
  valueText: {
    fontStyle: 'italic',
    paddingVertical: 1,
    paddingHorizontal: 2,
    fontSize: 13,
    fontWeight: '600',
    color: Colors.DarkGray
  },
});


export default BetingView;