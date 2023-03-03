import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert , Keyboard, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/types';
import { AppButton, AppIndicator } from '../components';
import { AppButtonNames } from '../constants';
import { Colors } from '../utils';
import { ApiMethod, ApiRoot, ApiParameters } from '../appManger';
import { API_URL } from "@env"
import uuid from 'react-native-uuid';
import axios from 'axios';

/** Add Betting Screen */
const AddBetting = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [carName, onChangeCarName] = useState('');
  const [betPrice, onChangeBetPrice] = useState('');
  const [isLoading, setIsLoding] = useState(false);

  // alert message for betting success
  const addBettingAlert = () =>
    Alert.alert('Bet', 'betting is added successfully', [
      {
        text: 'OK', onPress: () => navigation.goBack()
      },
    ]);

  // call make bet api
  const makeBetApi = async () => {
    Keyboard.dismiss()
    setIsLoding(true)
    try {
      const obj = { [ApiParameters.carName]: carName, [ApiParameters.betPrice]: betPrice }
      const configurationObject = {
        method: ApiMethod.post,
        url: `${API_URL}${ApiRoot.makeBet}`,
        headers: { "Content-Type": "application/json", "Idempotency-Key": `${uuid.v4()}` },
        data: obj
      };
      const response = await axios(configurationObject);
      if (response.data) {
        addBettingAlert()
      }
      setIsLoding(false)
    } catch (err) {
      setIsLoding(false)
      console.error(err);
    }
  };

  return (
    <>
      {isLoading ? 
      <AppIndicator loading={isLoading} /> : null}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AppButton style={styles.backAddbtn} textStyle={styles.backAddText} text={AppButtonNames.back} onPress={() => { navigation.goBack() }} />
        </View>
        <Text style={styles.addBettingText}>Add Betting</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCarName}
          placeholder="Enter Car Name"
          value={carName}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeBetPrice}
          value={betPrice}
          placeholder="Enter Bet Price"
          keyboardType="numeric"
        />
        <AppButton text={AppButtonNames.save} onPress={() => makeBetApi()} />
      </View>
      </TouchableWithoutFeedback>
    </>
  );
};

/** StyleSheet */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backAddbtn: {
    backgroundColor: Colors.White,
    borderColor: Colors.White,
    borderWidth: 0
  },
  backAddText: {
    color: Colors.Blue,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    height: 50,
    margin: 14,
    borderColor: Colors.Blue,
    borderWidth: 1,
    padding: 10,
  },
  addBettingText: {
    paddingVertical: 1,
    paddingHorizontal: 2,
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.DarkGray
  },
});


export default AddBetting;