import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/types';
import AppButton from '../components/AppButton';
import { AppButtonNames } from '../constants';
import { Colors } from '../utils';

/** Add Betting Screen */
const AddBetting = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [carName, onChangeCarName] = useState('');
  const [betPrice, onChangeBetPrice] = useState('');

  return (
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
      <AppButton text={AppButtonNames.save} onPress={() => navigation.goBack()} />
    </View>
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