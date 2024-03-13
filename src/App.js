import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.moziBox}></View>
        <View style={styles.gazoBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    //子要素で"flex"が指定されているため記述
    flexDirection: "row",
  },
  moziBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
  },
  gazoBox: {
    width: 100,
    backgroundColor: "powderblue",
  }
});
