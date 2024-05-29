import { BellDot, User } from "lucide-react-native";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
  processColor,
} from "react-native";
import usePoppinsFonts from "../../theme/fontPoppins";

windowWidth = Dimensions.get("window").width;

const ProfileComponent = () => {
  usePoppinsFonts();

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
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 18,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
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
    fontFamily: "poppinsMedium",
    fontSize: 12,
    color: "#FFFFFF",
  },
  namaText: {
    fontFamily: "poppinsSemiBold",
    fontSize: 13,
    color: "#FFFFFF",
  },
  bellContainer: {
    justifyContent: "center",
    marginRight: 3,
  },
});

export default ProfileComponent;
