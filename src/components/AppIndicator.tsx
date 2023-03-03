
import React from 'react';
import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import Colors from '../utils/Colors';

// Props 
interface Props {
  loading: boolean;
}

/** AppIndicator  */
export const AppIndicator = (props: Props) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props.loading}
      onRequestClose={() => { }}>
      <View style={styles.container}>
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color={Colors.Blue} />
        </View>
      </View>
    </Modal>
  )
}

/** StyleSheet */
const styles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: "rgba(52, 52, 52, 0.6)",
  },
  activityIndicator: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});