import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { colors } from './colors';

export default function ProfileCard() {
    return (
        <View>
            <ScrollView
                style={styles.imgContainer}
                contentContainerStyle={{
                    backgroundColor: "#f7f8fa",
                    paddingHorizontal: "5%",
                    rowGap: 15,
                    paddingVertical: 20
                }}
            >
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
                    width: '100%', alignSelf: 'center', marginVertical: 10

                }}>
                    <View style={styles.attContainer}>
                        <Text style={styles.attend}>Personal Information</Text>
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
                                <Text style={styles.start}>Legal Employer</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <Text style={styles.date}>ABC Infotech LLC</Text>
                            </View>
                        </View>
                        <View style={styles.attSubContent}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.start}>Business Unit</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <Text style={styles.date}>Design & Development</Text>
                            </View>
                        </View>
                        <View style={styles.attSubContent}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.start}>Job Code</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <Text style={styles.date}>675E45</Text>
                            </View>
                        </View>
                        <View style={styles.attSubContent}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.start}>Total Working hrs</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <Text style={styles.date}>48 hrs/ Week</Text>
                            </View>
                        </View>
                        <View style={styles.attSubContent}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.start}>Pay Per Hr</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <Text style={styles.date}>45 USD /H</Text>
                            </View>
                        </View>
                        <View style={styles.attSubContent}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.start}>Working Hrs</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <Text style={styles.date}>9:00 AM to 6:00 PM EST</Text>
                            </View>
                        </View>
                        <View style={styles.attSubContent}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.start}>Reporting Manager</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <Text style={styles.date}>Linda Jin</Text>
                            </View>
                        </View>
                        <View style={[styles.attSubContent, { borderBottomWidth: 0, paddingBottom: 0 }]}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.start}>Probation Period</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                <Text style={styles.date}>N/A</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        alignSelf: 'center', paddingTop: 0, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        width: '100%',
    },
    attContainer: {
        paddingHorizontal: "5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 8

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
        shadowOpacity:Platform.OS === 'android' ?  0.48 : 0.2,
        shadowRadius: 6.00,
        elevation: 16,
        paddingBottom: 30,
        paddingHorizontal: "5%",
        zIndex: 2

    },
    attend: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '500', color: colors.black },
    attSubContent: {
        flexDirection: 'row',
        borderBottomColor: colors.txtColor, borderBottomWidth: 0.2,
        justifyContent: 'center', paddingTop: 13, paddingBottom: 13
    }
});