import { View, Text, SafeAreaView, LogBox, StatusBar } from 'react-native'
import React from 'react'
import Route from './Navigation/Route'
import { FocusAwareStatusBar } from './components/FocusAwareStatusBar';
import { NavigationContainer } from '@react-navigation/native';
import { deviceHeight, deviceWidth } from './src/Screens/Utils/DImensions';

const App = () => {

  LogBox.ignoreAllLogs();
  return (
    <>

      <View style={{ flex: 1}}>
        <NavigationContainer>
          <FocusAwareStatusBar barStyle={"light-content"} backgroundColor={'transparent'} translucent={true} />
          <Route />
        </NavigationContainer>
      </View>
    </>
  )
}

export default App