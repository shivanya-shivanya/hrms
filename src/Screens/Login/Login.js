import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BackComponent from '../../../components/BackComponent';
import { colors } from '../../../components/colors';
import GreenButton from '../../../components/GreenButton';
import CheckBox from '@react-native-community/checkbox';
import CustomCheckbox from '../../../components/CustomCheckbox';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    console.log("inside handleCheckboxChange")
    setIsChecked(!isChecked);
  };
  return (

    <View style={{
      flex: 1,
      backgroundColor: Colors.white
    }}>

      <View style={styles.subContainer}>
        <BackComponent title="Sign In" onPressBack={handleBack} />
        <Text style={styles.txt}>Sign In now to begin an amazing journey</Text>
      </View>
      <View style={styles.imgContainer}>
        <KeyboardAwareScrollView
          bounces={false}
        >

          <Image source={require('../../../components/assets/images/Logo.png')} style={styles.splashLogo} />
          <Text style={styles.welcomeTxt}>Welcome to "HRMS"</Text>
          <View style={styles.mainContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.emailLabel}>Enter your Unique ID</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholderTextColor={colors.txtColor} placeholder="Enter Your Unique ID" style={styles.input} />
            </View>

          </View>
          <View style={styles.mainContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.emailLabel}>Enter your Password</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Your Password"
                placeholderTextColor={colors.txtColor}
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
          <TouchableOpacity style={styles.forgotContainer} onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }} >
            <GreenButton title="Sign In" onPress={() => navigation.navigate("TabRoutes")} />
          </View>
          <View
            style={styles.checkboxContainer}>
            {/* <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              tintColors={{ true: colors.checkboxActiveColor, false: colors.black }}
              boxType={'square'}
              onTintColor={colors.greenTheme}
              onCheckColor={colors.greenTheme}
              lineWidth={1.0}


            /> */}
            <CustomCheckbox
              isChecked={isChecked}
              onPress={() => handleCheckboxChange()}
            />
            <View>
              <Text style={styles.privacy}>By proceeding, you agree to <Text style={{ color: colors.darkGreen, fontWeight: '500', fontSize: 13, fontFamily: 'Manrope-Regular', textDecorationLine: 'underline', lineHeight: 17.76 }}>Terms & Conditions </Text>
                and <Text style={{ color: colors.darkGreen, fontWeight: '500', fontSize: 13, fontFamily: 'Manrope-Regular', textDecorationLine: 'underline' }}>Privacy Policy</Text></Text>
            </View>
          </View>


        </KeyboardAwareScrollView>
      </View>
    </View >

  )
}

export default Login
const styles = StyleSheet.create({
  subContainer: { backgroundColor: colors.greenTheme, paddingBottom: 38, paddingTop: 10, },
  txt: { paddingHorizontal: 25, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', color: colors.black, paddingVertical: 15 },
  imgContainer: { alignSelf: 'center', paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: colors.white, width: '100%', marginTop: -25, paddingBottom: 180 },
  splashLogo: { width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center' },
  welcomeTxt: { fontFamily: 'Manrope-Regular', fontWeight: '600', fontSize: 20, textAlign: 'center', color: colors.black },
  labelContainer: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    paddingHorizontal: 3,
    marginStart: 30,
    zIndex: 1,
    elevation: 0,
    // shadowColor: "white",
    position: "absolute",
    top: -12,
  },
  inputContainer: {
    borderWidth: Platform.OS === 'ios' ? 0.4 : 0.1,
    borderRadius: Platform.OS === 'ios' ? 10 : 2,
    padding: Platform.OS === 'ios' ? 15 : 3,
    zIndex: 0,
    borderColor: colors.borderColourPurple, width: '90%', alignSelf: 'center'
  },
  emailLabel: { color: colors.borderColourPurple, fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400' },
  mainContainer: { marginTop: 40 },
  mainContainer2: { marginTop: 30 },
  input: { paddingHorizontal: Platform.OS === 'ios' ? 5 : 14, color: colors.txtColor, fontFamily: 'Manrope-Regular', fontWeight: '400', justifyContent: "center" },
  eyeIcon: { width: 20, height: 20, resizeMode: 'contain' },
  eyeContainer: { position: 'absolute', right: 25, top: 17 },
  forgot: { fontFamily: 'Manrope-Regular', fontSize: 14, fontWeight: '400', textAlign: 'right', paddingRight: 20, paddingTop: 10, color: colors.borderColourPurple },
  privacy: { fontFamily: 'Manrope-Regular', fontWeight: '400', fontSize: 13, lineHeight: 17.7, paddingTop: 5, color: colors.black, letterSpacing: 0.2 },
  checkboxContainer: {
    flexDirection: 'row', width: '78%', alignSelf: 'flex-start', marginLeft: 28, marginTop: 15
  }
});