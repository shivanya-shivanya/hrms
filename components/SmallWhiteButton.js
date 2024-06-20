import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from './colors';

const SmallWhiteButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6AD29E14',
    paddingHorizontal:26,
    paddingVertical:14,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width:'43%',
    alignSelf:'center',
    borderColor:colors.greenTheme,
    borderWidth:0.7
  },
  text: {
    color: colors.greenTheme,
    fontSize: 16,
    fontWeight: '600',
    fontFamily:'Manrope'
  },
});

export default SmallWhiteButton;
