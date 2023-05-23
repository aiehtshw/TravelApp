import tr from "../utils/languages/locales/tr";
import en from "../utils/languages/locales/en";
import { Dimensions, Platform } from "react-native";

export const Languages = Object.assign({}, { tr,en });
export const DEFAULT_LANGUAGE = 'tr';


const HEIGHT_SCREEN = Dimensions.get('window').height;
const WIDTH_SCREEN = Dimensions.get('window').width;
const OS = Platform.OS;
export const Devices = {
  OS,
  height: HEIGHT_SCREEN,
  width: WIDTH_SCREEN,
}

export const HOME_SCREEN_ICON_SIZE = Devices.width/4
