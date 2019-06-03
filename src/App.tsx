import React from 'react';
import { StyleSheet, View } from 'react-native';
import Play from 'components/Play/Play';

interface Props {}

const App = () => {
  return (
    <View style={styles.container}>
      <Play name="Ryan Nickel" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
