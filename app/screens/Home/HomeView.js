import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const HomeView = props => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Home x2</Text>
    </View>
  );
};

export default HomeView;
