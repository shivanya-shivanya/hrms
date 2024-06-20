import { Dimensions, StatusBar } from "react-native";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const uiDesignMinCompatibleDeviceWidth = 375; // iPhone SE (2nd Generation)
const uiDesignMinCompatibleDeviceHeight = 667; // iPhone SE (2nd Generation)
const TopSpace = (Platform.OS == 'ios')? (deviceWidth > uiDesignMinCompatibleDeviceWidth) ? (deviceWidth * 0.1) : (deviceWidth * 0.02):StatusBar.currentHeight
export const Spacing={
    topSpace:TopSpace,
    bottomSpace:(deviceWidth > uiDesignMinCompatibleDeviceWidth) ? 20 : 4
}
export { deviceHeight, deviceWidth,TopSpace }