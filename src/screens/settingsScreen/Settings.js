import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native';
import { User } from 'lucide-react-native';
import ListKartudanTransaksional from './ListKartudanTransaksional.js';
import ListPengamanAkun from './ListPengamanAkun.js';
import LogoutModal from './LogoutModal.js';

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
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Pengaturan</Text>
      </View>
      <View style={styles.profileCard}>
        <Image
          source={require("../../../assets/images/profilebg.png")}
          style={styles.imageProfileCard}
          resizeMode="cover"
        />
        <View style={styles.profileOverlay}>
          <User size={40} color="#fff" style={styles.userIcon} />
          <Text style={styles.profileNameText}>Yovita Wardani</Text>
          <View style={styles.pointsContainer}>
            <Image
              source={require("../../../assets/images/poin+.png")}
              style={styles.pointsIcon}
            />
            <Text style={styles.pointsValue}>2,701</Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <ListKartudanTransaksional />
        <ListPengamanAkun />
      </ScrollView>
      <Button title="Logout" onPress={handleLogoutPress} />

      <LogoutModal visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#fff',
    paddingVertical: 50,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    top: 20,
  },
  profileCard: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imageProfileCard: {
    width: '100%',
    height: 100,
  },
  profileOverlay: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    top: 20,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    marginRight: 10,
  },
  profileNameText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  pointsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SettingsScreen;