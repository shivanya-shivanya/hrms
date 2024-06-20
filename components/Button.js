import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { colors } from './colors';

const DynamicButton = ({ icon, title, backgroundColor, onPress,textColor,iconColor, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor, buttonStyle }]} onPress={onPress}>
      {icon && <Image source={icon} style={[styles.icon, { tintColor: iconColor }]} />}
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 5,
    width:'45%',
    borderWidth: 0,
    borderColor: colors.greenTheme
  },
  icon: {
    marginRight: 10,
    width:20,
    height:20,
    resizeMode:'contain',

  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
    fontFamily:'Manrope-Regular'
  },
});

export default DynamicButton;
