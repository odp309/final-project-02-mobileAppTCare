import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { User } from "lucide-react-native";
import ListKartudanTransaksional from "./ListKartudanTransaksional.js";
import ListPengamanAkun from "./ListPengamanAkun.js";
import LogoutModal from "./LogoutModal.js";
import { LinearGradient } from "expo-linear-gradient";
import HeaderComponent from "../../components/HeaderComponent.js";

const SettingsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogoutPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pengaturan</Text>
      </View> */}
      <HeaderComponent TextHeader="Pengaturan" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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

        <ListKartudanTransaksional />
        <ListPengamanAkun />

        <LinearGradient
          colors={["#F24538", "#F56A60"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.logoutButton}
        >
          <TouchableOpacity onPress={handleLogoutPress}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LogoutModal visible={modalVisible} onClose={handleCloseModal} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 15,
  },
  headerContainer: {
    backgroundColor: "#fff",
    paddingVertical: 50,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerText: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
    top: 25,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  profileCard: {
    alignItems: "center",
    marginVertical: 10,
  },
  imageProfileCard: {
    width: "100%",
    height: 100,
  },
  profileOverlay: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    top: 20,
  },
  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E4F9FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    position: "absolute",
    top: -10,
    right: 10,
  },
  pointsIcon: {
    width: 30,
    height: 15,
    marginRight: 5,
  },
  pointsValue: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#006885",
  },
  logoutButton: {
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 50,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
