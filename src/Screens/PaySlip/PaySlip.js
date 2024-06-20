import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import moment from "moment";
import { CalendarList } from "react-native-calendars";
import { colors } from '../../../components/colors';
import { deviceHeight, deviceWidth } from '../Utils/DImensions';
import { moderateScale } from 'react-native-size-matters';

export default function PaySlip() {
    const [IsModalVisible, setIsModalVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const Item = [
        { label: 'Casual Leave', value: '1' },
        { label: 'Sick Leave', value: '2' },
        { label: 'Casual Leave', value: '3' },

    ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const navigation = useNavigation();

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');


    const weeks = ['M', 'T', 'W', 'Th', 'F', 'S', 'S']

    const [selectedDates, setSelectedDates] = useState([]);


    const handlePressDate = (date, index) => {
        let newSelectedDates = [...selectedDates, date];

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
    };
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedYear, setSelectedYear] = useState(moment().year());

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
        {
            id: 4,
            title: '19-Apr-2024 (Pay Date)',
            PayTenure: '24-Mar-2024 to 6-Apr-2024 ',
            time: 'Yesterday'
        },
        {
            id: 5,
            title: '19-Apr-2024 (Pay Date)',
            PayTenure: '24-Mar-2024 to 6-Apr-2024 ',
            time: 'Jan 21, 2024'
        },
        {
            id: 6,
            title: '19-Apr-2024 (Pay Date)',
            PayTenure: '24-Mar-2024 to 6-Apr-2024 ',
            time: 'Jan 21, 2024'
        }
    ];

    const renderItem = (item) => {
        return (
            <View style={[styles.renderContainer, {}]}>
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                    <View style={{ paddingHorizontal: 5, }}>
                        <Text style={styles.salary}>{item?.item?.title}</Text>
                    </View>
                    <TouchableOpacity style={{ marginLeft: 'auto', justifyContent: 'center' }}>
                        <Image source={require('../../../components/assets/images/download.png')} style={styles.downloadImage} />
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: 10, paddingHorizontal: 8, marginBottom: 5 }}>
                    <Text style={[styles.timeContent, { color: colors.black, fontSize: 14 }]}>PayTenure : <Text style={styles.timeContent}>{item?.item?.PayTenure}</Text></Text>
                </View>
            </View>
        );
    }

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

    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="Pay Slip" />
            <View style={styles.imgContainer}>
                <ScrollView>
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
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingBottom: 20, paddingTop: 4 }}
                    />
                </ScrollView>
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
    applyBtn: { backgroundColor: colors.greenTheme, borderRadius: 10, paddingHorizontal: 28, paddingVertical: 15 },
    applyText: { color: colors.white, fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400' },
    renderContainer: { backgroundColor: colors.white, borderRadius: 10, width: '90%', alignSelf: 'center', marginTop: 18, paddingHorizontal: 15, borderColor: colors.white, borderWidth: 1, paddingVertical: 10 },
    salary: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
    timeContent: { fontFamily: 'Manrope-Medium', fontSize: 13, fontWeight: '400', color: colors.txtColor },
    transfer: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: '#424242' },
    amount: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600', color: colors.lightGreen },
    verified: { fontFamily: 'Manrope-Regular', fontSize: 12, fontWeight: '400', color: colors.txtColor },
    downloadImage: { width: 25, height: 25, resizeMode: 'contain' },
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
    modalContainer: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center', paddingTop: 50 },
    modalContent: { backgroundColor: '#fff', width: '90%', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 10 },
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