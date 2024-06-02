import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PilihRekening = () => {
  const [selectedRekening, setSelectedRekening] = useState('123456789');

  const rekeningOptions = [
    { label: '123456789', value: '123456789' },
    { label: '987654321', value: '987654321' },
    { label: '112233445', value: '112233445' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pilih Rekening</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedRekening(value)}
        items={rekeningOptions}
        value={selectedRekening}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 15,
    width: '100%',
    textAlign: 'center',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 15,
    width: '100%',
    textAlign: 'center',
  },
});

export default PilihRekening;
