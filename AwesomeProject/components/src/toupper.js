import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ToUpper = props => {
  var { t, f, l } = props;
  t = upperFirstLetter(t)
  f = upperFirstLetter(f)
  l = upperFirstLetter(l)

  return (
    <Text key={ f } 
      style={styles.lineText}>
      {t + " " + f + " " + l}
    </Text>
  );
};

const upperFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}

const styles = StyleSheet.create({
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
  }
});

export default ToUpper;