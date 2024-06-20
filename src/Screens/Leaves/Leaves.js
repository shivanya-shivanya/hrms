import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal, TextInput, ScrollView, Platform } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import { colors } from '../../../components/colors';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import DatePicker from 'react-native-date-picker'
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import DynamicButton from '../../../components/Button';
import { Dropdown } from 'react-native-element-dropdown';
import { BlurView } from '@react-native-community/blur';
import GreenButton from '../../../components/GreenButton';
import { CalendarList, Calendar } from "react-native-calendars";
import { deviceHeight, deviceWidth } from '../Utils/DImensions';
import LeavesCard from '../../../components/LeavesCard';
import CalanderComponent from '../../../components/CalanderComponent';
import { moderateScale } from 'react-native-size-matters';

export default function Leaves() {

    const [IsModalVisible, setIsModalVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const Item = [
        { label: 'Casual Leave', value: '1' },
        { label: 'Sick Leave', value: '2' },
        { label: 'Casual Leave', value: '3' },

    ];

    const [value, setValue] = useState('Casual Leave');
    const [isFocus, setIsFocus] = useState(false);
    const navigation = useNavigation();
    const data = [
        {
            id: 1,
            title: '19-Apr-2024 (Pay Date)',
            PayTenure: '24-Mar-2024 to 6-Apr-2024 ',
            time: '09:00 AM'
        },
        {
            id: 2,
            title: '19-Apr-2024 (Pay Date)',
            PayTenure: '24-Mar-2024 to 6-Apr-2024 ',
            time: '09:00 AM'
        },
        {
            id: 3,
            title: '19-Apr-2024 (Pay Date)',
            PayTenure: '24-Mar-2024 to 6-Apr-2024 ',
            time: 'Yesterday'
        },

    ];
    const [apply, setApply] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleCalendarDayPress = (selectedDay) => {
        console.log("Selected day in parent component:", selectedDay);
        // You can perform any other operations with the selected day here
    };


    const renderItem = () => {
        return (
            <View>
                <View style={[styles.attContainer, { flexDirection: 'column' }]}>
                    <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 0.4, borderBottomColor: colors.txtColor, paddingBottom: 10 }}>
                        <View>
                            <Text style={styles.attend}>Applied on</Text>
                        </View>
                        <View style={{ marginLeft: 'auto' }}>
                            <Text style={styles.attend}>Applied For</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', paddingBottom: 10, paddingTop: 10 }}>
                        <View>
                            <Text style={styles.time}>Jan 5 , 2023</Text>
                        </View>
                        <View style={{ marginLeft: 'auto' }}>
                            <Text style={styles.time}>Jan 5 , 2023</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.attSubContainer, { borderRadius: 10 }]}>
                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                        <View>
                            <View style={[styles.workingHrsConatiner, { width: '100%' }]}>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.start}>Leave Type</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.start}>Status</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.start}>Total Pay</Text>
                                </View>
                            </View>
                            <View style={[styles.workingHrsConatiner, { borderBottomWidth: 0, width: '100%', justifyContent: 'space-between' }]}>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={[styles.time, { lineHeight: 22 }]}>Casual Leave</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'center' }}>
                                    <Text style={[styles.time, { lineHeight: 22, textAlign: 'center' }]}>HR Approved</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '15%' }}>
                                    <Text style={[styles.time, { color: colors.black, textAlign: 'right' }]}>Unpaid Leave</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    const weeks = ['M', 'T', 'W', 'Th', 'F', 'S', 'S']

    const [selectedDates, setSelectedDates] = useState([]);
    // console.log("selectedDates", selectedDates)

    const handlePressDate = (date, index) => {
        let newSelectedDates = [...selectedDates, date];

        // Clear the array if more than 3 values are present
        if (newSelectedDates.length > 2) {
            newSelectedDates = newSelectedDates.slice(2);
        }

        setSelectedDates(newSelectedDates);

    };
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const toggleCalendarVisibility = () => {
        setCalendarVisible(!isCalendarVisible);
    };

    const closeModal = () => {
        setCalendarVisible(false);
        setIsModalVisible(false);
        setModalVisible(false);
    };
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedYear, setSelectedYear] = useState(moment().year());
    const [focus, setFocus] = useState(false);
    const [calendarKey, setCalendarKey] = useState(0);
    const handleMonthChange = (month) => {
        // console.log("selectedmonth", month);
        setSelectedMonth(month);
        setCalendarKey(prevKey => prevKey + 1);
    };

    const handleYearChange = (year) => {
        // console.log("selectedYear", year);
        setSelectedYear(year);
        setCalendarKey(prevKey => prevKey + 1);
    }
    const onDayPress = useCallback((day) => {
        // console.log("day", day);
        if (fromDate === "" && toDate === "") {
            setFromDate(day.dateString);
        }
        else if (fromDate !== "" && toDate === "" && day.dateString > fromDate) {
            setToDate(day.dateString)
        }
        else if (fromDate !== "" && toDate !== "") {
            setToDate("");
            setFromDate("")
        }
        // else if (day.dateString < fromDate) {
        //   setFromDate(day.dateString)
        // }
        // else {
        //   setFromDate(day.dateString)
        // }

    }, [fromDate, toDate]);

    const marked = useMemo(() => {
        if (!fromDate) return {};
        let start = new Date(fromDate).getTime();
        let end = new Date(toDate || fromDate).getTime();
        let marked = {};

        for (let cur = start; cur <= end; cur += 60 * 60 * 24000) {
            let curStr = new Date(cur).toISOString().substr(0, 10);
            marked[curStr] = {
                selected: true,
                color: '#6AD29E14',
                textColor: colors.black,
                startingDay: cur == start,
                endingDay: cur == end,
            };
        }
        return marked;
    }, [fromDate, toDate]);
    return (
        <>
            {(IsModalVisible || modalVisible) && (
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
                <NavBarWithBackIcon title="Leaves" />
                <View style={styles.imgContainer}>
                    <ScrollView>
                        <View style={styles.attSubContent}>
                            <View style={styles.subConatiner}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.start}>Scheduled Working Hrs</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 'auto', }}>
                                    <Text style={styles.start}>Pay Per HR</Text>
                                </View>
                            </View>
                            <View style={styles.timeContainer}>
                                <Text style={styles.time}>9:00 AM to 6:00 PM EST</Text>
                                <View style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.time}>$ 45</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-around', alignSelf: 'center', marginTop: 25 }}>
                                <DynamicButton
                                    icon={require('../../../components/assets/images/newLeave.png')}
                                    title="New Leave"
                                    backgroundColor={apply ? colors.black : '#6AD29E14'}
                                    textColor={apply ? colors.white : colors.greenTheme}
                                    onPress={() => {
                                        setIsModalVisible(!IsModalVisible)
                                    }}
                                    buttonStyle={{ borderWidth: 1, borderColor: apply ? colors.black : colors.greenTheme }}
                                    iconColor={apply ? colors.white : colors.greenTheme}
                                />

                                <DynamicButton
                                    icon={require('../../../components/assets/images/checkout.png')}
                                    title="Leave Policy"
                                    iconColor={apply ? colors.white : colors.black}
                                    backgroundColor={apply ? colors.black : colors.greenTheme}
                                    textColor={apply ? colors.white : colors.black}
                                    onPress={() => {
                                        navigation.navigate("LeavePolicy")
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 40, width: '95%', marginBottom: 20 }}>

                            <View style={[styles.labelContainer, { marginStart: 30 }]}>
                                <Text style={styles.emailLabel}>From Date to Date</Text>
                            </View>
                            <TouchableOpacity style={styles.inputContainer} onPress={toggleCalendarVisibility}>
                                <Text style={styles.inputText}>
                                    {fromDate && toDate ?
                                        `${moment(fromDate).format('MM-DD-YYYY')} - ${moment(toDate).format('MM-DD-YYYY')}`
                                        : '06-17-2024 - 06-20-2024'
                                    }
                                </Text>
                                <View style={{ alignItems: 'flex-end', marginLeft: moderateScale(5) }}>
                                    <Image source={require('../../../components/assets/images/Calendar.png')} style={styles.calander} />
                                </View>

                            </TouchableOpacity>
                            <View style={{ marginLeft: 20, justifyContent: 'center', marginRight: 15 }}>
                                <TouchableOpacity style={styles.applyBtn}>
                                    <Text style={styles.applyText}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                            <Modal visible={isCalendarVisible} transparent animationType="slide">
                                <View style={styles.modalContainer}>


                                    <View style={styles.modalContent}>
                                        {/* Close button */}
                                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                            <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} />
                                        </TouchableOpacity>
                                        <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={styles.accountText}>Start Date</Text>
                                                <Text style={styles.inputText}>{fromDate == "" ? "YYYY-MM-DD" : fromDate}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={styles.accountText}>End Date</Text>
                                                <Text style={styles.inputText}>{toDate == "" ? "YYYY-MM-DD" : toDate}</Text>
                                            </View>
                                        </View>
                                        <CalendarList
                                            calendarHeight={deviceHeight * 0.38}
                                            theme={{
                                                backgroundColor: '#ffffff',
                                                calendarBackground: '#ffffff',
                                                textSectionTitleColor: '#b6c1cd',
                                                textSectionTitleDisabledColor: '#d9e1e8',
                                                selectedDayBackgroundColor: '#00adf5',
                                                selectedDayTextColor: '#ffffff',
                                                todayTextColor: '#00adf5',
                                                dayTextColor: '#2d4150',
                                                textDisabledColor: '#d9e1e8',
                                                dotColor: '#00adf5',
                                                selectedDotColor: '#ffffff',
                                                arrowColor: 'orange',
                                                disabledArrowColor: '#d9e1e8',
                                                monthTextColor: colors.black,
                                                indicatorColor: 'blue',
                                                textDayFontFamily: 'monospace',
                                                textMonthFontFamily: 'monospace',
                                                textDayHeaderFontFamily: 'monospace',
                                                textDayFontWeight: '300',
                                                textMonthFontWeight: '700',
                                                textDayHeaderFontWeight: '300',
                                                textDayFontSize: 16,
                                                textMonthFontSize: 16,
                                                textDayHeaderFontSize: 16
                                            }}
                                            // key={calendarKey}
                                            minDate={'24-01-01'}
                                            current={`${selectedYear}-${selectedMonth}-01`}
                                            showScrollIndicator={false}
                                            // containerStyle={{ backgroundColor: colors.greenTheme, justifyContent: 'center', alignSelf: 'center', width: '100%', }}
                                            // scrollContentStyle={{ backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10, alignItems: 'center', width: '100%' }}
                                            cancel={() => setToolbarState({ visible: false })}
                                            confirm={data => {
                                                setState({
                                                    selectedDate1: data[0],
                                                    selectedDate2: data[1],
                                                    visible: false,
                                                });
                                            }}
                                            onDayPress={onDayPress}
                                            markedDates={marked}
                                            markingType='period'
                                            showToolBar={false}
                                            selectedTextColor={"#FDBD00"}
                                            monthDisplayMode={'en-long'}
                                            selectedDateMarkColor={colors.greenTheme}
                                            selectedDateMarkRangeColor={'#6AD29E14'}
                                            firstDayOnWeeks={1}
                                            weeks={weeks}
                                            weeksStyle={{ marginTop: 15 }}
                                            weeksTextStyle={{ color: '#000', fontSize: 12, fontWeight: '700' }}
                                            headerTitleType={3}
                                            listItemStyle={{ headerTitle: { fontSize: 18, color: colors.greenTheme, textAlign: 'center' } }}
                                            cancelText={'Cancel Selection'}
                                            confirmText={'Confirm Selection'}
                                            onPressDate={() => { console.log('clicked'); handlePressDate }}
                                            hideArrow={true}

                                        />

                                    </View>

                                </View>
                            </Modal>
                        </View>
                        <View style={styles.attSubContent}>
                            <View style={styles.workingHrsConatiner}>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.start}>Total Paid Leaves</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={[styles.start, { textAlign: 'center' }]}>Total Leaves Taken</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.start}>Leaves Balance</Text>
                                </View>
                            </View>
                            <View style={[styles.workingHrsConatiner, { borderBottomWidth: 0 }]}>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={[styles.time, { paddingHorizontal: 5 }]}>04</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '30%', justifyContent: 'center' }}>
                                    <Text style={styles.time}>02</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'flex-end', marginRight: 10 }}>
                                    <Text style={styles.time}>-02</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 0 }}>
                            <View>
                                <Text style={styles.dateText}>Jan 4 to Jan 9</Text>
                            </View>
                            <View style={{ marginLeft: 'auto' }}>
                                <Text style={[styles.dateText, { textDecorationLine: 'underline' }]}>Download Leave Report</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <LeavesCard />
                        </View>

                        {/* <FlatList
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                            contentContainerStyle={{ paddingBottom: 20, paddingTop: 4 }}
                        /> */}

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={IsModalVisible}
                            onRequestClose={() => {
                                setIsModalVisible(!IsModalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    {/* Close button */}
                                    <TouchableOpacity style={styles.closeButton} onPress={closeModal} >
                                        <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} onPress={closeModal} />
                                    </TouchableOpacity>
                                    <View style={{ paddingTop: 10 }}>
                                        <Text style={styles.addBreakText}>Apply Leave</Text>
                                    </View>
                                    <View style={styles.mainContainer}>
                                        <View style={[styles.labelContainer, { marginStart: 18 }]}>
                                            <Text style={styles.emailLabel}>Select Leave Type</Text>
                                        </View>
                                        <View style={{ width: '100%' }}>
                                            <Dropdown
                                                style={[styles.dropdowns, isFocus && { borderColor: colors.greenTheme }]}
                                                search={false}
                                                placeholderStyle={styles.placeholderStyles}
                                                selectedTextStyle={styles.selectedTextStyles}
                                                inputSearchStyle={styles.inputSearchStyles}
                                                iconStyle={styles.iconStyles}
                                                data={Item}
                                                maxHeight={300}
                                                labelField="label"
                                                valueField="value"
                                                placeholder={isFocus ? 'Select Leave' : value}
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
                                        <View style={[styles.labelContainer, { marginStart: 20 }]}>
                                            <Text style={styles.emailLabel}>Add Comment for HR</Text>
                                        </View>
                                        <View style={styles.TextInputContainer}>
                                            <TextInput placeholder="Enter Comment" style={styles.input} multiline={true} numberOfLines={8} textAlignVertical="top" />
                                        </View>
                                    </View>
                                    <GreenButton
                                        title="Apply"
                                        onPress={() => { setApply(true); setIsModalVisible(false); setModalVisible(true) }}
                                        buttonStyle={{ borderRadius: 18, marginTop: 25, marginBottom: 30, width: '86%' }}
                                        textColor={colors.black}
                                    />

                                </View>
                            </View>
                        </Modal>


                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <TouchableOpacity style={styles.closeButton} onPress={closeModal} >
                                        <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} onPress={closeModal} />
                                    </TouchableOpacity>
                                    <Text style={styles.modalText}>Apply Successfully</Text>
                                    <View style={styles.successContainer}>
                                        <Image source={require('../../../components/assets/images/success.png')} style={styles.successImg} />
                                    </View>
                                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '50%' }}>
                                        <Text style={styles.successtext}>Your leave has been applied successfully.</Text>
                                    </View>
                                    <GreenButton
                                        title="Looks Good"
                                        onPress={() => { setModalVisible(false) }}
                                        buttonStyle={{ borderRadius: 18, marginTop: 25, marginBottom: 30, width: '86%' }}
                                        textColor={colors.black}
                                    />
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
    start: { fontFamily: 'Manrope-Medium', fontSize: 14, fontWeight: '400', color: colors.black },
    time: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
    timeContainer: { paddingHorizontal: 18, paddingVertical: 10, flexDirection: 'row' },
    labelContainer: {
        backgroundColor: "white",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        marginStart: 5,
        zIndex: 1,
        elevation: 0,
        position: "absolute",
        top: -14,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        zIndex: 0,
        borderColor: '#22215B29', marginLeft: 25,
        width: Platform.OS === 'ios' ? '58%' : '55%', flexDirection: 'row', flexDirection: 'row',
    },
    emailLabel: { color: colors.black, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
    inputText: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', justifyContent: 'center', alignSelf: 'center' },
    calander: { width: moderateScale(20), height: moderateScale(20), resizeMode: 'contain' },
    applyBtn: { backgroundColor: colors.greenTheme, borderRadius: 10, paddingHorizontal: 38, paddingVertical: 15 },
    applyText: { color: colors.black, fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400' },
    workingHrsConatiner: {
        flexDirection: 'row', width: '95%', alignSelf: 'center', justifyContent: 'space-between',
        paddingBottom: 10, borderBottomWidth: 0.4, borderBottomColor: colors.txtColor, paddingTop: 8,
    },
    dateText: { color: colors.black, fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500' },
    attContainer: {
        backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingTop: 20, paddingBottom: 35, paddingLeft: 20, paddingRight: 20, width: '91%', alignSelf: 'center', marginTop: 20, flexDirection: 'row',
        shadowColor: '#567DF4',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    attend: { fontFamily: 'Manrope-Medium', fontSize: 16, fontWeight: '500', color: colors.black },
    date: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
    attSubContainer: { backgroundColor: colors.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'column', paddingHorizontal: 22, elevation: 1, paddingBottom: 25, marginTop: -22, borderColor: colors.white, },
    addBreak: { fontFamily: 'Manrope-SemiBold', fontSize: 10, fontWeight: '500', color: colors.black, textAlign: 'center', paddingTop: 8, textDecorationLine: 'underline' },
    amt: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600', color: colors.black },
    payContainer: { flexDirection: 'row', marginTop: 15, borderRadius: 15, backgroundColor: colors.white, elevation: 3, padding: 0, width: '90%', alignSelf: 'center', marginTop: -10, padding: 18, marginBottom: 20 },
    bottomBorder: { paddingBottom: 20, borderBottomWidth: 0.4, borderBlockColor: colors.txtColor, width: '95%', alignSelf: 'center' },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
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
    addBreakText: { color: '#070E05', fontFamily: 'Manrope-Regular', fontSize: 24, fontWeight: '700' },
    mainContainer: { marginTop: 35, width: '90%' },
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
        color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400'
    },
    input: { paddingHorizontal: Platform.OS === 'android' ? 14 : 0, color: colors.txtColor, fontFamily: 'Manrope-Regular', fontWeight: '400', justifyContent: "center" },
    TextInputContainer: {
        borderWidth: 0.25,
        borderRadius: 10,
        padding: Platform.OS === 'android' ? 3 : 20,
        zIndex: 0,
        borderColor: colors.txtColor, width: '95%', alignSelf: 'center'
    },
    successContainer: { paddingTop: 25, paddingBottom: 20 },
    successImg: { width: 100, height: 100, resizeMode: 'contain' },
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
        fontWeight: '400', fontSize: 12,
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
    modalContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    modalContent: {
        backgroundColor: '#fff',
        width: deviceWidth,
        borderRadius: 10,
        alignSelf: 'center',
        rowGap: 20
    },
    dropdowns: {
        height: 50,
        borderColor: colors.txtColor,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: '95%', alignSelf: 'center'
        // paddingHorizontal: 15,
        // paddingVertical: 20,
        // width: '45%',
    },
    placeholderStyles: {
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular',
        fontWeight: '400', fontSize: 12,
    },
    selectedTextStyles: {
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular', fontSize: 12,
        fontWeight: '400', paddingHorizontal: 10
    },
    iconStyles: {
        width: 20,
        height: 20,
        tintColor: '#9CA3AF',
        justifyContent: 'center',
        marginRight: 10
    },
    inputSearchStyles: {
        height: 40,
        fontSize: 16,
    },
    closeButton: {
        alignItems: "flex-end",
        marginRight: deviceWidth * 0.05,
        alignSelf: "flex-end",
        marginTop: Platform.OS === 'android' ? 20 : 40,
        backgroundColor: colors.greenTheme,
        padding: 7,
        borderRadius: 10,
    },
    closeIcon: { width: 25, height: 25, resizeMode: 'contain', tintColor: colors.black },
    accountText: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black, paddingHorizontal: 22 },
    inputText: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', justifyContent: 'center', alignSelf: 'center' },
});