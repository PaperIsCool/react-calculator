// Button.js

import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import styles from './Styles'

const Button = ({ onPress, title }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;
