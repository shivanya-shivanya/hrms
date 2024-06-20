import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Platform } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../components/colors';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import ImagePicker from 'react-native-image-crop-picker';
import GreenButton from '../../../components/GreenButton';
import { BlurView } from '@react-native-community/blur';
import { deviceWidth } from '../Utils/DImensions';

export default function PersonalInformation() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImg, setSelectedImg] = useState();

    const chooseImageFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setSelectedImg(image.path);
            setModalVisible(false);
        }).catch(error => console.log(error));
    };
    const chooseImageFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setSelectedImg(image.path);
            setModalVisible(false);
        }).catch(error => console.log(error));
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            {modalVisible && (
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
                <NavBarWithBackIcon title="Personal Information" />
                <View style={styles.imgContainer}>
                    {/* <ScrollView> */}
                    <View>
                        <View style={styles.mainView}>
                            <View>
                                <Image source={selectedImg ? { uri: selectedImg } : require('../../../components/assets/images/dummyProfile.png')} style={styles.profileImage} />
                            </View>
                            <TouchableOpacity style={styles.camera} onPress={() => setModalVisible(!modalVisible)}>
                                <Ionicons name="camera" size={20} color={colors.black} />
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: 15, paddingVertical: 0 }}>
                                <Text style={styles.name}>Kim Jones</Text>
                                <Text style={[styles.text, { paddingTop: 5 }]}>Program Manager, <Text style={styles.profile}>Design & Development </Text></Text>
                                <Text style={[styles.workarea, { paddingTop: 5 }]}>ABC Infotech LLC</Text>
                            </View>
                        </View>
                    </View>
                    {/* <View>
                            <View style={[styles.attContainer, { backgroundColor: '#FCFDFF' }]}>
                                <View>
                                    <Text style={styles.attend}>Demographic Information</Text>
                                </View>
                            </View>
                            <View style={styles.attSubContainer}>
                                <View style={[styles.attSubContent, { paddingBottom: 0, justifyContent: 'center', paddingTop: 13, paddingBottom: 13 }]}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={styles.start}>Country</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>US</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { paddingBottom: 0, justifyContent: 'center', paddingTop: 13, paddingBottom: 13 }]}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Gender</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Female</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { paddingBottom: 0, justifyContent: 'center', paddingTop: 13, paddingBottom: 13 }]}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.start}>Martial Status</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Married</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { paddingBottom: 0, justifyContent: 'center', paddingTop: 13, paddingBottom: 13, borderBottomWidth: 0 }]}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Highest education Level</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Masters</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={[styles.attContainer, { backgroundColor: '#FCFDFF' }]}>
                                <View>
                                    <Text style={styles.attend}>Contact Details</Text>
                                </View>
                            </View>
                            <View style={[styles.attSubContainer, { marginBottom: 15 }]}>
                                <View style={[styles.attSubContent, { paddingBottom: 0, justifyContent: 'center', paddingTop: 13, paddingBottom: 13 }]}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={styles.start}>Contact No</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>+1254 254 152 254</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { paddingBottom: 0, justifyContent: 'center', paddingTop: 13, paddingBottom: 13 }]}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Email Address</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>shaidulm@gmail.com</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { paddingBottom: 0, justifyContent: 'center', paddingTop: 13, paddingBottom: 13 }]}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.start}>Emergency Contact</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>+1254 254 152 254</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { paddingBottom: 0, justifyContent: 'center', paddingTop: 13, paddingBottom: 13, borderBottomWidth: 0 }]}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Official Email</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>shaidulm@gmail.com</Text>
                                    </View>
                                </View>
                            </View>
                        </View> */}
                    <ScrollView>
                        <View style={{
                            backgroundColor: "#ffffff",
                            alignSelf: "center",
                            borderRadius: 20,
                            shadowColor: "#d3d3d3",
                            rowGap: 10,
                            shadowOffset: {
                                width: 0,
                                height: 8,
                            },
                            shadowOpacity: 0.54,
                            shadowRadius: 13.32,
                            elevation: 26,
                            overflow: "hidden",
                            borderWidth: 1,
                            borderColor: colors.white,
                            width: '90%', alignSelf: 'center', marginVertical: 20

                        }}>
                            <View style={styles.attContainer}>
                                <Text style={[styles.attend]}>Personal Information</Text>
                            </View>
                            <View style={styles.attSubContainer}>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={styles.start}>Start Date</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Jan 21, 2019</Text>
                                    </View>
                                </View>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>First Name</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Kim</Text>
                                    </View>
                                </View>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.start}>Last Name</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Jones</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { borderBottomWidth: 0 }]}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Date of Birth</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>April 21, 1987</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: "#ffffff",
                            alignSelf: "center",
                            borderRadius: 20,
                            shadowColor: "#d3d3d3",
                            rowGap: 10,
                            shadowOffset: {
                                width: 0,
                                height: 8,
                            },
                            shadowOpacity: 0.54,
                            shadowRadius: 13.32,
                            elevation: 26,
                            overflow: "hidden",
                            borderWidth: 1,
                            borderColor: colors.white,
                            width: '90%', alignSelf: 'center', marginVertical: 0

                        }}>
                            <View style={styles.attContainer}>
                                <Text style={[styles.attend]}>Demographic Information</Text>
                            </View>
                            <View style={styles.attSubContainer}>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={styles.start}>Country</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>US</Text>
                                    </View>
                                </View>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Gender</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Female</Text>
                                    </View>
                                </View>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.start}>Martial Status</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Married</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { borderBottomWidth: 0 }]}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Highest education Level</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>Masters</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: "#ffffff",
                            alignSelf: "center",
                            borderRadius: 20,
                            shadowColor: "#d3d3d3",
                            rowGap: 10,
                            shadowOffset: {
                                width: 0,
                                height: 8,
                            },
                            shadowOpacity: 0.54,
                            shadowRadius: 13.32,
                            elevation: 26,
                            overflow: "hidden",
                            borderWidth: 1,
                            borderColor: colors.white,
                            width: '90%', alignSelf: 'center', marginVertical: 15

                        }}>
                            <View style={styles.attContainer}>
                                <Text style={[styles.attend]}>Contact Details</Text>
                            </View>
                            <View style={styles.attSubContainer}>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={styles.start}>Contact No</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>+1254 254 152 254</Text>
                                    </View>
                                </View>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Email Address</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>shaidulm@gmail.com</Text>
                                    </View>
                                </View>
                                <View style={styles.attSubContent}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.start}>Emergency Contact</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>+1254 254 152 254</Text>
                                    </View>
                                </View>
                                <View style={[styles.attSubContent, { borderBottomWidth: 0 }]}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.start}>Official Email</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Text style={styles.date}>shaidulm@gmail.com</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {

                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                    <Image source={require('../../../components/assets/images/close.png')} style={styles.closeIcon} />
                                </TouchableOpacity>
                                <Text style={styles.modalText}>Select Image</Text>
                                <View style={{ marginTop: 30, width: '90%' }} >

                                    <GreenButton title="Gallery" onPress={() => chooseImageFromGallery()} />
                                    <View style={{ marginVertical: 20 }}>
                                        <GreenButton title="Camera" onPress={() => chooseImageFromCamera()} />
                                    </View>
                                </View>
                            </View>

                        </View>
                    </Modal>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAFAFA' },
    imgContainer: {
        flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: '#F9F9FA',
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
    profileImage: { width: 90, height: 90, resizeMode: 'cover', marginLeft: 10, borderRadius: 50 },
    workarea: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.txtColor },
    mainView: { flexDirection: 'row', paddingTop: 10, paddingHorizontal: 10 },
    attend: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
    attContainer: {
        backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingTop: 20, paddingBottom: 35, paddingLeft: 20, paddingRight: 20, width: '91%', alignSelf: 'center', marginTop: 20, flexDirection: 'row',
        shadowColor: '#567DF4',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    attSubContainer: { backgroundColor: colors.white, borderRadius: 20, width: Platform.OS === 'android' ? '90%' : '91%', alignSelf: 'center', marginTop: 20, flexDirection: 'column', paddingHorizontal: 22, elevation: 1, paddingBottom: 10, marginTop: -22, borderColor: colors.white },
    currentBalance: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
    start: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.black },
    date: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
    attSubContent: {
        flexDirection: 'row',
        borderBottomColor: colors.txtColor, borderBottomWidth: 0.2,
        paddingBottom: 0
    },
    camera: { position: 'absolute', bottom: 5, left: 90, padding: 4, backgroundColor: colors.white, borderRadius: 50, borderWidth: 0.6 },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        // margin: 20,
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
    modalText: {
        fontFamily: 'Manrope-SemiBold',
        fontWeight: '400',
        fontSize: 16,
        color: colors.black,
        paddingTop: 30,
        textAlign: 'center',
    },
    blur: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
    },
    modalBlur: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
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
    attContainer: {
        paddingHorizontal: "5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 3

    },
    attSubContainer: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'column',
        shadowColor: "#567DF4",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: Platform.OS === 'android' ? 0.48 : 0.2,
        shadowRadius: 6.00,
        elevation: 16,
        paddingBottom: 10,
        paddingHorizontal: "5%",
        zIndex: 2

    },
    attend: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black, paddingTop: 10 },
    attSubContent: {
        flexDirection: 'row',
        borderBottomColor: colors.txtColor, borderBottomWidth: 0.2,
        justifyContent: 'center', paddingTop: 13, paddingBottom: 13
    }
});