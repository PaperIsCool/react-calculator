// ButtonTop.js

import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import styles from './Styles'

const ButtonTop = ({ onPress, title }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.buttonTop}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default ButtonTop;
