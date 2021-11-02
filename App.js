/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  
  return (
    <View>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.TitolRoig}>Benvinguts a React Native</Text>
        <Text style={styles.TitolBlau}>Este serà el primer exercici que fem.</Text>
        <Text style={styles.FontNormal}>normal</Text>
        <Text style={styles.FontNotoserif}>notoserif</Text>
        <Text style={{fontFamily: 'sans-serif', fontSize: 20}}>sans-serif</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  TitolRoig: {
    color: 'red',
    fontSize: 24,
  },
  TitolBlau: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  FontNormal: {
    fontFamily: 'normal',
    fontSize: 20,
  },
  FontNotoserif: {
    fontFamily: 'notoserif',
    fontSize: 20,
  },
});

export default App;
