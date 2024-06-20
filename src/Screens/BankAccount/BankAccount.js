import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList, Modal } from 'react-native';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../components/colors';
import { moderateScale } from 'react-native-size-matters';
import SmallWhiteButton from '../../../components/SmallWhiteButton';
import SmallGreenButton from '../../../components/SmallGreenButton';
import { deviceWidth } from '../Utils/DImensions';
import { BlurView } from '@react-native-community/blur';

export default function BankAccount() {
    const navigation = useNavigation();

    const data = [
        { key: '1', bank: 'DBS', accountNumber: '•••••604',desc:'Primary Account' },
        { key: '2', bank: 'HSBC', accountNumber: '•••••604' ,desc: ''},
    ];

    const [selectedItem, setSelectedItem] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [primayAcc, setPrimaryAcc] = useState(false);

    const renderItem = ({ item }) => (
        <View
            style={[
                styles.subContainer,
                { borderLeftColor: '#FF9CC8', flexDirection: 'row', justifyContent: 'space-between', width: '93%', backgroundColor: colors.white, marginTop: 18 }
            ]}

        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 10, alignItems: 'center' }}>
                    <Image source={require('../../../components/assets/images/bankAcc.png')} style={styles.abtIcon} />
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.content}>{item.bank}  <Text style={[styles.content,{fontWeight:'700'}]}>{item?.desc != '' && (item?.desc)}</Text></Text>
                    <Text style={styles.content}>{item.accountNumber}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <View style={{ marginRight: 10 }}>
                        <Image source={require('../../../components/assets/images/delete.png')} style={styles.delIcon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('EditBankAccount')}>
                    <View style={{ marginRight: 5 }}>
                        <Image source={require('../../../components/assets/images/notes.png')} style={styles.rightIcon} />
                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
                    {selectedItem === item.key ? (
                        <TouchableOpacity>
                            <Image source={require('../../../components/assets/images/active.png')} style={styles.rightIcon} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => handleItemPress(item)}>
                            <Image source={require('../../../components/assets/images/inactive.png')} style={styles.rightIcon} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );


    const handleItemPress = (item) => {
        if (selectedItem === item.key) {
            setSelectedItem(null);
            setShowPopup(true);
        } else {
            setSelectedItem(item.key);
            setShowPopup(true);
        }
    };
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
        setShowPopup(false);
    };

    return (
        <>
            {(modalVisible || showPopup) && (
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
                <NavBarWithBackIcon title="Bank Account" showRightContent />
                <View style={styles.imgContainer}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                    />
                </View>
            </View>
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
                        <Text style={styles.modalText}>Delete Account</Text>
                        <View style={styles.successContainer}>
                            <Image source={require('../../../components/assets/images/del.png')} style={styles.successImg} />
                        </View>
                        <View style={{ justifyContent: 'center', alignSelf: 'center', width: Platform.OS === 'android' ? '65%' : '70%' }}>
                            <Text style={styles.successtext}>Are you sure you want to delete your bank account</Text>
                        </View>
                        <View style={{ marginTop: 30, width: '93%', marginBottom: 40, flexDirection: 'row', justifyContent: 'space-around' }} >

                            <SmallWhiteButton title="Cancel" onPress={() => setModalVisible(false)} />
                            <SmallGreenButton title="confirm" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>

                </View>
            </Modal>

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
                        <Text style={styles.modalText}>Primary Account</Text>
                        <View style={styles.successContainer}>
                            <Image source={require('../../../components/assets/images/primary.png')} style={styles.successImg} />
                        </View>
                        <View style={{ justifyContent: 'center', alignSelf: 'center', width: Platform.OS === 'android' ? '65%' : '68%' }}>
                            <Text style={styles.successtext}>Are you sure you want to change your default bank account</Text>
                        </View>
                        <View style={{ marginTop: 30, width: '93%', marginBottom: 40, flexDirection: 'row', justifyContent: 'space-around' }} >

                            <SmallWhiteButton title="Cancel" onPress={() => setShowPopup(false)} />
                            <SmallGreenButton title="confirm" onPress={() => {setShowPopup(false); setPrimaryAcc(true)}} />
                        </View>
                    </View>

                </View>
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    imgContainer: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        width: '100%',
        marginTop: -25,
    },
    subContainer: { paddingTop: 15, width: '92%', alignSelf: 'center', flexDirection: 'row', borderLeftWidth: 4, borderLeftColor: "#81DEFF", padding: 12, borderRadius: 5, backgroundColor: colors.white, elevation: 0 },
    content: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '500', color: colors.borderColourPurple },
    rightIcon: { width: 22, height: 22, resizeMode: 'contain' },
    abtIcon: { width: 40, height: 40, resizeMode: 'contain' },
    delIcon: { width: moderateScale(18), height: moderateScale(18), resizeMode: 'contain' },
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
