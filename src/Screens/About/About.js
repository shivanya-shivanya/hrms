import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Navbar from '../../../components/NavBar';
import { colors } from '../../../components/colors';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';

export default function About() {
    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="About Us" />
            <View style={styles.imgContainer}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>About Us</Text>

                </View>
                <View style={{ paddingTop:5, width: '85%', alignSelf: 'center' }}>
                    <Text style={styles.dummyTxt}>Lorem ipsum dolor sit amet, consectetur adip is cing elit. Neque nulla sed mauris feugiat eget. Augue id neque nisl nibh ut facilisis massa, diam. Quam massa in fusce mi faucibus integer est, en im. At sed ante et leo. Erat mattis sed cursus pelle ntesque scelerisque sit. Ullamcorper eros senectus urna sit elementum aliquet. Nibh mauris trist ique elit pellentesque sapien malesuada eleifend iaculis malesuada. Mauris, ut id hendrerit habitant gravida urna congue arcu sit. At quisque leo semper urna gravida iac ulis nibh aliquam. Morbi tempor facilisi ultricies magna vitae sit. Velit augue sagittis, tempor, amet arcu nullam quam. Sit feugiat amet, pellentesque morbi mattis id blandit arcu morbi. Morbi cursus ac tortor amet. Iaculis nunc bibendum in vitae turpis mattis nisl viverra. Turpis habitant purus, venenatis vitae ut urna, rhoncus nunc. Aliquam turpis pellentesque arcu malesuada ut et lorem. Donec tincidunt tristique ultricies sed faucibus. Morbi et eu mi, nec, suscipit. Duis pellentesque facilisi pharetra enim neque sagittis.</Text>
                </View>
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
    txt: {
        fontFamily: 'Manrope-Regular',
        fontSize: 16,
        fontWeight: '400',
        color: colors.borderColourPurple,
    },
    dummyTxt: {
        fontFamily: 'Manrope-Regular',
        fontSize: 14,
        fontWeight: '600',
        color: colors.black, lineHeight: 28
    }
});