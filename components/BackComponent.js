import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from './colors';
import { TopSpace } from '../src/Screens/Utils/DImensions';

const BackComponent = ({ title, onPressBack }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressBack}>
                <Ionicons name="arrow-back" size={24} color={colors.black} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default BackComponent;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: Platform.OS === 'android' ?  TopSpace : TopSpace +10,
    },
    title: {
        fontFamily: 'Manrope-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        fontWeight: '700',
        color: colors.black,
        paddingLeft:10
    },
});
