import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import NavBarWithBackIcon from '../../../components/NavBarWithBackIcon';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../components/colors';
import GreenButton from '../../../components/GreenButton';

export default function ChangePassword() {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <View style={styles.container}>
            <NavBarWithBackIcon title="Change Password" />
            <View style={styles.imgContainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.emailLabel}>Old Password</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Old Password"
                            style={styles.input}
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeContainer}
                            onPress={togglePasswordVisibility}
                        >
                            <Image
                                source={
                                    showPassword
                                        ? require('../../../components/assets/images/eye.png')
                                        : require('../../../components/assets/images/eye-off.png')
                                }
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.emailLabel}>Create New Password</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Create New Password"
                            style={styles.input}
                            secureTextEntry={!showNewPassword}
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeContainer}
                            onPress={toggleNewPasswordVisibility}
                        >
                            <Image
                                source={
                                    showNewPassword
                                        ? require('../../../components/assets/images/eye.png')
                                        : require('../../../components/assets/images/eye-off.png')
                                }
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.emailLabel}>Confirm Password</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Confirm Password"
                            style={styles.input}
                            secureTextEntry={!showConfirmPassword}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeContainer}
                            onPress={toggleConfirmPasswordVisibility}
                        >
                            <Image
                                source={
                                    showConfirmPassword
                                        ? require('../../../components/assets/images/eye.png')
                                        : require('../../../components/assets/images/eye-off.png')
                                }
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 50 }} >
                    <GreenButton title="Update Password"/>
                </View>
            </View>
        </View>
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
    labelContainer: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        paddingHorizontal: 3,
        marginStart: 30,
        zIndex: 1,
        elevation: 0,
        position: 'absolute',
        top: -12,
    },
    inputContainer: {
        borderWidth: Platform.OS === 'ios' ? 0.4 : 0.1,
        borderRadius: Platform.OS === 'ios' ? 10 : 2,
        padding: Platform.OS === 'ios' ? 5 : 3,
        zIndex: 0,
        borderColor: colors.borderColourPurple,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailLabel: {
        color: colors.borderColourPurple,
        fontFamily: 'Manrope-Regular',
        fontSize: 14,
        fontWeight: '400',
    },
    input: {
        paddingHorizontal: 14,
        color: colors.txtColor,
        fontFamily: 'Manrope-Regular',
        fontWeight: '400',
        flex: 1,
    },
    eyeIcon: { width: 20, height: 20, resizeMode: 'contain',marginRight:5 },
    eyeContainer: { padding: 10 },
    mainContainer: { marginTop: 30 },
});
