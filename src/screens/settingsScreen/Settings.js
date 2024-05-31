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
import ProfileComponent from "./ProfileComponentSettingPage.js";
import { SecondaryButton } from "../../components/Button.js";

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
      <HeaderComponent TextHeader="Pengaturan"/>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ProfileComponent />
        <ListKartudanTransaksional />
        <ListPengamanAkun />
          
        <SecondaryButton
          onPress={handleLogoutPress}
          text={"Logout"}
          colors={["#F24538", "#F56A60"]}
        />
        <LogoutModal visible={modalVisible} onClose={handleCloseModal} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100,
    paddingHorizontal: 15,
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
