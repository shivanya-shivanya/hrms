import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import { colors } from '../../../components/colors';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { Dropdown } from 'react-native-element-dropdown';
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import { CalendarList } from "react-native-calendars";
import PayRollInfoCard from '../../../components/PayRollInfoCard';
import { deviceHeight, deviceWidth } from '../Utils/DImensions';
import { moderateScale } from 'react-native-size-matters';

export default function PayRollInfo() {
    const navigation = useNavigation();
    const detail = [
        {
            id: '1',
            title: 'Salary Requested',
            time: 'Jan 3 2024 : 10:00 PM EST',
            transferType: 'Instant Transfer',
            verified: 'HR Verified',
            amount: '+$ 480'
        },
        {
            id: '2',
            title: 'Salary Earned',
            time: 'Jan 3 2024 : 10:00 PM EST',
            transferType: 'Instant Transfer',
            verified: 'HR Verified',
            amount: '- $ 480'
        },
    ];

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


    const year = [
        { label: '1', value: '1990' },
        { label: '2', value: '1991' },
        { label: '3', value: '2024' },
        { label: '4', value: '2023' },
        // Add more years as needed
    ];
    const month = [
        { label: 'January', value: '1' },
        { label: 'February', value: '2' },
        { label: 'March', value: '3' },
        { label: 'April', value: '4' },
        { label: 'May', value: '5' },
        { label: 'June', value: '6' },
        { label: 'July', value: '7' },
        { label: 'August', value: '8' },
        { label: 'September', value: '9' },
        { label: 'October', value: '10' },
        { label: 'November', value: '11' },
        { label: 'December', value: '12' }
    ];
    const [isFocus, setIsFocus] = useState(false);
    const weeks = ['M', 'T', 'W', 'Th', 'F', 'S', 'S']

    const [selectedDates, setSelectedDates] = useState([]);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handlePressDate = (date, index) => {
        let newSelectedDates = [...selectedDates, date];

        // Clear the array if more than 3 values are present
        if (newSelectedDates.length > 2) {
            newSelectedDates = newSelectedDates.slimarkede(2);
        }

        setSelectedDates(newSelectedDates);

    };
    const [isCalendarVisible, setCalendarVisible] = useState(false);
    const toggleCalendarVisibility = () => {
        setCalendarVisible(!isCalendarVisible);
    };

    const closeModal = () => {
        setCalendarVisible(false);
    };

    const onDayPress = useCallback((day) => {
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

    const renderItem = () => {
        return (
            <View>
                <View style={styles.attContainer}>
                    <View>
                        <Text style={styles.attend}>Payroll</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <Text style={styles.date}>Jan 4 to Jan 13</Text>
                    </View>
                </View>
                <View style={[styles.attSubContent, { marginTop: -20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}>
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
                    <View style={[styles.workingHrsConatiner, { borderBottomWidth: 0, marginBottom: 10 }]}>
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

                <View style={[styles.attSubContent, { marginTop: -15, paddingBottom: 25 }]}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                        <View>
                            <Text style={styles.emailLabel}>Total Breaks</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 5 }}>
                            <Text style={styles.time}>30 mins</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ marginLeft: 'auto', paddingVertical: 5, marginRight: 5 }} onPress={() => navigation.navigate("BreakScreen")}>
                        <Text style={[styles.emailLabel, { textDecorationLine: 'underline' }]}>View Break</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.attSubContent, { marginTop: -22, paddingBottom: 25, borderRadius: 12, borderColor: '#fff' }]}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                        <View>
                            <Text style={styles.emailLabel}>Total Calculated Pay</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 5 }}>
                            <Text style={styles.time}>$175.00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 8 }}>
                        <View>
                            <Text style={styles.emailLabel}>Overtime Pay</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 5 }}>
                            <Text style={styles.time}>$175.00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                        <View>
                            <Text style={styles.emailLabel}>Early Wage Access</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 5 }}>
                            <Text style={styles.time}>$175.00</Text>
                        </View>
                    </View>
                    <View style={styles.bottomBorder} />
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingTop: 15 }}>
                        <View>
                            <Text style={styles.emailLabel}>Total Payout</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 5 }}>
                            <Text style={styles.payout}>$175.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="Payroll Info" />
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
                    <View style={{ flexDirection: 'row', marginTop: 30, width: '95%', marginBottom: 10 }}>

                        <View style={styles.labelContainer}>
                            <Text style={styles.emailLabel}>From Date to Date</Text>
                        </View>
                        <TouchableOpacity style={styles.inputContainer} onPress={toggleCalendarVisibility}>
                            <Text style={styles.inputText}>
                                {fromDate && toDate ?
                                    `${moment(fromDate).format('MM-DD-YYYY')} - ${moment(toDate).format('MM-DD-YYYY')}`
                                    : '06-17-2024 - 06-20-2024'
                                }
                            </Text>
                            <View style={{ marginLeft: 'auto' }}>
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
                                        // weeks={weeks}
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
                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', paddingVertical: 20 }}>
                        <View>
                            <Text style={styles.dateText}>Jan 4 to Jan 9</Text>
                        </View>
                        <View style={{ marginLeft: 'auto' }}>
                            <Text style={[styles.dateText, { textDecorationLine: 'underline' }]}>Download Report</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <PayRollInfoCard />
                    </View>
                    {/* <FlatList
                        data={detail}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingBottom: 20, paddingTop: 4 }}
                    /> */}
                </ScrollView>
            </View>
        </View>
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
    attSubContent: {
        backgroundColor: colors.white, borderRadius: 15, elevation: 1, padding: 10, width: '91%', alignSelf: 'center', marginTop: 8,
        shadowColor: '#0043D1',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
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
        top: -14,
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
        flexDirection: 'row', width: '95%', alignSelf: 'center', justifyContent: 'space-between',
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
    addBreak: { fontFamily: 'Manrope-SemiBold', fontSize: 10, fontWeight: '500', color: colors.black, textAlign: 'center', paddingTop: 8, textDecorationLine: 'underline' },
    amt: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600', color: colors.black },
    payContainer: { flexDirection: 'row', marginTop: 15, borderRadius: 15, backgroundColor: colors.white, elevation: 3, padding: 0, width: '90%', alignSelf: 'center', marginTop: -10, padding: 18, marginBottom: 20 },
    bottomBorder: { paddingBottom: 20, borderBottomWidth: 0.4, borderBlockColor: colors.txtColor, width: '95%', alignSelf: 'center' },
    payout: { fontWeight: '600', fontFamily: 'Manrope-Bold', fontSize: 14, color: colors.black },
    closeButton: {
        alignItems: "flex-end",
        marginRight: deviceWidth * 0.05,
        alignSelf: "flex-end",
        marginTop: Platform.OS === 'ios' ? moderateScale(35) : moderateScale(20),
        backgroundColor: colors.greenTheme,
        padding: 7,
        borderRadius: 10,
    },
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
    accountText: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black, paddingHorizontal: 22 },
    inputText: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', justifyContent: 'center', alignSelf: 'center' },
});