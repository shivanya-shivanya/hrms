import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform } from 'react-native';
import Home from '../src/Screens/Home/Home';
import Transactions from '../src/Screens/Transactions/Transactions';
import Transfer from '../src/Screens/Transfer/Transfer';
import Profile from '../src/Screens/Profile/Profile';
import More from '../src/Screens/More/More';
import { colors } from '../components/colors';

const Tab = createBottomTabNavigator();

const iconMap = {
    Home: require('../components/assets/icons/home.png'),
    Transactions: require('../components/assets/icons/transactions.png'),
    Transfer: require('../components/assets/icons/transfer.png'),
    Profile: require('../components/assets/icons/profile.png'),
    More: require('../components/assets/icons/more.png'),
};

const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const iconName = route.name;
                    return <Image source={iconMap[iconName]} style={{ width: 28, height: 28, tintColor: focused ? colors.greenTheme : colors.txtColor, marginTop:10 }} />;
                },
                tabBarStyle:{borderTopLeftRadius:15,borderTopRightRadius:15,elevation:5,height: Platform.OS === 'android' ? 90 : 110},
                headerShown:false,
                tabBarLabelStyle:{fontFamily:'Manrope-regular',fontWeight:'600',fontSize:12,textAlign:'center', marginBottom:20}
            })}
            tabBarOptions={{
                activeTintColor: colors.greenTheme,
                inactiveTintColor: colors.txtColor,
            }}
            initialRouteName="Home" 
            headerMode="none" 
            
            
            
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Transactions" component={Transactions} />
            <Tab.Screen name="Transfer" component={Transfer} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
    );
};

export default TabRoutes;
