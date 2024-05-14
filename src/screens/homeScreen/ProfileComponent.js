import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { BellDot, User } from "lucide-react-native";
import { Dimensions, StyleSheet, Text, View, processColor } from "react-native";
import AppLoading from "expo-app-loading";

windowWidth = Dimensions.get("window").width;

const ProfileComponent = () => {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userContainer}>
          <User size={24} color="#006885" />
        </View>
        <View>
          <Text style={styles.selamatText}>Selamat Datang,</Text>
          <Text style={styles.namaText}>Yovita Wardani</Text>
        </View>
      </View>
      <View style={styles.bellContainer}>
        <BellDot size={20} color="#FFFFFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14
  },
  userContainer: {
    width: 44,
    height: 44,
    backgroundColor: "#E4F9FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 44,
  },
  selamatText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: '#FFFFFF'
  },
  namaText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 13,
    color: '#FFFFFF'
  },
  bellContainer: {
    justifyContent: "center",
    marginRight: 3,
  },
});

export default ProfileComponent;
