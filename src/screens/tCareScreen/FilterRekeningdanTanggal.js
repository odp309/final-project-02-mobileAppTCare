import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const FilterRekeningdanTanggal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pilih Rekening</Text>
      <TextInput style={styles.input} value="123456789" />
      <View style={styles.dateContainer}>
        <View style={styles.dateInputContainer}>
          <Text style={styles.label}>Tanggal Awal</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY" />
        </View>
        <View style={styles.dateInputContainer}>
          <Text style={styles.label}>Tanggal Akhir</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY" />
        </View>
      </View>
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
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
    color: '#333',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInputContainer: {
    flex: 1,
    marginRight: 10,
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
