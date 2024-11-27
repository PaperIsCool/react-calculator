// ButtonSide.js

import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import styles from './Styles'

const ButtonSide = ({ onPress, title }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.buttonSide}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default ButtonSide;
