import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import BackComponent from '../../../components/BackComponent';
import { colors } from '../../../components/colors';
import GreenButton from '../../../components/GreenButton';
import {
    CodeField,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const OtpScreen = () => {
    const [otpInput, setOtpInput] = React.useState('');
    const input = useRef(null);
    const CELL_COUNT = 6;
    const [value, setValue] = React.useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [expired, setExpired] = React.useState(false);
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };

    const [timer, setTimer] = React.useState(112);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 0) {
                    clearInterval(interval);
                    setExpired(true);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer === 0) {
            // Handle expiration, maybe resend OTP or show a message
        }
    }, [timer]);


    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (

        <View style={{ flex: 1, backgroundColor: colors.white }}>

            <View style={styles.subContainer}>
                <BackComponent title="Enter OTP" onPressBack={handleBack} />
                <Text style={styles.txt}>Please enter OTP</Text>
            </View>

            <View style={styles.imgContainer}>
                <View style={styles.emailOtpContainer}>
                  
                        <Text style={styles.emailOtp}>Please enter OTP sent on Email
                            Kim******@gmail.com </Text>
                        <TouchableOpacity style={{position:'absolute',left:150,bottom:14}}onPress={() => navigation.navigate("ForgotPassword")} >
                            <Image source={require('../../../components/assets/images/emailEdit.png')} style={styles.editIcon}/>
                        </TouchableOpacity>
                
                </View>
                <View style={{ paddingTop: 25, paddingBottom: 20 }}>

                    <CodeField
                        ref={ref}
                        {...props}
                        
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                        testID="my-code-input"
                        renderCell={({ index, symbol, isFocused }) => (
                            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', alignContent: 'center' }}>
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            </View>

                        )}
                    />

                </View>
                <View style={styles.requestContainer}>
                    {expired ? (
                        <TouchableOpacity style={{ backgroundColor: '#A0D6B41F', paddingHorizontal: 40, paddingVertical: 13, alignSelf: 'center', borderRadius: 6 }}>
                            <Text style={[styles.request, { color: colors.greenTheme, fontSize: 16, fontFamily: 'Manrope-SemiBold', fontWeight: '600' }]}>Resend OTP</Text>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.request}>You can request OTP after {formatTime(timer)}</Text>
                    )}

                </View>

                <View style={{ marginTop: 30 }} >
                    <GreenButton title="Verify" onPress={() => navigation.navigate("ResetPassword")} />
                </View>
                <View style={{ width: '85%', marginTop: 12, alignSelf: "center" }}>
                    <Text style={styles.note}>Note:  If you don't know your official email or are having trouble resetting the password, please contact the <Text style={styles.hr}>HR department</Text> for assistance.</Text>
                </View>

            </View>

        </View>

    )
}


const Cursor=()=>{
    return(
        <Text style={{
            color:colors.greenTheme
        }}>|</Text>
    )
}
export default OtpScreen
const styles = StyleSheet.create({
    subContainer: { backgroundColor: colors.greenTheme, paddingBottom: 38, paddingTop: 10 },
    txt: { paddingHorizontal: 30, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.black, paddingVertical: 15 },
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
        borderWidth: 0.1,
        borderRadius: 2,
        padding: 3,
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
    note: { fontFamily: 'Manrope-Regular', fontWeight: '400', fontSize: 13, lineHeight: 17.76, color: colors.black, width: '99%' },
    hr: { fontFamily: 'Manrope-Regular', fontWeight: '500', fontSize: 13, lineHeight: 17.76, alignSelf: 'center', color: colors.darkGreen },

    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.borderColourPurple,

    },
    underlineStyleBase: {
        width: 45,
        height: 50,
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: colors.borderColourPurple,

    },
    request: {
        fontFamily: 'Manrope-Regular', fontSize: 14, textAlign: 'center', color: colors.orange
    },
    requestContainer: { paddingTop: 30, paddingBottom: 30 },
    codeFieldRoot: { marginTop: 15, width: '90%', alignSelf: 'center' },
    cell: {
        width: 50, padding: 12,
        fontSize: 20,
        borderWidth: 0.8,
        borderColor: colors.txtColor,
        textAlign: 'center',
        borderRadius: 10,
        fontFamily: 'Poppins-SemiBold',
        backgroundColor: '#FFF',
        fontWeight: '300',
        color: colors.black, justifyContent: 'center'
    },
    focusCell: {
        borderColor: '#7F7F7F'
    },
    emailOtp: { fontFamily: 'Manrope-Regular', fontSize: 13, color: colors.black, fontWeight: '400', width: '80%' },
    emailOtpContainer: {
        backgroundColor: colors.greenTheme, paddingHorizontal: 15, paddingVertical: 13, borderRadius: 8, borderLeftColor: colors.black, borderLeftWidth: 6, width: '90%', alignSelf: 'center', marginTop: 30,
       
    },
    editIcon: { width: 15, height: 15, resizeMode: 'contain' }
});