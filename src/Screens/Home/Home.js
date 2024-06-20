import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal, TextInput, Alert, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../components/colors';
import Navbar from '../../../components/NavBar';
import { BlurView } from '@react-native-community/blur';
import SmallGreenButton from '../../../components/SmallGreenButton';
import SmallWhiteButton from '../../../components/SmallWhiteButton';
import DynamicButton from '../../../components/Button';
import { Dropdown } from 'react-native-element-dropdown';
import { deviceWidth } from '../Utils/DImensions';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [IsModalVisible, setIsModalVisible] = useState(false);
  const [state, setState] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [confirmBreak, setConfirmBreak] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
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

  const data = [
    { label: 'Lunch Break', value: '1' },
    { label: 'Tea Break', value: '2' },
    { label: 'Mid Break', value: '3' },

  ];

  const [value, setValue] = useState('Lunch Break');
  const [isFocus, setIsFocus] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Navbar
        title="Good Morning, Kim Jones"
        showProgramManagerInfo={true}
        titleStyle={{ fontFamily: 'Manrope-Bold', fontSize: 14, fontWeight: '500', color: colors.black }} />
      <View style={styles.imgContainer}>
        <ScrollView>
          {!confirm ? <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', paddingLeft: 20, justifyContent: 'center', marginLeft: 15 }}>
              <Text style={styles.timeText}>Time</Text>
              <View style={{ flexDirection: 'row', paddingTop: 2, justifyContent: 'center' }}>
                <Image source={require('../../../components/assets/images/clock.png')} style={styles.clockImage} />
                <View>
                  <Text style={styles.clockTime}>10:00 AM EST</Text>
                </View>
              </View>
            </View>
            <View style={{ marginLeft: 'auto', marginRight: 15 }}>
              <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
                <Image source={require('../../../components/assets/images/userCheck.png')} style={styles.checkInImage} />
                <Text style={styles.checkIn}>Check-In</Text>
              </TouchableOpacity>
            </View>
          </View> :
            <>
              <View style={{ flexDirection: 'row', width: '75%', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column', paddingLeft: 20, justifyContent: 'center', marginLeft: 15 }}>
                  <Text style={styles.timeText}>Time</Text>
                  <View style={{ flexDirection: 'row', paddingTop: 2, justifyContent: 'center' }}>
                    <Image source={require('../../../components/assets/images/clock.png')} style={styles.clockImage} />
                    <View>
                      <Text style={styles.clockTime}>10:00 AM EST</Text>
                    </View>
                  </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.timeText}>Time at work</Text>
                  <View style={{ flexDirection: 'row', paddingTop: 2, justifyContent: 'center' }}>
                    <Image source={require('../../../components/assets/images/clock.png')} style={[styles.clockImage, { tintColor: confirmBreak ? colors.red : colors.timeGreen }]} />
                    <View>
                      <Text style={[styles.clockTime, { color: confirmBreak ? colors.red : colors.timeGreen }]}>02:55:35</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-around', alignSelf: 'center', marginTop: 25 }}>
                {confirmBreak ? <DynamicButton
                  icon={require('../../../components/assets/images/resumeWork.png')}
                  title="Resume Work"
                  backgroundColor={colors.timeGreen}
                  textColor={colors.white}
                  onPress={() => {
                    setIsModalVisible(!IsModalVisible)
                  }}
                /> : <DynamicButton
                  icon={require('../../../components/assets/images/break.png')}
                  title="Take Break"
                  backgroundColor={colors.yellow}
                  textColor={colors.black}
                  onPress={() => {
                    setIsModalVisible(!IsModalVisible)
                  }}
                />}

                <DynamicButton
                  icon={require('../../../components/assets/images/checkout.png')}
                  title="Checkout"
                  backgroundColor={colors.red}
                  textColor={colors.white}
                  onPress={() => {
                    setCheckOut(true);
                    setModalVisible(!modalVisible)
                  }}
                />
              </View>
            </>
          }
          <View style={styles.attContainer}>
            <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', paddingVertical: '5%' }}>
              <View>
                <Text style={styles.attend}>Attendance Cycle</Text>
              </View>
              <View style={{ marginLeft: 'auto' }}>
                <Text style={styles.date}>April 29 to May 03</Text>
              </View>
            </View>
            <View style={styles.attSubContainer}>
              <View style={{ flexDirection: 'row', }}>
                <View>
                  <Text style={styles.hours}>Total Working Hrs:</Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                  <Text style={styles.hoursCount}>48 hrs</Text>
                </View>
              </View>
              <TouchableOpacity style={{ marginTop: 5 }} onPress={() => navigation.navigate("WorkSummary")} >
                <Text style={styles.viewSummary}>View Work Summary</Text>
              </TouchableOpacity>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.currentBalance}>Current Available Balance</Text>
              </View>
              <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <View>
                  <Text style={styles.price}>$ 600</Text>
                </View>
                <TouchableOpacity style={styles.withdrawnBtn } onPress={() => navigation.navigate("Transactions")}>
                  <Text style={styles.withdrawn}>Withdraw</Text>
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
          </View>



          <View style={styles.subContainer}>
            <View style={styles.transactionHeader}>
              <Text style={styles.transactionHeading}>Recent Transactions</Text>
            </View>
            <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate("Transactions")}>
              <Text style={styles.viewAllText}>View all</Text>

            </TouchableOpacity>
          </View>
          <FlatList
            data={detail}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 20, paddingTop: 4 }}
          />

        </ScrollView>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Please confirm your {checkOut ? 'check-out' : 'check-In'} by your </Text>
            <View style={{}}>
              <Text style={styles.successtext}>E-signature </Text>
            </View>

            <TextInput
              style={styles.input}
              multiline={true}
              numberOfLines={8}
              onChangeText={(text) => setState({ text })}
              value={state} />
            <View style={{ marginTop: 30, width: '93%', marginBottom: 40, flexDirection: 'row', justifyContent: 'space-around' }} >

              <SmallWhiteButton title="Retake" onPress={() => setModalVisible(false)} />
              <SmallGreenButton title="confirm" onPress={() => { setModalVisible(false); setConfirm(true) }} />
            </View>
          </View>

        </View>
      </Modal>


      <Modal
        animationType="slide"
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
              <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <Text style={styles.modalText}>We know its important to take breaks  </Text>
            <View style={{}}>
              <Text style={[styles.modalText, { paddingTop: 3 }]}>Please let us know why are you taking break?  </Text>
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
              <SmallGreenButton title="confirm" onPress={() => { setIsModalVisible(false); setConfirmBreak(true) }} />
            </View>
          </View>

        </View>
      </Modal>
    </View>


  )
}

export default Home;
const styles = StyleSheet.create({
  container: { flex: 1 },
  profileImage: { width: 50, height: 50, resizeMode: 'contain', marginLeft: 10 },
  subContainer: { flexDirection: 'row', marginTop: 15 },
  name: { fontFamily: 'Inter-Regular', fontSize: 14, fontWeight: '500', color: colors.black },
  text: { fontFamily: 'Inter-Regular', fontSize: 14, fontWeight: '500', color: colors.black },
  profile: { fontFamily: 'Inter-Regular', fontSize: 11, fontWeight: '500', color: colors.black },
  notifyContainer: { marginLeft: 'auto', marginRight: 12, justifyContent: 'center' },
  notifyImage: { width: 45, height: 45, resizeMode: 'contain' },
  imgContainer: {
    flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
    backgroundColor: '#FAFAFA',
    width: '100%', marginTop: -25,
  },
  clockImage: { width: 20, height: 20, resizeMode: 'contain' },
  checkInImage: { width: 20, height: 20, resizeMode: 'contain' },
  timeText: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.borderColourPurple, paddingBottom: 6 },
  clockTime: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.txtColor, paddingLeft: 5 },
  checkIn: { fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400', color: colors.black, paddingLeft: 10 },
  btn: { backgroundColor: colors.greenTheme, borderRadius: 10, paddingHorizontal: 40, flexDirection: 'row', paddingVertical: 15, marginRight: 5 },
  attend: { fontFamily: 'Manrope-Bold', fontSize: 16, fontWeight: '500', color: colors.borderColourPurple },
  attContainer: {
    backgroundColor: '#fff', borderRadius: 15, width: '91%', alignSelf: 'center', marginTop: 20,
    shadowColor: '#567DF4',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 2, elevation: 1
  },
  date: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
  attSubContainer: {
    borderRadius: 15, alignSelf: 'center', flexDirection: 'column', paddingHorizontal: '5%', borderColor: colors.white, shadowColor: '#567DF4',
    shadowOffset: { width: 0, height: Platform.OS === 'ios' ? -3 : -6 }, backgroundColor: colors.white,
    shadowOpacity: Platform.OS === 'ios' ? 0.19 : 0.5,
    shadowRadius: Platform.OS === 'ios' ? 6 : 4, elevation: 2, paddingVertical: '5%'
  },
  hours: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.borderColourPurple },
  hoursCount: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '500', color: colors.lightGreen },
  viewSummary: { fontFamily: 'Manrope-Regular', fontSize: 10, fontWeight: '500', color: colors.black, textAlign: 'right', textDecorationLine: 'underline' },
  currentBalance: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.borderColourPurple },
  price: { fontFamily: 'Manrope-Bold', fontSize: 24, fontWeight: '600', color: colors.lightGreen },
  withdrawnBtn: { backgroundColor: colors.greenTheme, borderRadius: 5, paddingHorizontal: 20, flexDirection: 'row', paddingVertical: 10, marginLeft: 'auto' },
  withdrawn: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '500', color: colors.white },
  earnedBtn: { backgroundColor: "#049F6B", paddingHorizontal: 14, borderRadius: 5, paddingVertical: 12 },
  earnedtext: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '500', color: colors.white, textAlign: 'center' },
  withdrawBtn2: { backgroundColor: colors.greenTheme, paddingHorizontal: 14, borderRadius: 5, paddingVertical: 12 },
  transactionHeader: { paddingHorizontal: 20, justifyContent: 'center' },
  transactionHeading: { fontFamily: 'Manrope-Bold', fontSize: 16, fontWeight: '500', color: colors.borderColourPurple },
  viewAllText: { fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '500', color: colors.txtColor, marginRight: 20 },
  renderContainer: { backgroundColor: colors.white, elevation: 2, borderRadius: 10, width: '90%', alignSelf: 'center', marginTop: 15, paddingHorizontal: 15 },
  salary: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600', color: '#343434' },
  timeContent: { fontFamily: 'Manrope-SemiBold', fontSize: 12, fontWeight: '600', color: '#979797' },
  transfer: { fontFamily: 'Manrope-Bold', fontSize: 14, fontWeight: '500', color: '#424242' },
  amount: { fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '600', color: colors.lightGreen },
  verified: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600', color: '#343434' },
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
    fontWeight: '400',
    fontSize: 14,
    color: '#070E05',
    paddingTop: 30,
    textAlign: 'center',
  },
  successImg: { width: 120, height: 120, resizeMode: 'contain' },
  successContainer: { paddingTop: 25, paddingBottom: 20 },
  successtext: {
    fontFamily: 'Manrope-Bold',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14, paddingTop: 5,
    color: '#070E05', lineHeight: 19.6
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  modalBlur: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: { borderWidth: 0.2, borderColor: colors.greenTheme, borderRadius: 10, padding: Platform.OS === 'ios' ? 25 : 8, width: '90%', marginTop: 20 },
  dropdown: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 20,
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
    // shadowColor: "white",
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
  mainContainer: { marginTop: 40, width: '90%' },
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