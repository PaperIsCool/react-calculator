// ButtonAC.js

import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import styles from './Styles'

const ButtonAC = ({ onPress, title }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.buttonAC}>
      <Text style={styles.buttonACText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default ButtonAC;
