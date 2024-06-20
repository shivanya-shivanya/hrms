import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors } from './colors';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TopSpace } from '../src/Screens/Utils/DImensions';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Navbar = ({ title, showProgramManagerInfo, titleStyle }) => {
  const navigation = useNavigation();
  const SafeAreaValue = useSafeAreaInsets();
  // console.log("SafeAreaValue", SafeAreaValue);
  return (
    <View style={[styles.subContainer, {
      // paddingTop:Platform.OS == 'android' ? SafeAreaValue.top+10 : SafeAreaValue.bottom
      paddingTop: TopSpace +10
    }]}>
      <Image source={require('./assets/images/dummyProfile.png')} style={styles.profileImage} />
      <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
        <Text style={[styles.name, titleStyle]}>{title}</Text>
        {showProgramManagerInfo && <Text style={styles.text}>Program Manager, <Text style={styles.profile}>Design & Development </Text></Text>}
      </View>
      <TouchableOpacity style={styles.notifyContainer}
        onPress={() => navigation.navigate("Notification")}
      >
        <Image source={require('./assets/images/notification.png')} style={styles.notifyImage} />
      </TouchableOpacity >
    </View>
  );
};

export default Navbar;
const styles = StyleSheet.create({
  container: { flex: 1 },
  profileImage: { width: moderateScale(45), height: moderateScale(45), resizeMode: 'contain', marginLeft: 10 },
  subContainer: { backgroundColor: colors.greenTheme, flexDirection: 'row', paddingBottom: 55 },
  name: { fontFamily: 'Manrope-Bold', fontSize: 14, fontWeight: '500', color: colors.black },
  text: { fontFamily: 'Manrope-Bold', fontSize: 14, fontWeight: '500', color: colors.black },
  profile: { fontFamily: 'Manrope-Medium', fontSize: 11, fontWeight: '500', color: colors.black },
  notifyContainer: { marginLeft: 'auto', marginRight: 12, justifyContent: 'center' },
  notifyImage: { width: moderateScale(40), height: moderateScale(40), resizeMode: 'contain' },
  imgContainer: { flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: colors.white, width: '100%', marginTop: -25, paddingBottom: 180 },
});
