// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../src/Screens/Splash/Splash';
import Login from '../src/Screens/Login/Login';
import FirstOnboarding from '../src/Screens/FirstOnboarding/FirstOnboarding';
import SecondOnboarding from '../src/Screens/SecondOnboarding/SecondOnboarding';
import ThirdOnboarding from '../src/Screens/ThirdOnboarding/ThirdOnboarding';
import ForgotPassword from '../src/Screens/ForgotPassword/ForgotPassword';
import OtpScreen from '../src/Screens/OtpScreen/OtpScreen';
import ResetPassword from '../src/Screens/ResetPassword/ResetPassword';
import TabRoutes from './TabRoutes';
import About from '../src/Screens/About/About';
import Terms from '../src/Screens/Terms/Terms';
import PrivacyPolicy from '../src/Screens/PrivacyPolicy/PrivacyPolicy';
import Notification from '../src/Screens/Notification/Notification';
import EmploymentInfo from '../src/Screens/EmploymentInfo/EmploymentInfo';
import AttendanceManagement from '../src/Screens/AttendanceManagement/AttendanceManagement';
import BreakScreen from '../src/Screens/BreakScreen/BreakScreen';
import PayRollManagement from '../src/Screens/PayRollManagement/PayRollManagement';
import PayRollInfo from '../src/Screens/PayRollInfo/PayRollInfo';
import PaySlip from '../src/Screens/PaySlip/PaySlip';
import Leaves from '../src/Screens/Leaves/Leaves';
import LeavePolicy from '../src/Screens/LeavePolicy/LeavePolicy';
import PersonalInformation from '../src/Screens/PersonalInfomation/PersonalInfomation';
import Settings from '../src/Screens/Settings/Settings';
import ChangePassword from '../src/Screens/ChangePassword/ChangePassword';
import BankAccount from '../src/Screens/BankAccount/BankAccount';
import AddBankaccount from '../src/Screens/AddBankAccount/AddBankAccount';
import EarlyWAges from '../src/Screens/EarlyWages/EarlyWages';
import ViewAttendance from '../src/Screens/ViewAttendance/ViewAttendance';
import EditBankAccount from '../src/Screens/EditBankAccount/EditBankAccount';
import WorkSummary from '../src/Screens/WorkSummary/WorkSummary';



const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="FirstOnboarding" component={FirstOnboarding} options={{ headerShown: false }} />
      <Stack.Screen name="SecondOnboarding" component={SecondOnboarding} options={{ headerShown: false }} />
      <Stack.Screen name="ThirdOnboarding" component={ThirdOnboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="TabRoutes" component={TabRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
      <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="EmploymentInfo" component={EmploymentInfo} options={{ headerShown: false }} />
      <Stack.Screen name="AttendanceManagement" component={AttendanceManagement} options={{ headerShown: false }} />
      <Stack.Screen name="BreakScreen" component={BreakScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PayRollManagement" component={PayRollManagement} options={{ headerShown: false }} />
      <Stack.Screen name="PayRollInfo" component={PayRollInfo} options={{ headerShown: false }} />
      <Stack.Screen name="PaySlip" component={PaySlip} options={{ headerShown: false }} />
      <Stack.Screen name="Leaves" component={Leaves} options={{ headerShown: false }} />
      <Stack.Screen name="LeavePolicy" component={LeavePolicy} options={{ headerShown: false }} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
      <Stack.Screen name="BankAccount" component={BankAccount} options={{ headerShown: false }} />
      <Stack.Screen name="AddBankaccount" component={AddBankaccount} options={{ headerShown: false }} />
      <Stack.Screen name="EarlyWAges" component={EarlyWAges} options={{ headerShown: false }} />
      <Stack.Screen name="ViewAttendance" component={ViewAttendance} options={{ headerShown: false }} />
      <Stack.Screen name="EditBankAccount" component={EditBankAccount} options={{ headerShown: false }} />
      <Stack.Screen name="WorkSummary" component={WorkSummary} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Route;