import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LogoutModal = ({ visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Konfirmasi</Text>
          <Text style={styles.modalMessage}>
            Pastikan semua aktivitas Anda telah selesai! Terima kasih telah menggunakan M-Banking BNI. Kami berharap sesi Anda menyenangkan!
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Tidak</Text>
            </TouchableOpacity>
            <LinearGradient
              colors={['#006885', '#0092BB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.button, styles.confirmButton]}
            >
              <Text style={[styles.buttonText, styles.confirmButtonText]}>Ya</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#006885',
  },
  modalMessage: {
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 20,
    color: '#858585',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#006885',
  },
  confirmButton: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#006885',
    fontWeight: 'bold',
    fontSize: 12,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default LogoutModal;
