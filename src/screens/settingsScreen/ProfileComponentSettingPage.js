import { User } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfileComponent = () => {
  return (
    <View style={styles.profileCard}>
      <Image
        source={require("../../../assets/images/profilebg.png")}
        style={styles.imageProfileCard}
        resizeMode="cover"
      />
      <View style={styles.profileOverlay}>
        <View style={styles.profileLeft}>
          <View style={styles.iconContainer}>
            <User size={28} color="#006885" />
          </View>
          <Text style={styles.profileNameText}>Yovita Wardani</Text>
        </View>
        <View style={styles.pointsContainer}>
          <Image
            source={require("../../../assets/images/poin+.png")}
            style={styles.pointsIcon}
            resizeMode="contain"
          />
          <Text style={styles.pointsValue}>2.701</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  imageProfileCard: {
    borderRadius: 10,
    width: "100%",
  },
  profileOverlay: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    paddingVertical: 5,
  },
  iconContainer: {
    backgroundColor: "#E4F9FF",
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  profileNameText: {
    fontSize: 15,
    fontFamily: "poppinsSemiBold",
    color: "#FFFFFF",
    marginLeft: 10,
  },
  pointsContainer: {
    flexDirection: "row",
    alignSelf: 'flex-start',
    height: 25,
    backgroundColor: "#E4F9FF",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 20,
  },
  pointsIcon: {
    width: 30,
    height: 15,
    marginRight: 5,
  },
  pointsValue: {
    fontSize: 10,
    fontFamily: 'poppinsMedium',
    color: "#006885",
  },
});

export default ProfileComponent;
