import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Navbar from '../../../components/NavBar';
import { colors } from '../../../components/colors';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <Navbar title="Profile" />
      <View style={styles.imgContainer}>
        <ScrollView>
          <View style={{ flexDirection: 'row', width: '97%', justifyContent: 'space-around', alignSelf: 'center' }}>
            <TouchableOpacity style={styles.empContainer} onPress={() => navigation.navigate("EmploymentInfo")}>
              <Image source={require('../../../components/assets/images/emp.png')} style={styles.empImage} />
              <View>
                <Text style={styles.employment}>Employment Information</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.empContainer, { borderLeftColor: '#FF9CC8' }]} onPress={() => navigation.navigate("AttendanceManagement")}>
              <Image source={require('../../../components/assets/images/att.png')} style={styles.empImage} />
              <View>
                <Text style={styles.employment}>Attendance Management</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', width: '97%', justifyContent: 'space-around', alignSelf: 'center', marginTop: 18 }}>
            <TouchableOpacity style={[styles.empContainer, { borderLeftColor: '#83DFFF' }]} onPress={() => navigation.navigate("PayRollManagement")}>
              <Image source={require('../../../components/assets/images/payroll.png')} style={styles.empImage} />
              <View>
                <Text style={styles.employment}>Payroll Management</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.empContainer, { borderLeftColor: '#5BDC93' }]} onPress={() => navigation.navigate("Leaves")}>
              <Image source={require('../../../components/assets/images/leaves.png')} style={styles.empImage} />
              <View>
                <Text style={styles.employment}>Leaves Management</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.subContainer, { borderLeftColor: "#83DFFF" }]}onPress={() => navigation.navigate("PersonalInformation")}>
            <View style={{ marginRight: 10, alignItems: 'center' }}>
              <Image source={require('../../../components/assets/images/personalInfo.png')} style={styles.abtIcon} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.content}>Personal Information</Text>
            </View>
            <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
              <Image source={require('../../../components/assets/images/chevron-right.png')} style={styles.rightIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subContainer, { borderLeftColor: "#FFAB5A" }]} onPress={() => navigation.navigate("Settings")} >
            <View style={{ marginRight: 10, alignItems: 'center' }}>
              <Image source={require('../../../components/assets/images/settings.png')} style={styles.abtIcon} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.content}>Account Settings</Text>
            </View>
            <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
              <Image source={require('../../../components/assets/images/chevron-right.png')} style={styles.rightIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subContainer, { borderLeftColor: "#5BDC93" }]} onPress={() => navigation.navigate("BankAccount")} >
            <View style={{ marginRight: 10, alignItems: 'center' }}>
              <Image source={require('../../../components/assets/images/bankAccount.png')} style={styles.abtIcon} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.content}>Bank Accounts</Text>
            </View>
            <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
              <Image source={require('../../../components/assets/images/chevron-right.png')} style={styles.rightIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.subContainer, { borderLeftColor: "#7C69EE", marginBottom: 20 }]} onPress={() => navigation.navigate("EarlyWAges")} >
            <View style={{ marginRight: 10, alignItems: 'center' }}>
              <Image source={require('../../../components/assets/images/wages.png')} style={styles.abtIcon} />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.content}>Early Wage Access Program</Text>
            </View>
            <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
              <Image source={require('../../../components/assets/images/chevron-right.png')} style={styles.rightIcon} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default Profile;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  imgContainer: {
    flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
    backgroundColor: '#FAFAFA',
    width: '100%', marginTop: -25,
  },
  empContainer: { width: '45%', borderLeftWidth: 4, borderLeftColor: "#7C69EE", backgroundColor: colors.white, borderRadius: 8, paddingTop: 10, paddingBottom: 10, elevation: 1 },
  empImage: { width: 80, height: 80, resizeMode: 'contain' },
  employment: { fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '500', color: colors.borderColourPurple , paddingHorizontal: 15, marginTop: -10 },
  subContainer: { width: '92%', alignSelf: 'center', borderLeftWidth: 4, borderLeftColor: "#81DEFF", padding: 12, borderRadius: 5, backgroundColor: colors.white, marginTop: 20, flexDirection: "row", elevation: 2, marginVertical: 2 },
  content: { fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400', color: colors.borderColourPurple },
  rightIcon: { width: 22, height: 22, resizeMode: 'contain' },
  abtIcon: { width: 40, height: 40, resizeMode: 'contain' }
});