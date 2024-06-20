import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../components/colors';


export default function Settings() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="Account Setting" />
            <View style={styles.imgContainer}>
                <View style={styles.viewConatiner}>
                    <TouchableOpacity style={[styles.subContainer, { borderLeftColor: "#FFD950"}]} onPress={() => navigation.navigate("ChangePassword")} >
                        <View style={{ marginRight: 10, alignItems: 'center' }}>
                            <Image source={require('../../../components/assets/images/change.png')} style={styles.abtIcon} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.content}>Change Password</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                            <Image source={require('../../../components/assets/images/chevron-right.png')} style={styles.rightIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.subContainer, { borderLeftColor: "#FFD950"}]} onPress={() => navigation.navigate("Settings")} >
                        <View style={{ marginRight: 10, alignItems: 'center' }}>
                            <Image source={require('../../../components/assets/images/change.png')} style={styles.abtIcon} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.content}>Notifications</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                            <Switch
                                trackColor={{ false: '#767577', true: colors.greenTheme }}
                                thumbColor={isEnabled ? colors.white : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    imgContainer: {
        flex: 1, alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        backgroundColor: '#FAFAFA',
        width: '100%', marginTop: -25,
    },
    viewConatiner: { alignSelf: 'center', paddingTop: 15 },
    loanImg: { width: Dimensions.get("screen").width - 30, height: 100, resizeMode: 'contain' },
    subContainer: { width: '92%', alignSelf: 'center', borderLeftWidth: 4, borderLeftColor: "#81DEFF", padding: 12, borderRadius: 5, backgroundColor: colors.white, marginTop: 20, flexDirection: "row", elevation: 2, marginVertical: 2 },
    content: { fontFamily: 'Manrope-Regular', fontSize: 16, fontWeight: '400', color: colors.borderColourPurple },
    rightIcon: { width: 22, height: 22, resizeMode: 'contain' },
    abtIcon: { width: 40, height: 40, resizeMode: 'contain' }
});