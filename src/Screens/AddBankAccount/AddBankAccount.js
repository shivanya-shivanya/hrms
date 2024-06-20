import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../components/colors';
import GreenButton from '../../../components/GreenButton';
import CheckBox from '@react-native-community/checkbox';
import { Dropdown } from 'react-native-element-dropdown';
import CustomCheckbox from '../../../components/CustomCheckbox';
import { deviceWidth } from '../Utils/DImensions';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

export default function AddBankaccount() {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const [IsToggleCheckBox, setIsToggleCheckBox] = React.useState(false)
    const data = [
        { label: 'Bank of America', value: '1' },
        { label: 'Bank of India', value: '2' },


    ];

    const [value, setValue] = useState('Bank of America');
    const [isFocus, setIsFocus] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [isChecked, setIsChecked] = React.useState(false);

    const handleCheckboxChange = () => {
        console.log("inside handleCheckboxChange")
        setIsChecked(!isChecked);
    };
    const [Checked, setChecked] = React.useState(false);

    const handleCheckbox = () => {
        console.log("inside handleCheckboxChange")
        setChecked(!Checked);
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="Link New Bank Account" />
            <View style={styles.imgContainer}>

                <KeyboardAwareScrollView extraScrollHeight={10}>
                    <View style={styles.mainContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.emailLabel}>Account Number</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Account Number"
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor={colors.txtColor}
                            />
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.emailLabel}>Bank Transit Number</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Bank Transit Number"
                                style={styles.input}
                                placeholderTextColor={colors.txtColor}
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                        </View>
                    </View>
                    <View
                        style={styles.checkboxContainer}>
                        {/* <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColors={{ true: colors.black, false: colors.txtColor }}

                            /> */}
                        <CustomCheckbox
                            isChecked={Checked}
                            onPress={() => handleCheckbox()}
                            from={'EditBankaccount'}
                        />
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.privacy}>Search below details based on Transit Number</Text>
                        </View>
                    </View>

                    <View style={styles.mainContainer}>
                        <View style={styles.dropLabelContainer}>
                            <Text style={styles.emailLabel}>Bank</Text>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: colors.greenTheme }]}
                                search={false}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? value : 'Select Bank'}
                                searchPlaceholder="Search..."
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    setIsFocus(false);
                                }}

                            />
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.emailLabel}>Bank Branch</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Bank Branch"
                                style={styles.input}
                                placeholderTextColor={colors.txtColor}

                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />

                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.emailLabel}>Bank Number</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Bank Number"
                                style={styles.input}
                                placeholderTextColor={colors.txtColor}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />

                        </View>
                    </View>
                    <View
                        style={styles.checkboxContainer}>
                        {/* <CheckBox
                                disabled={false}
                                value={IsToggleCheckBox}
                                onValueChange={(newValue) => setIsToggleCheckBox(newValue)}
                                tintColors={{ true: colors.black, false: colors.txtColor }}

                            /> */}
                        <CustomCheckbox
                            isChecked={isChecked}
                            onPress={() => handleCheckboxChange()}
                            from={'EditBankaccount'}
                        />
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.privacy}>Default for Salary</Text>
                        </View>
                    </View>
                </KeyboardAwareScrollView>


                {/* <View style={styles.centeredView}> */}
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
                            <Text style={styles.modalText}>Account Added</Text>
                            <View style={styles.successContainer}>
                                <Image source={require('../../../components/assets/images/success.png')} style={styles.successImg} />
                            </View>
                            <View style={{ justifyContent: 'center', alignSelf: 'center', width: '50%' }}>
                                <Text style={styles.successtext}>Your Bank has been Added successfully.</Text>
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
                <View style={{ width: '100%', marginBottom: 30, marginTop: 10 }}>
                    <GreenButton title="Save" onPress={() => setModalVisible(!modalVisible)} />
                </View>
                {/* </View> */}
            </View>

        </View>
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
        borderWidth: Platform.OS === 'ios' ? 0.4 : 0.1,
        borderRadius: Platform.OS === 'ios' ? 10 : 2,
        paddingHorizontal: Platform.OS === 'ios' ? 15 : 3,
        paddingVertical: Platform.OS === 'ios' ? 15 : 4,
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
    eyeContainer: { padding: 10 },
    mainContainer: { marginTop: 30 },
    checkboxContainer: {
        flexDirection: 'row', width: '78%', alignSelf: 'flex-start', marginLeft: 15, marginTop: 15,
    },
    privacy: { fontFamily: 'Manrope-Regular', fontWeight: '400', fontSize: 13, color: colors.txtColor, },
    dropdown: {
        height: Platform.OS === 'android' ? 52 : 50,
        borderColor: colors.borderColourPurple,
        borderWidth: 0.2,
        borderRadius: 5,
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
        width: Platform.OS === 'android' ? 28 : 25,
        height: Platform.OS === 'android' ? 28 : 25,
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.5)"
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
        paddingTop: 30,
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
