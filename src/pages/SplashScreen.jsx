import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={s.Container}>
      <Text style={s.textSplash}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const s = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textSplash: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    alignSelf: 'center',
  },
});
