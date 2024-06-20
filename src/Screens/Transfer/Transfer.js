import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../../../components/NavBar';
import { colors } from '../../../components/colors';
import { Dropdown } from 'react-native-element-dropdown';
import GreenButton from '../../../components/GreenButton';
import { BlurView } from '@react-native-community/blur';
import { deviceWidth } from '../Utils/DImensions';

const Transfer = () => {
  const data = [
    { label: 'Bank of America', value: '1' },
    { label: 'Bank of India', value: '2' },


  ];
  const [selectedButton, setSelectedButton] = useState(1);
  const handleButtonPress = (index) => {
    setSelectedButton(index);
};

  const [value, setValue] = useState('Bank of America');
  const [isFocus, setIsFocus] = useState(false);

  const [selectedPercentage, setSelectedPercentage] = useState('100%');
  const [showPopup, setShowPopup] = useState(false);

  const selectPercentage = (percentage) => {
    setSelectedPercentage(percentage);
  };
  const closeModal = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
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

        <Navbar title="Transfer" />
        <ScrollView style={styles.imgContainer}>
          <View>
            <Text style={styles.accountText}>Account to Receive Your Earnings </Text>
          </View>
          <View style={{ width: '90%', alignSelf: 'center', borderRadius: 15, backgroundColor: colors.white, elevation: 0.5, paddingBottom: 15 }}>
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
          <View style={{ marginTop: 10 }}>
            <Text style={styles.accountText}>Transfer  Speed</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-around', marginTop: 10, alignSelf: 'center' }}>
            <View style={{ width: '47%' }}>
              <TouchableOpacity style={[styles.earnedBtn, selectedButton === 0 ? styles.selectedButton : null,]}  onPress={() => handleButtonPress(0)}>
                <Text style={styles.earnedtext}>Instant</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '47%' }}>
              <TouchableOpacity style={[styles.earnedBtn,selectedButton === 1 ? styles.selectedButton : null,]} onPress={() => handleButtonPress(1)}>
                <Text style={styles.earnedtext}>Next Day</Text>
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
            <GreenButton title="Transfer Amount" textColor={colors.black} onPress={() => setShowPopup(!showPopup)} />
          </View>
        </ScrollView>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showPopup}
        onRequestClose={() => {
          setShowPopup(!showPopup);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <View style={{ width: '65%' }}>
              <Text style={styles.modalText}>Amount Transfer Successfully!</Text>
            </View>

            <View style={styles.successContainer}>
              <Image source={require('../../../components/assets/images/primary.png')} style={styles.successImg} />
            </View>
            <GreenButton
              title="Looks Good"
              onPress={() => { setShowPopup(false) }}
              buttonStyle={{ borderRadius: 18, marginTop: 25, marginBottom: 30, width: '86%' }}
              textColor={colors.black}
            />
          </View>

        </View>
      </Modal>
    </>

  )
}

export default Transfer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imgContainer: {
    flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
    backgroundColor: '#FAFAFA',
    width: '100%', marginTop: -25,
  },
  accountText: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black, paddingHorizontal: 22, paddingVertical: 15 },
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: 10
  },
  placeholderStyle: {
    color: '#111827', fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600'
  },
  selectedTextStyle: {
    color: '#111827', fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600'
  },
  iconStyle: {
    width: 30,
    height: 30,
    tintColor: '#9CA3AF',
    justifyContent: 'center',
    marginTop: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  accountNumber: { fontFamily: 'Manrope-SemiBold', fontSize: 12, fontWeight: '400', color: '#6B7280', paddingHorizontal: 15 },
  dollarSign: { fontFamily: 'Manrope-SemiBold', fontSize: 40, fontWeight: '500', color: colors.greenTheme, textAlign: 'center' },
  amt: { fontFamily: 'Manrope-SemiBold', fontSize: 40, fontWeight: '500', color: '#111827', textAlign: 'center' },
  amtConatiner: { paddingVertical: 22 },
  avaBalance: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: colors.black, textAlign: 'center', paddingVertical: 15 },
  amtPercentage: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600', color: '#111827' },
  amtPercentageContainer: { borderRadius: 15, borderColor: colors.white, backgroundColor: colors.white, paddingHorizontal: 28, paddingVertical: 14 },
  earnedBtn: { backgroundColor: colors.white, paddingHorizontal: 25, borderRadius: 15, paddingVertical: 20 },
  selectedButton:{backgroundColor: colors.greenTheme, paddingHorizontal: 25, borderRadius: 15, paddingVertical: 20 },
  earnedtext: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: colors.black, textAlign: 'center' },
  withdrawBtn2: { backgroundColor: colors.greenTheme, paddingHorizontal: 25, borderRadius: 15, paddingVertical: 20 },
  early: { fontFamily: 'Manrope-SemiBold', fontSize: 12, fontWeight: '500', color: colors.black },
  note: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.black },
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
    textAlign: 'center',
    paddingVertical: 15
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