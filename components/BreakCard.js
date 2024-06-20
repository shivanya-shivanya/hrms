import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from './colors';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";
import SmallGreenButton from './SmallGreenButton';
import SmallWhiteButton from './SmallWhiteButton';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { deviceWidth } from '../src/Screens/Utils/DImensions';


export default function BreakCard() {
    const [IsModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isEndTimeVisible, setIsEndTimeVisible] = useState(false);
    const [activeInput, setActiveInput] = useState(null);

    const showDatePicker = (input) => {
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
    const dropdownData = [
        { label: 'Lunch Break', value: '1' },
        { label: 'Tea Break', value: '2' },
        { label: 'Mid Break', value: '3' },

    ];

    const [value, setValue] = useState('Lunch Break');
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        {
            id: '1',
            inTime: '10:15 AM to 11:00 AM',
            breakTime: '30Mins',
            outTime: '06:45 PM',
            totalWorkingHrs: '08:00 Hrs',
            totalWorkedHrs: '08:00 Hrs',
            overtimeHrs: '08:00 Hrs',
            totalPay: '405',
            date: "April 21, 2024"
        },
        {
            id: '2',
            inTime: '09:02 AM',
            breakTime: '30Mins',
            outTime: '06:45 PM',
            totalWorkingHrs: '08:00 Hrs',
            totalWorkedHrs: '08:00 Hrs',
            overtimeHrs: '08:00 Hrs',
            totalPay: '405',
            date: "April 22, 2024"
        },

    ];
    const closeModal = () => {
        setIsModalVisible(false);
    };

    const renderItem = (item) => {
        return (
            <View style={{
                backgroundColor: "#ffffff",
                alignSelf: "center",
                borderRadius: 20,
                shadowColor: "#d3d3d3",
                rowGap: 10,
                shadowOffset: {
                    width: 0,
                    height: 8,
                },
                shadowOpacity: 0.54,
                shadowRadius: 13.32,
                elevation: 26,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: colors.white,
                width: '90%', alignSelf: 'center', marginVertical: 10

            }}>
                <View style={styles.attContainer}>
                    <Text style={styles.attend}>Date</Text>
                    <Text style={styles.date}>April 21, 2024</Text>
                </View>


                <View style={styles.attSubContainer}>
                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                        <View>
                            <View style={styles.workingHrsConatiner}>
                                <View style={{ flexDirection: 'row', width: '30%', }}>
                                    <Text style={styles.start}>Break - 1</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '18%' }}>
                                    <Text style={styles.start}>Title</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '35%' }}>
                                    <Text style={styles.start}>Total Brake Time</Text>
                                </View>
                            </View>
                            <View style={[styles.workingHrsConatiner, { borderBottomWidth: 0 }]}>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.time}>10:15 AM to 11:00 AM</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.time}>Coffee Break</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.time}>15 Mins</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setIsModalVisible(true)} style={{ marginLeft: 'auto' }} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                                <Text style={styles.addBreak}>Edit Break</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>


                <View style={styles.attSubContent}>
                    <View style={styles.workingHrsConatiner}>
                        <View style={{ flexDirection: 'row', width: '30%', }}>
                            <Text style={styles.start}>Break - 2</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '18%' }}>
                            <Text style={styles.start}>Title</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '35%' }}>
                            <Text style={styles.start}>Total Brake Time</Text>
                        </View>
                    </View>
                    <View style={[styles.workingHrsConatiner, { borderBottomWidth: 0 }]}>
                        <View style={{ flexDirection: 'row', width: '20%' }}>
                            <Text style={styles.time}>10:15 AM to 11:00 AM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '20%' }}>
                            <Text style={styles.time}>Coffee Break</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '20%' }}>
                            <Text style={styles.time}>15 Mins</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)} style={{ marginLeft: 'auto' }} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                        <Text style={styles.addBreak}>Edit Break</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.key}
            />
            <Modal
                animationType="fade"
                transparent={true}
                visible={IsModalVisible}
                statusBarTranslucent={true}
                onRequestClose={() => {
                    setIsModalVisible(!IsModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <Image source={require('./assets/images/close.png')} style={styles.closeIcon} />
                        </TouchableOpacity>
                        <View style={{ paddingTop: 10 }}>
                            <Text style={styles.addBreakText}>{'Edit Break'}</Text>
                        </View>
                        <View style={{ marginTop: 30, flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                            <View style={{ alignItems: 'center', width: '100%' }}>
                                <View style={[styles.labelContainer, { left: 110, top: -10 }]}>
                                    <Text style={styles.emailLabel}>Start Time</Text>
                                </View>
                                <View style={[styles.inputContainer, { flexDirection: 'row', paddingHorizontal: 18, paddingVertical: 5, borderRadius: 10, borderColor: colors.txtColor, borderWidth: 0.4 }]}>
                                    <View style={{ justifyContent: 'center', alignSelf: 'center', paddingVertical: 10 }}>
                                        {/* <TextInput style={[styles.inputText, { textAlign: 'center' }]} placeholder={'09:10 AM'} maxLength={5} keyboardType={'number-pad'} value={selectedTime} /> */}
                                        <Text style={styles.startxt}>{selectedTime ? selectedTime : '09:10 AM'}</Text>
                                    </View>
                                    <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 5, justifyContent: 'center' }} onPress={() => showDatePicker('start')} >
                                        <Image source={require('./assets/images/clock.png')} style={styles.calander} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', width: '100%' }}>
                                <View style={[styles.labelContainer, { left: 110, top: -10 }]}>
                                    <Text style={styles.emailLabel}>End Time</Text>
                                </View>
                                <View style={[styles.inputContainer, { flexDirection: 'row', paddingHorizontal: 18, paddingVertical: 5, borderWidth: 0.4, borderRadius: 10, borderColor: colors.txtColor }]}>
                                    <View style={{ justifyContent: 'center', alignSelf: 'center', paddingVertical: 10 }}>
                                        {/* <TextInput style={[styles.inputText, { textAlign: 'center', paddingHorizontal: 0 }]} placeholder={'09:10 AM'} maxLength={5} keyboardType={'number-pad'} value={selectedEndTime} /> */}
                                        <Text style={styles.startxt}>{selectedEndTime ? selectedEndTime : '09:10 AM'}</Text>
                                    </View>
                                    <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 5, justifyContent: 'center' }} onPress={() => showDatePicker('end')}>
                                        <Image source={require('./assets/images/clock.png')} style={styles.calander} />
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

                        />
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
                                    data={dropdownData}
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
            {/* <ScrollView
                style={styles.imgContainer}
                contentContainerStyle={{
                    backgroundColor: "#f7f8fa",
                    paddingHorizontal: "5%",
                    rowGap: 15,
                    paddingVertical: 20
                }}
            >
            
            </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#FAFAFA' },
    imgContainer: {
        alignSelf: 'center', paddingTop: 0, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        width: '100%',
    },
    txtContainer: { paddingHorizontal: 28, paddingVertical: 10 },
    name: {
        fontFamily: 'Manrope-Regular',
        fontSize: 20,
        fontWeight: '400',
        color: colors.black,
    },
    text: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: colors.black },
    attSubContent: {
        paddingHorizontal: "5%",
        backgroundColor: colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: Platform.OS === 'android' ? 0.58 : 0.19,
        shadowRadius: 16.00,
        elevation: 24,
        zIndex: 4,
        paddingBottom: 20



    },
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
        marginStart: 33,
        zIndex: 1,
        elevation: 0,
        position: "absolute",
        top: -12,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        zIndex: 0,
        borderColor: '#22215B29', marginLeft: 25,
        width: '58%', flexDirection: 'row',
    },
    emailLabel: { color: colors.black, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
    inputText: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', justifyContent: 'center', alignSelf: 'center' },
    calander: { width: 25, height: 25, resizeMode: 'contain' },
    applyBtn: { backgroundColor: colors.greenTheme, borderRadius: 10, paddingHorizontal: 38, paddingVertical: 15 },
    applyText: { color: colors.white, fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400' },
    workingHrsConatiner: {
        flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: 'space-between',
        paddingBottom: 10, borderBottomWidth: 0.4, borderBottomColor: colors.txtColor, paddingTop: 10
    },
    dateText: { color: colors.black, fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500' },
    attContainer: {
        paddingHorizontal: "5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 8

    },
    attend: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
    date: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
    attSubContainer: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'column',
        shadowColor: "#567DF4",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.48,
        shadowRadius: Platform.OS === 'android' ? 6.00 : 2.90,
        elevation: 16,
        paddingBottom: 30,
        paddingHorizontal: "5%",
        zIndex: 2

    },
    addBreak: { fontFamily: 'Manrope-SemiBold', fontSize: 10, fontWeight: '500', color: colors.black, textAlign: 'center', paddingTop: 0, textDecorationLine: 'underline' },
    amt: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600', color: colors.black },
    payContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        borderRadius: 15,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: "3%",
        alignSelf: 'center',
        marginTop: -20,
        zIndex: 5,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,

    },
    closeButton: { position: 'absolute', top: 10, right: 20, zIndex: 1 },
    closeIcon: { width: 25, height: 25, resizeMode: 'contain', tintColor: colors.black },
    dropdown: {
        height: 50,
        borderColor: colors.greenTheme,
        borderWidth: 0.5,
        borderRadius: 8,
        // paddingHorizontal: 15,
        // paddingVertical: 20,
        width: '45%',
    },
    placeholderStyle: {
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular',
        fontWeight: '400',
        fontSize: 12,
    },
    selectedTextStyle: {
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular', fontSize: 12,
        fontWeight: '400', paddingHorizontal: 20
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: '#9CA3AF',
        justifyContent: 'center',
        marginRight: 10
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    modalContainer: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center', paddingTop: 50 },
    modalContent: { backgroundColor: '#fff', width: '90%', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 10 },
    addBreakText: { color: '#070E05', fontFamily: 'Manrope-Regular', fontSize: 24, fontWeight: '700' },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' backgroundColor:"rgba(0,0,0,0.5)"'
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
        fontWeight: '400',
        fontSize: 14,
        color: '#070E05',
        paddingTop: 30,
        textAlign: 'center',
    },
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

    inputText: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' },
    calander: { width: 20, height: 20, resizeMode: 'contain' },
    input: { borderWidth: 0.2, borderColor: colors.greenTheme, borderRadius: 10, padding: 8, width: '90%', marginTop: 20 },
    dropdown: {
        height: 50,
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
        padding: 3,
        zIndex: 0,
        borderColor: colors.borderColourPurple, width: '40%', alignSelf: 'center'
    },
    emailLabel: { color: colors.borderColourPurple, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
    mainContainer: { marginTop: 35, width: '90%' },
    startxt: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', paddingHorizontal: 15 },
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
