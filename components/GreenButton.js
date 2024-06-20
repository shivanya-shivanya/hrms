import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from './colors';

const GreenButton = ({ title, onPress, buttonStyle, textStyle,textColor }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle, { color: textColor || colors.white }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.greenTheme,
    paddingHorizontal:14,
    paddingVertical:14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    alignSelf:'center',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily:'Manrope-SemiBold'
  },
});

export default GreenButton;
