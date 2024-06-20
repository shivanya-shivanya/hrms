import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from './colors';

const TwoColorBorderView = ({ borderLeftColors, children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={borderLeftColors}
        style={[styles.borderLeft, { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }]}>
      </LinearGradient>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius:10
  },
  borderLeft: {
    position: 'absolute',
    top: -10,
    bottom: -10,
    left: -15,
    width: 4,
  },
  content: {
    marginLeft: 2, 
    paddingLeft: 10,
    flexDirection:'row',
    
  },
});

export default TwoColorBorderView;
