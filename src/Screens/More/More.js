import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from '../../../components/NavBar';
import { colors } from '../../../components/colors';
import TwoColorBorderView from '../../../components/TwoColorBorderView';
import { useNavigation } from '@react-navigation/native';

const More = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Navbar title="More" />
      <View style={styles.imgContainer}>
        <TouchableOpacity style={styles.subContainer} onPress={() => navigation.navigate("About")}>
          <View style={{ marginRight: 10, alignItems: 'center' }}>
            <Image source={require('../../../components/assets/images/about.png')} style={styles.abtIcon} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.content}>About Us</Text>
          </View>
          <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
            <Image source={require('../../../components/assets/images/chevron-right.png')} style={styles.rightIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainer, { borderLeftColor: "#FFDA55" }]} onPress={() => navigation.navigate("Terms")} >
          <View style={{ marginRight: 10, alignItems: 'center' }}>
            <Image source={require('../../../components/assets/images/terms.png')} style={styles.abtIcon} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.content}>Terms of Services</Text>
          </View>
          <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
            <Image source={require('../../../components/assets/images/chevron-right.png')} style={styles.rightIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainer, { borderLeftColor: '#FF99C7' }]} onPress={() => navigation.navigate("PrivacyPolicy")} >
          <View style={{ marginRight: 10, alignItems: 'center' }}>
            <Image source={require('../../../components/assets/images/privacy.png')} style={styles.abtIcon} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.content}>Privacy Policy</Text>
          </View>
          <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
            <Image source={require('../../../components/assets/images/chevron-right.png')} style={styles.rightIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.subContainer, { borderLeftColor: '#FDA48D', backgroundColor: colors.red, position: 'absolute', bottom: 35 }]} onPress={() => navigation.navigate("Login")} >
          <View style={{ marginRight: 10, alignItems: 'center' }}>
            <Image source={require('../../../components/assets/images/logout.png')} style={styles.abtIcon} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.content}>Log Out</Text>
          </View>
          <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
            <Image source={require('../../../components/assets/images/chevron-right.png')} style={[styles.rightIcon, { tintColor: colors.white }]} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default More;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  imgContainer: {
    flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
    backgroundColor: '#FAFAFA',
    width: '100%', marginTop: -25,
  },
  subContainer: { width: '92%', alignSelf: 'center', borderLeftWidth: 4, borderLeftColor: "#81DEFF", padding: 10, borderRadius: 5, backgroundColor: colors.white, marginTop: 15, flexDirection: "row", elevation: 2, marginVertical: 2 },
  content: { fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400', color: colors.borderColourPurple },
  rightIcon: { width: 22, height: 22, resizeMode: 'contain' },
  abtIcon: { width: 40, height: 40, resizeMode: 'contain' }
});