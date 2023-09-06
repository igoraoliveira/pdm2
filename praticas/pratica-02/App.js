import React from 'react';
import { View, StyleSheet } from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <View style={[styles.container, styles.flexRow, styles.flexRowReverse, styles.flexColumn, styles.justifyCenter]}>
      <Box size={200} color="red" />
      <Box size={200} color="green" />
      <Box size={200} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
});

export default App;
