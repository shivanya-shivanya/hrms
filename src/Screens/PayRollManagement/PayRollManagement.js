import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { useNavigation } from '@react-navigation/native';


export default function PayRollManagement() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="Payroll Management" />
            <View style={styles.imgContainer}>
                <View style={styles.viewConatiner}>
                    <TouchableOpacity onPress={() => navigation.navigate("PayRollInfo")}>
                        <Image source={require('../../../components/assets/images/PersonalLoan.png')} style={styles.loanImg} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("PaySlip")}>
                        <Image source={require('../../../components/assets/images/carLoan.png')} style={styles.loanImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    imgContainer: {
        flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        width: '100%', marginTop: -25,
    },
    viewConatiner: { alignSelf: 'center', paddingTop: 15 },
    loanImg: { width: Dimensions.get("screen").width - 30, height: 100, resizeMode: 'contain' }
});