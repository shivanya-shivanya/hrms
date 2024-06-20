import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Navbar from '../../../components/NavBar';
import { colors } from '../../../components/colors';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';

export default function Notification() {
    const data = [
        {
            id: 1,
            title: 'Leave',
            description: 'HR Approved your Leave Applied on Jan 2.',
            time: '09:00 AM'
        },
        {
            id: 2,
            title: 'Leave',
            description: 'HR Approved your Leave Applied on Jan 2.',
            time: '09:00 AM'
        },
        {
            id: 3,
            title: 'Leave',
            description: 'HR Approved your Leave Applied on Jan 2.',
            time: 'Yesterday'
        },
        {
            id: 4,
            title: 'Leave',
            description: 'HR Approved your Leave Applied on Jan 2.',
            time: 'Yesterday'
        },
        {
            id: 5,
            title: 'Leave',
            description: 'HR Approved your Leave Applied on Jan 2.',
            time: 'Jan 21, 2024'
        },
        {
            id: 6,
            title: 'Leave',
            description: 'HR Approved your Leave Applied on Jan 2.',
            time: 'Jan 21, 2024'
        }
    ];

    const renderItem = (item) => {
        return (
            <View style={[styles.renderContainer, { padding: 10 }]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingHorizontal: 5, }}>
                        <Text style={styles.salary}>{item?.item?.title}</Text>
                    </View>
                    <View style={{ marginLeft: 'auto', justifyContent: 'center' }}>
                        <Text style={styles.verified}>{item?.item?.time}</Text>
                    </View>

                </View>
                <View style={{ paddingHorizontal: 5, paddingVertical: 2 }}>
                    <Text style={styles.timeContent}>{item?.item?.description}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="Notification" />
            <View style={styles.imgContainer}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20, paddingTop: 4 }}
                />
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
    },
    renderContainer: { backgroundColor: colors.white, borderRadius: 10, width: '90%', alignSelf: 'center', marginTop: 18, paddingHorizontal: 15, borderColor: '#22215B29', borderWidth: 1 },
    salary: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.borderColourPurple },
    timeContent: { fontFamily: 'Manrope-SemiBold', fontSize: 12, fontWeight: '400', color: colors.txtColor },
    transfer: { fontFamily: 'Manrope-SemiBold', fontSize: 14, fontWeight: '500', color: '#424242' },
    amount: { fontFamily: 'Manrope-SemiBold', fontSize: 16, fontWeight: '600', color: colors.lightGreen },
    verified: { fontFamily: 'Manrope-Regular', fontSize: 12, fontWeight: '400', color: colors.txtColor },

});