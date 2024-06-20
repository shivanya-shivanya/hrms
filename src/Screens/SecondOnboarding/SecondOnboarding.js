import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../components/colors';
import { useNavigation } from '@react-navigation/native';
import { FocusAwareStatusBar } from '../../../components/FocusAwareStatusBar';

export default function SecondOnboarding() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
               <FocusAwareStatusBar barStyle={"dark-content"}/>
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.skiptext}>Skip</Text>
                </TouchableOpacity>
                <View style={styles.imgContainer}>
                    <Image source={require('../../../components/assets/images/secondSplash.png')} style={styles.splashLogo} />
                </View>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.healthText}>Track your work &</Text>
                <Text style={styles.healthText2}>get result</Text>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>
                        Lorem ipsum dolor sit amet, consectetur adi piscing elit. Cursus sit suspendisse aliquam eget lorem viverra tincidunt.
                    </Text>
                </View>
                <View style={styles.sliderContainer}>
                    <Image source={require('../../../components/assets/images/Slider2.png')} style={styles.sliderImages} />
                    <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("ThirdOnboarding")}>
                        <Image source={require('../../../components/assets/images/secondStep.png')} style={styles.sliderBtn} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.lightBlue },
    skiptext: { marginLeft: 'auto', fontWeight: '500', fontSize: 16, textAlign: 'center', color: '#363C49', paddingTop: 40, marginRight: 30, fontFamily: 'Manrope' },
    imgContainer: { alignSelf: 'center', paddingTop: 30 },
    splashLogo: { width: Dimensions.get('screen').width - 40, height: 270, resizeMode: 'contain' },
    subContainer: { backgroundColor: colors.lightBlue, paddingBottom: 60 },
    healthText: { fontWeight: '800', fontSize: 30, color: colors.black, paddingLeft: 30, paddingTop: 25, fontFamily: 'Manrope-Regular' },
    healthText2: { fontWeight: '800', fontSize: 30, color: colors.black, paddingLeft: 30, paddingTop: 0, fontFamily: 'Manrope-Regular' },
    secondContainer: { flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: -15, paddingBottom: 200 },
    txtContainer: { paddingTop: 15, width: '90%' },
    txt: { fontWeight: '400', fontSize: 14, color: colors.txtColor, paddingLeft: 30, lineHeight: 26, fontFamily: 'Manrope-Regular' },
    sliderImages: { width: 70, height: 70, resizeMode: 'contain', marginLeft: 10 },
    sliderBtn: { width: 80, height: 80, resizeMode: 'contain' },
    sliderContainer: { position: 'absolute', bottom: 25, left: 28, flexDirection: 'row', width: '90%' },
    btnContainer: { marginLeft: 'auto', marginTop: -15, marginRight: 10 }
});