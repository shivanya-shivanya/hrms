import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from './colors';

const CustomCheckbox = ({ isChecked, onPress, from }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={[
                styles.checkbox,
                isChecked && styles.checked,
                isChecked && from === 'EditBankaccount' && styles.checkedEditBankAccount,
                isChecked && from === 'EditBankaccount' && styles.checkedDefault, 
            ]}>
                {isChecked && <FontAwesome name="check" color="#FFF" size={12} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: Platform.OS === 'ios' ? 0.3 : 1,
        borderColor: '#999',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checked: {
        backgroundColor: colors.checkboxActiveColor, 
    },
    editBankAccountCheckbox: {
        backgroundColor: colors.txtColor, 
    },
    checkedDefault:{
        backgroundColor: colors.black
    }
});

export default CustomCheckbox;
