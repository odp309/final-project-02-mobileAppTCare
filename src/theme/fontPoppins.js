import second, {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

const poppinsFonts = () => {
  const [fontsLoaded] = useFonts({
    poppinsThin: Poppins_100Thin,
    poppinsExtraLight: Poppins_200ExtraLight,
    poppinsLight: Poppins_300Light,
    poppinsReguler: Poppins_400Regular,
    poppinsMedium: Poppins_500Medium,
    poppinsSemiBold: Poppins_600SemiBold,
    poppinsBold: Poppins_700Bold,
    poppinsExtraBold: Poppins_800ExtraBold,
    poppinsBlack: Poppins_900Black,
  });

  return fontsLoaded
};

export default poppinsFonts;
