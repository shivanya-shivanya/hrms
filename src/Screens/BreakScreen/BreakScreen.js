import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, Modal, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../components/colors';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import SmallGreenButton from '../../../components/SmallGreenButton';
import SmallWhiteButton from '../../../components/SmallWhiteButton';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import BreakCard from '../../../components/BreakCard';
import { deviceWidth } from '../Utils/DImensions';
import GreenButton from '../../../components/GreenButton';
// import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function BreakScreen() {
    const [IsModalVisible, setIsModalVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isEndTimeVisible, setIsEndTimeVisible] = useState(false);
    const [activeInput, setActiveInput] = useState(null);

    const showDatePicker = (input) => {
        console.log("input>>>",input)
        setDatePickerVisibility(true);
        // setIsEndTimeVisible(true);
        setActiveInput(input);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        // setIsEndTimeVisible(false);
        setActiveInput(null);
    };
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedEndTime, setSelectedEndTime] = useState(null);
    const handleConfirm = (time) => {
        if (activeInput === 'start') {
            setSelectedTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
        } else if (activeInput === 'end') {
            setSelectedEndTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
        }
        hideDatePicker();
    };

    const navigation = useNavigation();
    const data = [
        { label: 'Lunch Break', value: '1' },
        { label: 'Tea Break', value: '2' },
        { label: 'Mid Break', value: '3' },

    ];

    const [value, setValue] = useState('Lunch Break');
    const [isFocus, setIsFocus] = useState(false);
    const [mode, setMode] = useState('');

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {IsModalVisible && (
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
                <NavBarWithBackIcon title="Breaks" />
                <View style={styles.imgContainer}>
                    <ScrollView>
                        <View style={styles.attSubContent}>
                            <View style={styles.subConatiner}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styles.start, { fontFamily: 'Manrope-Medium' }]}>Date</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 'auto', }}>
                                    <Text style={[styles.start, { fontFamily: 'Manrope-Medium' }]}>Total Break Time</Text>
                                </View>
                            </View>
                            <View style={styles.timeContainer}>
                                <Text style={styles.time}>Jan 4, 2024</Text>
                                <View style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.time}>30:00 Mins</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.attSubContent, { marginTop: 20 }]}>
                            <View style={styles.workingHrsConatiner}>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.start}>Total Working Hrs</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.start}>Total Worked Hrs</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.start}>Overtime Hrs</Text>
                                </View>
                            </View>
                            <View style={[styles.workingHrsConatiner, { borderBottomWidth: 0 }]}>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.time}>08:00 Hrs</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.time}>08:00 Hrs</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.time}>08:00 Hrs</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 20 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.dateText}>Jan 4,2024</Text>
                            </View>
                            <View style={{ marginLeft: 'auto', marginTop: 5 }}>
                                <TouchableOpacity style={styles.breakBtn} onPress={() => setIsModalVisible(true)}>
                                    <Text style={styles.breakTxt}>+ Add Break</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <BreakCard />
                        </View>



                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={IsModalVisible}
                            onRequestClose={() => {
                                setIsModalVisible(!IsModalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                        <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} />
                                    </TouchableOpacity>
                                    <View style={{ paddingTop: 10 }}>
                                        <Text style={styles.addBreakText}>{'Add Break'}</Text>
                                    </View>
                                    <View style={{ marginTop: 30, flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                                        <View style={{ alignItems: 'center', width: '100%' }}>
                                            <View style={[styles.labelContainer, { left: 110, top: -10 }]}>
                                                <Text style={styles.emailLabel}>Start Time</Text>
                                            </View>
                                            <View style={[styles.inputContainer, { flexDirection: 'row', paddingHorizontal: 18, paddingVertical: Platform.OS === 'android' ? 5 : 10, borderRadius: 10, borderColor: colors.txtColor, borderWidth: 0.4 }]}>
                                                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                                                    <TextInput style={[styles.inputText, { textAlign: 'center' }]} placeholder={'09:10 AM'} maxLength={5} keyboardType={'number-pad'} value={selectedTime} />
                                                </View>
                                                <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 5, justifyContent: 'center' }} onPress={() => {console.log("start clicked");  showDatePicker('start')}} >
                                                    <Image source={require('../../../components/assets/images/clock.png')} style={styles.calander} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={{ alignItems: 'center', width: '100%' }}>
                                            <View style={[styles.labelContainer, { left: 110, top: -10 }]}>
                                                <Text style={styles.emailLabel}>End Time</Text>
                                            </View>
                                            <View style={[styles.inputContainer, { flexDirection: 'row', paddingHorizontal: 18, paddingVertical: Platform.OS === 'android' ? 5 : 10, borderWidth: 0.4, borderRadius: 10, borderColor: colors.txtColor }]}>
                                                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                                                    <TextInput style={[styles.inputText, { textAlign: 'center', paddingHorizontal: 0 }]} placeholder={'09:10 AM'} maxLength={5} keyboardType={'number-pad'} value={selectedEndTime} />
                                                </View>
                                                <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 5, justifyContent: 'center' }} onPress={() => showDatePicker('end')}>
                                                    <Image source={require('../../../components/assets/images/clock.png')} style={styles.calander} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="time"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                        is24Hour={true}
                                        locale="en_GB"
                                        buttonTextColorIOS={colors.greenTheme}


                                    />
                                    {/* {isDatePickerVisible && <RNDateTimePicker
                                            isVisible={isDatePickerVisible}
                                            mode="time"
                                            onConfirm={handleConfirm}
                                            onCancel={hideDatePicker}
                                            is24Hour={true}
                                            value={new Date()}
                                        />} */}
                                    <View>
                                        <Text style={styles.modalText}>We know its important to take breaks  </Text>
                                        <View style={{}}>
                                            <Text style={[styles.modalText, { paddingTop: 3 }]}>Please let us know why are you taking break?  </Text>
                                        </View>
                                    </View>
                                    <View style={styles.mainContainer}>
                                        <View style={styles.labelContainer}>
                                            <Text style={styles.emailLabel}>Break</Text>
                                        </View>
                                        <View style={{ width: '100%' }}>
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
                                                placeholder={isFocus ? 'Select Break' : value}
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
                                    <View style={{ marginTop: 30, width: '93%', marginBottom: 40, flexDirection: 'row', justifyContent: 'space-around' }} >

                                        <SmallWhiteButton title="Cancel" onPress={() => setIsModalVisible(false)} />
                                        <SmallGreenButton title="Confirm" onPress={() => { setIsModalVisible(false) }} />
                                    </View>
                                </View>

                            </View>
                        </Modal>


                    </ScrollView>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAFAFA' },
    imgContainer: {
        flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        width: '100%', marginTop: -25,
    },
    txtContainer: { paddingHorizontal: 28, paddingVertical: 10 },
    name: {
        fontFamily: 'Manrope-Regular',
        fontSize: 20,
        fontWeight: '400',
        color: colors.black,
    },
    text: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: colors.black },
    attSubContent: { backgroundColor: colors.white, borderRadius: 15, elevation: 1, padding: 10, width: '90%', alignSelf: 'center', marginTop: 8 },
    subConatiner: {
        flexDirection: 'row', width: '90%', alignSelf: 'center',
        paddingBottom: 10, justifyContent: 'center', borderBottomWidth: 0.4, borderBottomColor: colors.txtColor, paddingTop: 8
    },
    start: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.black },
    time: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
    timeContainer: { paddingHorizontal: 18, paddingVertical: 10, flexDirection: 'row' },
    labelContainer: {
        backgroundColor: "white",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        marginStart: 20,
        zIndex: 1,
        elevation: 0,
        position: "absolute",
        top: -12,
        left: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        zIndex: 0,
        borderColor: '#22215B29'

    },
    emailLabel: { color: colors.black, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
    inputText: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' },
    calander: { width: 20, height: 20, resizeMode: 'contain' },
    applyBtn: { backgroundColor: colors.greenTheme, borderRadius: 10, paddingHorizontal: 38, paddingVertical: 15 },
    applyText: { color: colors.white, fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400' },
    workingHrsConatiner: {
        flexDirection: 'row', width: '95%', alignSelf: 'center', justifyContent: 'space-between',
        paddingBottom: 10, borderBottomWidth: 0.4, borderBottomColor: colors.txtColor, paddingTop: 8
    },
    breakHrsConatiner: {
        flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: 'space-between',
        paddingBottom: 10, borderBottomWidth: 0.4, borderBottomColor: colors.txtColor, paddingTop: 8
    },
    dateText: { color: colors.black, fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500' },
    attContainer: {
        backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingTop: 20, paddingBottom: 35, paddingLeft: 20, paddingRight: 20, width: '91%', alignSelf: 'center', marginTop: 20, flexDirection: 'row',
        shadowColor: '#567DF4',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    attend: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
    date: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
    attSubContainer: { backgroundColor: colors.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'column', paddingHorizontal: 22, elevation: 1, paddingBottom: 25, marginTop: -22, borderColor: colors.white },
    addBreak: { fontFamily: 'Manrope-SemiBold', fontSize: 10, fontWeight: '500', color: colors.black, textAlign: 'right', paddingTop: 0, textDecorationLine: 'underline' },
    amt: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600', color: colors.black },
    payContainer: { flexDirection: 'row', marginTop: 15, borderRadius: 15, backgroundColor: colors.white, elevation: 3, padding: 0, width: '90%', alignSelf: 'center', marginTop: -10, padding: 18, marginBottom: 20 },
    breakBtn: { backgroundColor: colors.greenTheme, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 8 },
    breakTxt: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: colors.white, textAlign: 'center' },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        // margin: 20,
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
        fontWeight: '400',
        fontSize: 14,
        color: '#070E05',
        paddingTop: 30,
        textAlign: 'center',
    },
    successImg: { width: 120, height: 120, resizeMode: 'contain' },
    successtext: {
        fontFamily: 'Manrope-Regular',
        textAlign: 'center',
        fontWeight: '700',
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
    input: { borderWidth: 0.2, borderColor: colors.greenTheme, borderRadius: 10, padding: 8, width: '90%', marginTop: 20 },
    dropdown: {
        height: 60,
        borderColor: colors.txtColor,
        borderWidth: 0.4,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 0,
        width: '100%'
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400'
    },
    selectedTextStyle: {
        color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400'
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    labelContainer: {
        backgroundColor: "white",
        alignSelf: "flex-start",
        paddingHorizontal: 3,
        marginStart: 10,
        zIndex: 1,
        elevation: 0,
        shadowColor: "white",
        position: "absolute",
        top: -12,
    },
    inputContainer: {
        borderWidth: 0.1,
        borderRadius: 2,
        padding: 0,
        zIndex: 0,
        borderColor: colors.borderColourPurple, width: '40%', alignSelf: 'center'
    },
    emailLabel: { color: colors.borderColourPurple, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
    mainContainer: { marginTop: 35, width: '90%' },
    addBreakText: { color: '#070E05', fontFamily: 'Manrope-Regular', fontSize: 24, fontWeight: '700' },
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