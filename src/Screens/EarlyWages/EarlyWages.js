import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Dimensions, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../components/colors';
import GreenButton from '../../../components/GreenButton';
import { BlurView } from '@react-native-community/blur';
import { moderateScale } from 'react-native-size-matters';
import { deviceWidth } from '../Utils/DImensions';


export default function EarlyWAges() {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [uniqueId, setUniqueId] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const [IsToggleCheckBox, setIsToggleCheckBox] = React.useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const data = [
        { label: 'Bank of America', value: '1' },
        { label: 'Bank of India', value: '2' },


    ];
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
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
            <View style={styles.container}>
                <NavBarWithBackIcon title="Early Wage Access Program" />
                <View style={styles.imgContainer}>
                    <ScrollView style={{ flex: 1 }}>
                        <KeyboardAvoidingView>

                            <View style={{ width: '90%', paddingHorizontal: 25, paddingVertical: 10 }}>
                                <Text style={styles.textContent}>Please create your account with Netspend Earned Wage{'\n'}
                                    Access app to check your eligibility. </Text>
                            </View>
                            <View style={{ width: '95%', paddingHorizontal: 25, paddingVertical: 15 }}>
                                <Text style={styles.textContent}>One you are done with account creation and eligibility test, please enter your credentials to verify and enjoy early wage access program. </Text>
                            </View>
                            <View style={styles.mainContainer}>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.emailLabel}>Enter your ID</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        placeholder="Enter your ID"
                                        style={styles.input}
                                        value={uniqueId}
                                        onChangeText={setUniqueId}
                                        placeholderTextColor={colors.txtColor}
                                    />
                                </View>
                            </View>
                            <View style={[styles.mainContainer, { marginBottom: 10 }]}>
                                <View style={styles.labelContainer}>
                                    <Text style={styles.emailLabel}>Enter your Password</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        placeholder="Enter your Password"
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
                        </KeyboardAvoidingView>
                    </ScrollView>





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
                                <View style={{ width: '70%' }}>
                                    <Text style={styles.modalText}>Early Wage Access Program</Text>
                                </View>

                                <View style={styles.successContainer}>
                                    <Image source={require('../../../components/assets/images/success.png')} style={styles.successImg} />
                                </View>
                                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                                    <Text style={styles.successtext}>Your account verify successfully.</Text>
                                </View>

                                <GreenButton
                                    title="Looks Good"
                                    onPress={() => { setModalVisible(false) }}
                                    buttonStyle={{ borderRadius: 18, marginTop: 25, marginBottom: 30, width: '86%' }}
                                    textColor={colors.white}
                                    textStyle={{ fontWeight: '500' }}
                                />
                            </View>

                        </View>
                    </Modal>

                    <View style={{ width: '100%', marginBottom: Platform.OS === 'android' ? moderateScale(30) : moderateScale(40), marginTop: moderateScale(10) }}>
                        <GreenButton title="Verify" onPress={() => setModalVisible(!modalVisible)} />
                    </View>
                </View>

            </View >
        </>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1 },
    imgContainer: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        width: '100%',
        marginTop: -25,
    },
    labelContainer: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        paddingHorizontal: 3,
        marginStart: 30,
        zIndex: 1,
        elevation: 0,
        position: 'absolute',
        top: -12,
    },
    inputContainer: {
        borderWidth: Platform.OS === 'ios' ? 0.4 : 0.2,
        borderRadius: Platform.OS === 'ios' ? 10 : 3,
        padding: Platform.OS === 'ios' ? 15 : 3,
        zIndex: 0,
        borderColor: colors.borderColourPurple,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailLabel: {
        color: colors.borderColourPurple,
        fontFamily: 'Manrope-Regular',
        fontSize: 14,
        fontWeight: '400',
    },
    input: {
        paddingHorizontal: Platform.OS === 'ios' ? 5 : 14,
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular',
        fontWeight: '400',
        flex: 1,
    },
    eyeIcon: { width: 20, height: 20, resizeMode: 'contain' },
    eyeContainer: { paddingHorizontal: 10 },
    mainContainer: { marginTop: 30 },
    checkboxContainer: {
        flexDirection: 'row', width: '78%', alignSelf: 'flex-start', marginLeft: 15, marginTop: 15,
    },
    privacy: { fontFamily: 'Manrope-Regular', fontWeight: '400', fontSize: 13, color: colors.txtColor, },
    dropdown: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 0.3,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 20,
        width: '100%'
    },
    placeholderStyle: {
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular',
        fontWeight: '400',
    },
    selectedTextStyle: {
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular',
        fontWeight: '400',
    },
    iconStyle: {
        width: 30,
        height: 30,
        tintColor: '#9CA3AF',
        justifyContent: 'center',

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropLabelContainer: {
        backgroundColor: "white",
        alignSelf: "flex-start",
        paddingHorizontal: 3,
        marginStart: 30,
        zIndex: 1,
        elevation: 0,
        shadowColor: "white",
        position: "absolute",
        top: -12,
    },
    emailLabel: { color: colors.black, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
    textContent: { color: colors.black, fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400' },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
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
        fontWeight: '700',
        fontSize: 24,
        color: '#070E05',
        paddingTop: 10,
        textAlign: 'center',
    },
    successtext: {
        fontFamily: 'Manrope-Medium',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 14, paddingTop: 5,
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
    successContainer: { paddingTop: 25, paddingBottom: 20 },
    successImg: { width: 100, height: 100, resizeMode: 'contain' },
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
