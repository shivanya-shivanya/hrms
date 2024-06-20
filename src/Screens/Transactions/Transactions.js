import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, ScrollView, Platform } from 'react-native'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Navbar from '../../../components/NavBar'
import { colors } from '../../../components/colors'
import { Calendar, CalendarList } from "react-native-calendars";
import moment from "moment";
import { BlurView } from '@react-native-community/blur';
import { Dropdown } from 'react-native-element-dropdown';
import GreenButton from '../../../components/GreenButton';
import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { deviceHeight, deviceWidth } from '../Utils/DImensions';
import { moderateScale } from 'react-native-size-matters';


const Transactions = () => {
  const navigation = useNavigation();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const data = [
    { label: 'Bank of America', value: '1' },
    { label: 'Bank of India', value: '2' },


  ];

  const [value, setValue] = useState('Bank of America');
  const [isFocus, setIsFocus] = useState(false);

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

  const renderItem = (item) => {
    return (
      <View style={[styles.renderContainer, { flexDirection: 'row' }]}>
        <View style={{ paddingVertical: 10 }}>
          <View style={{ paddingHorizontal: 5, paddingVertical: 4 }}>
            <Text style={styles.salary}>{item?.item?.title}</Text>
          </View>
          <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
            <Text style={styles.timeContent}>{item?.item?.time}</Text>
          </View>
          <View style={{ paddingHorizontal: 5 }}>
            <Text style={styles.transfer}>{item?.item?.transferType}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto', paddingVertical: 25, alignItems: 'flex-end' }}>
          <Text style={{ fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600', color: item?.item?.title === 'Salary Requested' ? colors.lightGreen : 'red' }}>{item?.item?.amount}</Text>
          <Text style={styles.verified}>{item?.item?.verified}</Text>
        </View>
      </View>
    );
  }
  const [selected, setSelected] = useState('');
  const [state, setState] = useState({
    selectedDate1: "",
    selectedDate2: ""
  });
  const [setTollBar, setToolbarState] = useState(false)
  const [startDate, setstartdate] = useState("");
  const weeks = ['M', 'T', 'W', 'Th', 'F', 'S', 'S']


  const [selectedDates, setSelectedDates] = useState([]);


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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // const handleMonthSelect = (month) => {
  //   setSelectedMonth(month);
  // };

  const closeModal = () => {
    setCalendarVisible(false);
    setIsModalVisible(false);
    setModalVisible(false);
  };

  const refRBSheet = React.useRef();

  const [initialDate, setInitialData] = useState(moment().format('YYYY-MM-DD'))
  const [markedDate, setMarkedDate] = useState();
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  // const [selectedMonth, setSelectedMonth] = useState();
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [focus, setFocus] = useState(false);
  const [calendarKey, setCalendarKey] = useState(0);
  const handleMonthChange = (month) => {

    setSelectedMonth(month);
    setCalendarKey(prevKey => prevKey + 1);
  };

  const handleYearChange = (year) => {

    setSelectedYear(year);
    setCalendarKey(prevKey => prevKey + 1);
  }
  // console.log("fromDate", fromDate ? fromDate : "hi")

  const year = [
    { label: '1', value: '1990' },
    { label: '2', value: '1991' },
    { label: '3', value: '2024' },
    { label: '4', value: '2023' },
    // Add more years as needed
  ];
  const month = [
    { label: 'January', value: 0 },
    { label: 'February', value: 1 },
    { label: 'March', value: 2 },
    { label: 'April', value: 3 },
    { label: 'May', value: 4 },
    { label: 'June', value: '6' },
    { label: 'July', value: '7' },
    { label: 'August', value: '8' },
    { label: 'September', value: '9' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' }
  ];

  const [selectedPercentage, setSelectedPercentage] = useState('100%');
  const [currentDate, setCurrentDate] = useState(new Date());

  const selectPercentage = (percentage) => {
    setSelectedPercentage(percentage);
  };
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031'];
  const getcurrentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleLeftArrowClick = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);

    const fullMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = newDate.getMonth();
    const month = fullMonthNames[monthIndex];
    setShowMonth(month)

    const year = newDate.getFullYear();
    setShowYear(year)
    console.log("Month:", month);
    console.log("Year:", year);

    setCurrentDate(newDate);
  };

  const [valueMonth, setValueMonth] = useState(1);




  // ***********Calender*************

  const onDayPress = useCallback((day) => {
    console.log("day", day);
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

  const [selectedButton, setSelectedButton] = useState(1);
  const handleButtonPress = (index) => {
    setSelectedButton(index);
};

  return (
    <>

      {isCalendarVisible || bottomSheetVisible && (
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
        <Navbar title="Transactions" />
        <View style={styles.imgContainer}>
          <ScrollView>
            <View style={styles.attContainer}>
              <View>
                <Text style={styles.attend}>Transactions</Text>
              </View>
            </View>
            <View style={styles.attSubContainer}>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>

              </View>

              <View style={{ marginTop: 0 }}>
                <Text style={styles.currentBalance}>Current Available Balance</Text>
              </View>
              <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <View>
                  <Text style={styles.price}>$ 600</Text>
                </View>
                <TouchableOpacity style={styles.withdrawnBtn} onPress={() => { refRBSheet.current.open(); setBottomSheetVisible(true); }}>
                  <Text style={styles.withdrawn}>Withdraw</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 15, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate("ViewAttendance")} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                  <Text style={styles.viewAttendance}>View Attendance & Working Hrs.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate("PaySlip")} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                  <Text style={styles.viewSummary}>View Pay Slips</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 25 }}>
                <TouchableOpacity style={styles.earnedBtn}>
                  <Text style={styles.earnedtext}>Earned: $ 12,000</Text>
                </TouchableOpacity>

                <View>
                  <TouchableOpacity style={styles.withdrawBtn2}>
                    <Text style={styles.earnedtext}>Withdrawn: $ 6000</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <RBSheet
              ref={refRBSheet}
              draggable={true}
              height={650}
              // useNativeDriver={true}
              customStyles={{
                container: { backgroundColor: '#FAFAFA', borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 5 },
                wrapper: {
                  backgroundColor: 'rgba(0, 0, 0, 0.50)',
                },
                draggableIcon: {
                  backgroundColor: colors.black,
                  padding: 9
                },
              }}
              customModalProps={{
                animationType: 'slide',
                statusBarTranslucent: true,
                backgroundColor: '#000',
              }}
              customAvoidingViewProps={{
                enabled: false,
              }}
            >
              <ScrollView style={styles.imgContainer}>
                <View style={{ marginBottom: 12 }}>
                  <Text style={styles.accountText}>Account to Receive Your Earnings </Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', borderRadius: 15, backgroundColor: colors.white, elevation: 0.5, paddingBottom: 15 }}>
                  <Dropdown
                    style={[styles.dropdowns, isFocus && { borderColor: colors.greenTheme }]}
                    search={false}
                    placeholderStyle={[styles.placeholderStyles, { paddingLeft: 10 }]}
                    selectedTextStyle={styles.selectedTextStyles}
                    inputSearchStyle={styles.inputSearchStyles}
                    iconStyle={styles.iconStyles}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={isFocus ? 'Select Bank' : value}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}

                  />
                  <View>
                    <Text style={styles.accountNumber}>**** **** **** 1990</Text>
                  </View>
                </View>
                <View style={styles.amtConatiner}>
                  <Text style={styles.dollarSign}>$ <Text style={styles.amt}>5,250</Text></Text>
                  <Text style={styles.avaBalance}>Available Balance $10,250.00</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-around', alignSelf: 'center' }}>
                  <TouchableOpacity style={[styles.amtPercentageContainer, selectedPercentage === '10%' && { backgroundColor: colors.greenTheme }]} onPress={() => selectPercentage('10%')}>
                    <Text style={styles.amtPercentage}>10%</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.amtPercentageContainer, selectedPercentage === '50%' && { backgroundColor: colors.greenTheme }]} onPress={() => selectPercentage('50%')}>
                    <Text style={styles.amtPercentage}>50%</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.amtPercentageContainer, selectedPercentage === '70%' && { backgroundColor: colors.greenTheme }]} onPress={() => selectPercentage('70%')}>
                    <Text style={styles.amtPercentage}>70%</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.amtPercentageContainer, selectedPercentage === '100%' && { backgroundColor: colors.greenTheme }]} onPress={() => selectPercentage('100%')}>
                    <Text style={styles.amtPercentage}>100%</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: 13, marginBottom: 5 }}>
                  <Text style={styles.accountText}>Transfer  Speed</Text>
                </View>
                {/* <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-around', marginTop: 10, alignSelf: 'center' }}>
                  <View style={{ width: '47%' }}>
                    <TouchableOpacity style={[styles.earnedBtn, { backgroundColor: colors.white, paddingVertical: 18, borderRadius: 15 }]}>
                      <Text style={[styles.earnedtext, { color: colors.black }]}>Instant</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: '47%' }}>
                    <TouchableOpacity style={[styles.withdrawBtn2, { backgroundColor: colors.greenTheme, paddingVertical: 18, borderRadius: 15 }]}>
                      <Text style={[styles.earnedtext, { color: colors.black }]}>Next Day</Text>
                    </TouchableOpacity>
                  </View>
                </View> */}
                <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-around', marginTop: 10, alignSelf: 'center' }}>
                  <View style={{ width: '47%' }}>
                    <TouchableOpacity style={[styles.insBtn, selectedButton === 0 ? styles.selectedButton : null,]} onPress={() => handleButtonPress(0)}>
                      <Text style={[styles.earnedtext,{color:colors.black}]}>Instant</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: '47%' }}>
                    <TouchableOpacity style={[styles.insBtn, selectedButton === 1 ? styles.selectedButton : null,]} onPress={() => handleButtonPress(1)}>
                      <Text style={[styles.earnedtext,{color:colors.black}]}>Next Day</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                  <Text style={styles.early}>Early Transfer Fee : $1.91</Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                  <Text style={styles.note}>Note:<Text style={[styles.note, { color: colors.txtColor }]}>The amount you are transferring will be deducted from your next payroll.</Text></Text>
                </View>
                <View style={{ marginBottom: 40 }}>
                  <GreenButton title="Transfer Amount" textColor={colors.black} />
                </View>
              </ScrollView>

            </RBSheet>
            <View style={{ flexDirection: 'row', marginTop: 50, width: '95%' }}>

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
                <View style={{ alignItems: 'flex-end', marginLeft: moderateScale(5) }}>
                  <Image source={require('../../../components/assets/images/Calendar.png')} style={styles.calander} />
                </View>

              </TouchableOpacity>
              <View style={{ marginLeft: 10, justifyContent: 'center', marginRight: 25 }}>
                <TouchableOpacity style={styles.applyBtn}>
                  <Text style={styles.applyText}>Apply</Text>
                </TouchableOpacity>
              </View>
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

            <View style={{ marginLeft: 20, marginTop: 18 }}>
              <Text style={styles.todayText}>Today</Text></View>
            <FlatList
              data={detail}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              contentContainerStyle={{ paddingBottom: 20, paddingTop: 4 }}
            />
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Transactions;
const styles = StyleSheet.create({
  container: { flex: 1 },
  imgContainer: {
    flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
    backgroundColor: '#FAFAFA',
    width: '100%', marginTop: -25,
  },
  attend: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
  attContainer: {
    backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingTop: 20, paddingBottom: 35, paddingLeft: 20, paddingRight: 20, width: '91%', alignSelf: 'center', marginTop: 20, flexDirection: 'row',
    shadowColor: '#567DF4',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  attSubContainer: { backgroundColor: colors.white, borderRadius: 20, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'column', paddingHorizontal: 22, elevation: 1, paddingBottom: 25, marginTop: -22, borderColor: colors.white },
  currentBalance: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
  price: { fontFamily: 'Manrope-Bold', fontSize: 24, fontWeight: '600', color: colors.lightGreen },
  withdrawnBtn: { backgroundColor: colors.greenTheme, borderRadius: 5, paddingHorizontal: 20, flexDirection: 'row', paddingVertical: 10, marginLeft: 'auto' },
  withdrawn: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '500', color: colors.white },
  earnedBtn: { backgroundColor: '#049F6B', paddingHorizontal: 16, borderRadius: 5, paddingVertical: 12 },
  earnedtext: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: colors.white, textAlign: 'center' },
  withdrawBtn2: { backgroundColor: colors.greenTheme, paddingHorizontal: 16, borderRadius: 5, paddingVertical: 12 },
  viewSummary: { fontFamily: 'Manrope-SemiBold', fontSize: 10, fontWeight: '500', color: colors.black, textDecorationLine: 'underline', },
  viewAttendance: { fontFamily: 'Manrope-SemiBold', fontSize: 10, fontWeight: '500', color: colors.black, textDecorationLine: 'underline' },
  labelContainer: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    marginStart: 30,
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
    borderColor: '#6AD29E29', marginLeft: 20,
    width: Platform.OS === 'ios' ? '58%' : '55%', flexDirection: 'row',
  },
  emailLabel: { color: colors.black, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
  inputText: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', justifyContent: 'center', alignSelf: 'center' },
  calander: { width: moderateScale(20), height: moderateScale(20), resizeMode: 'contain' },
  applyBtn: { backgroundColor: colors.greenTheme, borderRadius: 10, paddingHorizontal: 40, paddingVertical: 15 },
  applyText: { color: colors.white, fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400' },
  todayText: { color: colors.black, fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500' },
  renderContainer: { backgroundColor: colors.white, elevation: 2, borderRadius: 10, width: '90%', alignSelf: 'center', marginTop: 15, paddingHorizontal: 15 },
  salary: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600', color: '#343434' },
  timeContent: { fontFamily: 'Manrope-SemiBold', fontSize: 12, fontWeight: '600', color: '#979797' },
  transfer: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: '#424242' },
  amount: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600', color: colors.lightGreen },
  verified: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600', color: '#343434' },
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
    alignSelf: 'center',
    height: 50,
    width: '70%',
  },
  placeholderStyle: {
    color: colors.txtColor,
    fontFamily: 'Manrope-Bold',
    fontWeight: '400', fontSize: 18, textAlign: 'center', justifyContent: 'center', color: colors.black
  },
  selectedTextStyle: {
    color: colors.txtColor,
    fontFamily: 'Manrope-Bold',
    fontWeight: '400', paddingHorizontal: 20, fontSize: 14, textAlign: 'center', justifyContent: 'center', color: colors.black
  },
  iconStyle: {
    width: 10,
    height: 10,
    tintColor: colors.red,
    justifyContent: 'center',

  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdowns: {
    alignSelf: 'center',
    height: 50,
    width: '100%',
  },
  placeholderStyles: {
    color: colors.txtColor,
    fontFamily: 'Manrope-Bold',
    fontWeight: '400', fontSize: 18, textAlign: 'center', justifyContent: 'center', color: colors.black
  },
  selectedTextStyles: {
    color: colors.txtColor,
    fontFamily: 'Manrope-Bold',
    fontWeight: '400', paddingHorizontal: 20, fontSize: 14, textAlign: 'center', justifyContent: 'center', color: colors.black
  },
  iconStyles: {
    width: 20,
    height: 20,
    tintColor: colors.black,
    justifyContent: 'center',
    marginRight: 8
  },
  inputSearchStyles: {
    height: 40,
    fontSize: 16,
  },
  accountText: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black, paddingHorizontal: 22 },
  accountNumber: { fontFamily: 'Manrope-SemiBold', fontSize: 12, fontWeight: '400', color: '#6B7280', paddingHorizontal: 15 },
  dollarSign: { fontFamily: 'Manrope-SemiBold', fontSize: 40, fontWeight: '500', color: colors.greenTheme, textAlign: 'center' },
  amt: { fontFamily: 'Manrope-SemiBold', fontSize: 40, fontWeight: '500', color: '#111827', textAlign: 'center' },
  amtConatiner: { paddingVertical: 22 },
  avaBalance: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: colors.black, textAlign: 'center', paddingVertical: 15 },
  amtPercentage: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600', color: '#111827' },
  amtPercentageContainer: { borderRadius: 15, borderColor: colors.white, backgroundColor: colors.white, paddingHorizontal: 28, paddingVertical: 14 },
  dropdowss: {
    height: 50,
    borderRadius: 8,
    // paddingHorizontal: 30,
    marginTop: 10,
    // width: '80%'
  },
  placeholderStyles: {
    color: '#111827', fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600'
  },
  selectedTextStyles: {
    color: '#111827', fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600'
  },
  iconStyles: {
    width: 30,
    height: 30,
    tintColor: '#9CA3AF',
    marginTop: 20
  },
  inputSearchStyles: {
    height: 40,
    fontSize: 14,
  },
  placeholderStyless: {
    color: colors.txtColor,
    fontFamily: 'Manrope-Bold',
    fontWeight: '400', fontSize: 14, textAlign: 'center', justifyContent: 'center', color: colors.black
  },
  selectedTextStyless: {
    color: colors.txtColor,
    fontFamily: 'Manrope-Bold',
    fontWeight: '400', paddingHorizontal: 0, fontSize: 14, textAlign: 'center', justifyContent: 'center', color: colors.black
  },
  iconStyless: {
    width: 20,
    height: 20,
    tintColor: colors.black,
    justifyContent: 'center',
    marginRight: 8
  },
  inputSearchStyless: {
    height: 40,
    fontSize: 16,
  },
  early: { fontFamily: 'Manrope-SemiBold', fontSize: 12, fontWeight: '500', color: colors.black },
  note: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.black },
  monthTxt: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.black, paddingVertical: 2 },
  monthContainer: { justifyContent: 'center', alignSelf: 'center', paddingVertical: 6 },
  selectedButton:{backgroundColor: colors.greenTheme, paddingHorizontal: 25, borderRadius: 15, paddingVertical: 20 },
  insBtn:{backgroundColor: colors.white, paddingHorizontal: 25, borderRadius: 15, paddingVertical: 20}
  
});