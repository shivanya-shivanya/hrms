import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Navbar from '../../../components/NavBar';
import { colors } from '../../../components/colors';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import ProfileCard from '../../../components/ProfileCard';

export default function EmploymentInfo() {
    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="Employment Information" />
            <View style={styles.imgContainer}>
                <View style={styles.mainView}>
                    <View>
                        <Image source={require('../../../components/assets/images/dummyProfile.png')} style={styles.profileImage} />
                    </View>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 0 }}>
                        <Text style={styles.name}>Kim Jones</Text>
                        <Text style={[styles.text, { paddingTop: 5 }]}>Program Manager, <Text style={styles.profile}>Design & Development </Text></Text>
                        <Text style={[styles.workarea, { paddingTop: 5 }]}>ABC Infotech LLC</Text>
                    </View>
                </View>
                <ProfileCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f7f8fa' },
    imgContainer: {
        alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: '#f7f8fa',
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
    profile: { fontFamily: 'Manrope-Regular', fontSize: 12, fontWeight: '400', color: colors.txtColor },
    profileImage: { width: 90, height: 90, resizeMode: 'contain', marginLeft: 10 },
    workarea: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.txtColor },
    mainView: { flexDirection: 'row', paddingTop: 10, paddingHorizontal: 10 },
});