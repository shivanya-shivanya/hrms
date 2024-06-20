import { View, Text, StyleSheet, Image, TextInput, Modal, TouchableOpacity, Alert, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import BackComponent from '../../../components/BackComponent';
import { colors } from '../../../components/colors';
import GreenButton from '../../../components/GreenButton';
import { BlurView } from '@react-native-community/blur';
import { deviceWidth } from '../Utils/DImensions';

const ResetPassword = () => {

    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const handleBack = () => {
        navigation.goBack();
    };

    const [modalVisible, setModalVisible] = useState(false);
    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            {modalVisible && (
                <BlurView
                    style={styles.blur}
                    blurType="light"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                >
                    <View style={styles.modalBlur} />
                </BlurView>
            )}
            <View style={{ flex: 1, backgroundColor: colors.white }}>

                <View style={styles.subContainer}>
                    <BackComponent title="Reset Password " onPressBack={handleBack} />
                    <Text style={styles.txt}>Please enter your new Password</Text>
                </View>
                <View style={styles.imgContainer}>
                    <View style={styles.mainContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.emailLabel}>Create your new password </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Create your new password"
                                style={styles.input}
                                secureTextEntry={!showNewPassword}
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                            <TouchableOpacity
                                style={styles.eyeContainer}
                                onPress={toggleNewPasswordVisibility}
                            >
                                <Image
                                    source={
                                        showNewPassword
                                            ? require('../../../components/assets/images/eye.png')
                                            : require('../../../components/assets/images/eye-off.png')
                                    }
                                    style={styles.eyeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.emailLabel}>Confirm password</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Confirm password"
                                style={styles.input}
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity
                                style={styles.eyeContainer}
                                onPress={togglePasswordVisibility}
                            >
                                <Image
                                    source={
                                        showPassword
                                            ? require('../../../components/assets/images/eye.png')
                                            : require('../../../components/assets/images/eye-off.png')
                                    }
                                    style={styles.eyeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }} >
                        <GreenButton title="Save Password" onPress={() => setModalVisible(true)} />
                    </View>

                </View>
           
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                    <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} />
                                </TouchableOpacity>
                                <Text style={styles.modalText}>Password Reset</Text>
                                <View style={styles.successContainer}>
                                    <Image source={require('../../../components/assets/images/success.png')} style={styles.successImg} />
                                </View>
                                <View style={{ width: '80%', alignSelf: 'center' }}>
                                    <Text style={styles.successtext}>Your password has been updated successfully. </Text>
                                </View>
                                <TouchableOpacity style={{ marginTop: 30, width: '95%', marginBottom: 40 }} >
                                    <GreenButton title="Continue to Login" onPress={() => { setModalVisible(false); navigation.navigate('Login') }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Modal>

                </View>
           
        </>
    )
}

export default ResetPassword
const styles = StyleSheet.create({
    subContainer: { backgroundColor: colors.greenTheme, paddingBottom: 38, paddingTop: 10 },
    txt: { paddingHorizontal: 33, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.black, paddingVertical: 15 },
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
    input: { paddingHorizontal:Platform.OS === 'ios' ? 3 :  14, color: colors.txtColor, fontFamily: 'Manrope-Regular', fontWeight: '400', justifyContent: "center" },
    eyeIcon: { width: 20, height: 20, resizeMode: 'contain' },
    eyeContainer: { position: 'absolute', right: 25, top: 17 },
    forgot: { fontFamily: 'Manrope', fontSize: 14, fontWeight: '400', textAlign: 'right', paddingRight: 20, paddingTop: 10, color: colors.borderColourPurple },
    privacy: { fontFamily: 'Manrope', fontWeight: '400', fontSize: 13, lineHeight: 17.7, paddingTop: 5, color: colors.black, letterSpacing: 0.2 },
    checkboxContainer: {
        flexDirection: 'row', width: '75%', alignSelf: 'flex-start', marginLeft: 20, marginTop: 15
    },
    note: { fontFamily: 'Manrope-Regular', fontWeight: '400', fontSize: 13, lineHeight: 17.76, alignSelf: 'center', color: colors.black },
    hr: { fontFamily: 'Manrope-Regular', fontWeight: '500', fontSize: 13, lineHeight: 17.76, alignSelf: 'center', color: colors.darkGreen },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,

        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        // height:'20%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontFamily: 'Manrope-Regular',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 24,
        color: colors.dark,
        paddingTop: 25
    },
    successImg: { width: 120, height: 120, resizeMode: 'contain' },
    successContainer: { paddingTop: 25, paddingBottom: 20 },
    successtext: {
        fontFamily: 'Manrope-SemiBold',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 14, paddingTop: 20,
        color: colors.dark, lineHeight: 19.6
    },
    blur: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
    },
    modalBlur: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    closeButton: {
        alignItems: "flex-end",
        marginRight: deviceWidth * 0.05,
        alignSelf: "flex-end",
        marginTop: 20,
        backgroundColor: colors.greenTheme,
        padding: 7,
        borderRadius: 10,
    },
    closeIcon: { width: 25, height: 25, resizeMode: 'contain', tintColor: colors.black },

});