import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, Pressable, FlatList, Image, AppState, AppStateStatus, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MakeBetNavigationProp } from '../navigation/types';
import { Colors, Images } from '../utils';
import { AppButton } from '../components';
import { AppButtonNames, BettingData, AppText } from '../constants';
import { EventSourceManger, ApiRoot } from '../appManger';
import { EventSourceListener } from "react-native-sse";
import { API_URL } from "@env"

/** Beting Screen */
const BetingView = () => {
  const [bettings, setBettings] = useState<BettingData[]>([]);
  const navigation = useNavigation<MakeBetNavigationProp>();
  const appState = useRef(AppState.currentState);
  // const [appStateVisible, setAppStateVisible] = useState(appState.current);

  // start eventSource and appState 
  useEffect(() => {
    const subscription = AppState.addEventListener('change', handler)
    startEventSource()
    return () => {
      endEventSource()
      subscription.remove();
    };
  }, []);

  // appState handler
  const handler = async (nextAppState: AppStateStatus) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      startEventSource()
    }
    if (appState.current.match(/active/) && nextAppState === 'inactive') {
      endEventSource()
    }
    appState.current = nextAppState;
    // setAppStateVisible(appState.current);
  }

  // get odds api from eventSource and start eventSource
  const startEventSource = () => {
    EventSourceManger.init(`${API_URL}${ApiRoot.getOdds}`);
    const listener: EventSourceListener = (event) => {
      if (event.type === "open") {
        //console.log("Open SSE connection.", event)
      } else if (event.type === "message") {
        const bettingData = JSON.parse(event.data ?? '') as BettingData
        //console.log("message", event, Platform.OS);
        setBettingDataFromEvent(bettingData)
      }
      else if (event.type === "close") {
        //console.log("close SSE connection.")
      }
    };
    EventSourceManger.getListerner(listener)
  }

  // end eventSource
  const endEventSource = () => {
    EventSourceManger.onRemoveAllEventListeners();
    EventSourceManger.close();
  }

  // set betting data form message event 
  const setBettingDataFromEvent = (bettingData: BettingData) => {
    setBettings((pervBettig) => {
      const isCarName = pervBettig.some((itemBet) => itemBet.carName === bettingData.carName)
      if (isCarName) {
        const betArray = pervBettig.map(item => {
          if (item.carName === bettingData.carName) {
            return { ...item, betPrice: bettingData.betPrice };
          } else {
            return item;
          }
        })
        return betArray
      }
      return [...pervBettig, bettingData]
    });
  }

  // list of betting cars with name and beting value 
  const renderListItems = ({ item }: any) => {
    return (
      <>
        {item.carName ?
          <Pressable
            style={styles.carContainer}
            onPress={() => { }
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
                {item.carName ?? ""}
              </Text>
              <Text style={styles.valueText}>
                {item.betPrice ?? ""}
              </Text>
            </View>
          </Pressable> :
          null}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppButton style={styles.backAddbtn} textStyle={styles.backAddText} text={AppButtonNames.back} onPress={() => { navigation.goBack() }} />
        <AppButton style={styles.backAddbtn} textStyle={styles.backAddText} text={AppButtonNames.makeBet} onPress={() => {
          navigation.navigate("MakeBet", {})
        }} />
      </View>
      <Text style={styles.demoText}>{AppText.demodRaceText}</Text>
      <FlatList data={bettings} renderItem={renderListItems} />
    </View>
  );
};

/** StyleSheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backAddbtn: {
    backgroundColor: Colors.White,
    borderColor: Colors.White,
    borderWidth: 0
  },
  backAddText: {
    color: Colors.Blue,
  },
  carContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderColor: Colors.Silver,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignContent: 'center'
  },
  carSubContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
    textAlign: 'center',
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
    fontSize: 20,
    fontWeight: '600',
    color: Colors.DarkGray
  },
});

export default BetingView;