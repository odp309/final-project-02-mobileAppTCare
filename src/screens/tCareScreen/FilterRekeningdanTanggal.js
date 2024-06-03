import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import PilihRekening from './PilihRekening';
import PilihTanggal from './PilihTanggal'; // Adjust the path as needed

const FilterRekeningdanTanggal = () => {
  return (
    <View style={styles.container}>
      <PilihRekening />
      <PilihTanggal />
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20,
    zIndex: 1, // Ensure this component has a lower z-index than the dropdown
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FilterRekeningdanTanggal;