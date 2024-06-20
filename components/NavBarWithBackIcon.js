import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from './colors';

const NavBarWithBackIcon = ({ title, showRightContent }) => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.subContainer}>
            <TouchableOpacity onPress={handleBackPress}>
                <Image source={require('./assets/images/arrow-left.png')} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {showRightContent && (
                <View style={styles.rightContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddBankaccount')} style={styles.btn}>
                        <View style={{justifyContent:'center',marginRight:4}}>
                            <Image source={require('./assets/images/plus.png')} style={styles.plusIcon} />
                        </View>
                        <Text style={styles.rightContent}>Add Bank</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default NavBarWithBackIcon;

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor: colors.greenTheme,
        paddingTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 60
    },
    backIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',

    },
    title: {
        fontFamily: 'Manrope-Regular',
        fontSize: 20,
        fontWeight: '700',
        color: colors.black,
    },
    rightContainer: {
        marginLeft: 'auto'
    },
    btn: { backgroundColor: '#99D7B2', paddingHorizontal: 15, paddingVertical: 13, borderRadius: 10, flexDirection: 'row' },
    rightContent: {
        fontFamily: 'Manrope-SemiBold',
        fontSize: 16,
        fontWeight: '600',
        color: colors.black, justifyContent: 'center'
    },
    plusIcon: { width: 20, height: 20, resizeMode: 'contain' }
});
