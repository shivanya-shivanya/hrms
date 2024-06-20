import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { colors } from '../../../components/colors';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("FirstOnboarding");
    }, 3000);
   
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../../components/assets/images/splashLogo.png')} style={styles.splashLogo} />
      </View>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greenTheme,
    justifyContent:'center'
  },
  splashLogo: { width: 250, height: 250, resizeMode: 'contain',justifyContent:'center' },
  imgContainer:{alignSelf:'center'}
});