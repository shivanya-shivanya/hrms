import { View, Text, StyleSheet, Image, TextInput, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BackComponent from '../../../components/BackComponent';
import { colors } from '../../../components/colors';
import GreenButton from '../../../components/GreenButton';


const ForgotPassword = () => {

    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    return (

        <View style={{ flex: 1, backgroundColor: colors.white }}>

            <View style={styles.subContainer}>
                <BackComponent title="Forgot Password" onPressBack={handleBack} />
                <Text style={styles.txt}>Please enter your Email to Reset your Password</Text>
            </View>
            <View style={styles.imgContainer}>
                <View style={styles.mainContainer2}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.emailLabel}>Enter Email Address</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Enter Your Email id" style={styles.input} />
                    </View>

                </View>

                <View style={{ marginTop: 30 }} >
                    <GreenButton title="Get OTP" onPress={() => navigation.navigate("OtpScreen")} />
                </View>
                <View style={{ alignSelf: 'center', width: '91%', marginTop: 10 }}>
                    <Text style={styles.note}>Note: If you don't know your official email or are having trouble resetting the password, please contact the <Text style={styles.hr}>HR department</Text> for assistance.</Text>
                </View>
            </View>

        </View>

    )
}

export default ForgotPassword
const styles = StyleSheet.create({
    subContainer: { backgroundColor: colors.greenTheme, paddingBottom: 38, paddingTop: 10 },
    txt: { paddingHorizontal: 32, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.black, paddingVertical: 15 },
    imgContainer: { alignSelf: 'center', paddingTop: 16, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: colors.white, width: '100%', marginTop: -25, paddingBottom: 180 },
    splashLogo: { width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center' },
    welcomeTxt: { fontFamily: 'Manrope-Regular', fontWeight: '600', fontSize: 20, textAlign: 'center', color: colors.black },
    labelContainer: {
        backgroundColor: "white",
        alignSelf: "flex-start",
        paddingHorizontal: 3,
        marginStart: 30,
        zIndex: 1,
        elevation: 0,
        position: "absolute",
        top: -12,
    },
    inputContainer: {
        borderWidth: Platform.OS === 'ios' ? 0.4 : 0.1,
        borderRadius: Platform.OS === 'ios' ? 10 : 2,
        padding: Platform.OS === 'ios' ? 15 : 3,
        zIndex: 0,
        borderColor: colors.borderColourPurple, width: '90%', alignSelf: 'center'
    },
    emailLabel: { color: colors.borderColourPurple, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
    mainContainer: { marginTop: 40 },
    mainContainer2: { marginTop: 30 },
    input: { paddingHorizontal: 14, color: colors.txtColor, fontFamily: 'Manrope-Regular', fontWeight: '400', justifyContent: "center" },
    eyeIcon: { width: 20, height: 20, resizeMode: 'contain' },
    eyeContainer: { position: 'absolute', right: 35, top: 13 },
    forgot: { fontFamily: 'Manrope', fontSize: 14, fontWeight: '400', textAlign: 'right', paddingRight: 20, paddingTop: 10, color: colors.borderColourPurple },
    privacy: { fontFamily: 'Manrope', fontWeight: '400', fontSize: 13, lineHeight: 17.7, paddingTop: 5, color: colors.black, letterSpacing: 0.2 },
    checkboxContainer: {
        flexDirection: 'row', width: '75%', alignSelf: 'flex-start', marginLeft: 20, marginTop: 15
    },
    note: { fontFamily: 'Manrope-Regular', fontWeight: '400', fontSize: 13, lineHeight: 17.76, alignSelf: 'center', color: colors.black },
    hr: { fontFamily: 'Manrope-Regular', fontWeight: '500', fontSize: 13, lineHeight: 17.76, alignSelf: 'center', color: colors.darkGreen }
});