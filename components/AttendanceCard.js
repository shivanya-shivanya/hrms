import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { colors } from './colors';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";


export default function AttendanceCard() {

    const navigation = useNavigation();
    const data = [
        {
            id: '1',
            inTime: '09:02 AM',
            breakTime: '30Mins',
            outTime: '06:45 PM',
            totalWorkingHrs: '08:00 Hrs',
            totalWorkedHrs: '08:00 Hrs',
            overtimeHrs: '08:00 Hrs',
            totalPay: '405',
            date: "April 21, 2024"
        },
        {
            id: '2',
            inTime: '09:02 AM',
            breakTime: '30Mins',
            outTime: '06:45 PM',
            totalWorkingHrs: '08:00 Hrs',
            totalWorkedHrs: '08:00 Hrs',
            overtimeHrs: '08:00 Hrs',
            totalPay: '405',
            date: "April 22, 2024"
        },

    ];

    const renderItem = (item) => {
        return (
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
                width: '90%', alignSelf: 'center', marginVertical: 10

            }}>
                <View style={styles.attContainer}>
                    <Text style={styles.attend}>Date</Text>
                    <Text style={styles.date}>April 21, 2024</Text>
                </View>


                <View style={styles.attSubContainer}>
                    <View style={{ flexDirection: 'row', marginTop: 3}}>
                        <View>
                            <View style={styles.workingHrsConatiner}>
                                <View style={{ flexDirection: 'row', width: '30%', }}>
                                    <Text style={styles.start}>In Time</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.start}>Break Time</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.start}>Out Time</Text>
                                </View>
                            </View>
                            <View style={[styles.workingHrsConatiner, { borderBottomWidth: 0 }]}>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.time}>{item?.item?.inTime}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '30%' }}>
                                    <Text style={styles.time}>{item?.item?.breakTime}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '20%' }}>
                                    <Text style={styles.time}>{item?.item?.outTime}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("BreakScreen")} >
                                <Text style={styles.addBreak}>View / Add Break</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>


                <View style={styles.attSubContent}>
                    <View style={styles.workingHrsConatiner}>
                        <View style={{ flexDirection: 'row', width: '30%' }}>
                            <Text style={styles.start}>Total Working Hrs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '30%' }}>
                            <Text style={[styles.start,{textAlign:'center'}]}>Total Worked Hrs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '20%' }}>
                            <Text style={[styles.start,{textAlign:'right'}]}>Overtime Hrs</Text>
                        </View>
                    </View>
                    <View style={[styles.workingHrsConatiner, { borderBottomWidth: 0, marginBottom: 10 }]}>
                        <View style={{ flexDirection: 'row', width: '30%' }}>
                            <Text style={styles.time}>{item?.item?.totalWorkingHrs}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '30%' }}>
                            <Text style={styles.time}>{item?.item?.totalWorkedHrs}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '20%' }}>
                            <Text style={styles.time}>{item?.item?.overtimeHrs}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.payContainer}>
                    <View style={{ paddingHorizontal: 5 }}>
                        <Text style={styles.emailLabel}>Total Pay:</Text>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 15 }}>
                        <Text style={styles.amt}>$ {item?.item?.totalPay}</Text>
                    </View>
                </View>

            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.key}
            />
            {/* <ScrollView
                style={styles.imgContainer}
                contentContainerStyle={{
                    backgroundColor: "#f7f8fa",
                    paddingHorizontal: "5%",
                    rowGap: 15,
                    paddingVertical: 20
                }}
            >
            </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#FAFAFA' },
    imgContainer: {
        alignSelf: 'center', paddingTop: 0, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        width: '100%',
    },
    txtContainer: { paddingHorizontal: 28, paddingVertical: 10 },
    name: {
        fontFamily: 'Manrope-Regular',
        fontSize: 20,
        fontWeight: '400',
        color: colors.black,
    },
    text: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: colors.black },
    attSubContent: {
        paddingHorizontal: "5%",
        backgroundColor: colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: Platform.OS === 'android' ?  0.58 : 0.19,
        shadowRadius: 16.00,
        elevation: 24,
        zIndex: 4,
        paddingBottom: 20



    },
    subConatiner: {
        flexDirection: 'row', width: '90%', alignSelf: 'center',
        paddingBottom: 10, justifyContent: 'center', borderBottomWidth: 0.4, borderBottomColor: colors.txtColor, paddingTop: 8
    },
    start: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.black },
    time: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
    timeContainer: { paddingHorizontal: 18, paddingVertical: 10, flexDirection: 'row' },
    labelContainer: {
        backgroundColor: "white",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        marginStart: 33,
        zIndex: 1,
        elevation: 0,
        position: "absolute",
        top: -12,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 15,
        zIndex: 0,
        borderColor: '#22215B29', marginLeft: 25,
        width: '58%', flexDirection: 'row',
    },
    emailLabel: { color: colors.black, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
    inputText: { color: colors.txtColor, fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', justifyContent: 'center', alignSelf: 'center' },
    calander: { width: 25, height: 25, resizeMode: 'contain' },
    applyBtn: { backgroundColor: colors.greenTheme, borderRadius: 10, paddingHorizontal: 38, paddingVertical: 15 },
    applyText: { color: colors.white, fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400' },
    workingHrsConatiner: {
        flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: 'space-between',
        paddingBottom: 10, borderBottomWidth: 0.4, borderBottomColor: colors.txtColor, paddingTop: 8
    },
    dateText: { color: colors.black, fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500' },
    attContainer: {
        paddingHorizontal: "5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 8

    },
    attend: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
    date: { fontFamily: 'Manrope-Regular', fontSize: 13, fontWeight: '400', color: colors.txtColor },
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
        shadowOpacity: 0.48,
        shadowRadius:Platform.OS === 'android' ?  6.00 : 2.90,
        elevation: 16,
        paddingBottom: 30,
        paddingHorizontal: "5%",
        zIndex: 2

    },
    addBreak: { fontFamily: 'Manrope-SemiBold', fontSize: 10, fontWeight: '500', color: colors.black, textAlign: 'center', paddingTop: 8, textDecorationLine: 'underline' },
    amt: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '600', color: colors.black },
    payContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        borderRadius: 15,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: "3%",
        alignSelf: 'center',
        marginTop: -20,
        zIndex: 5,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity:Platform.OS === 'android' ?  0.58 : 0.19,
        shadowRadius: 16.00,
        elevation: 24,

    },
    closeButton: { position: 'absolute', top: 10, right: 20, zIndex: 1 },
    closeIcon: { width: 25, height: 25, resizeMode: 'contain', tintColor: colors.black },
    dropdown: {
        height: 50,
        borderColor: colors.greenTheme,
        borderWidth: 0.5,
        borderRadius: 8,
        // paddingHorizontal: 15,
        // paddingVertical: 20,
        width: '45%',
    },
    placeholderStyle: {
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular',
        fontWeight: '400',
        fontSize: 12,
    },
    selectedTextStyle: {
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular', fontSize: 12,
        fontWeight: '400', paddingHorizontal: 20
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: '#9CA3AF',
        justifyContent: 'center',
        marginRight: 10
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    modalContainer: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center', paddingTop: 50 },
    modalContent: { backgroundColor: '#fff', width: '90%', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 10 },
});
