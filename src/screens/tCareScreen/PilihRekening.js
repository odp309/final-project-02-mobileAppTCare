import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

const PilihRekening = () => {
  const [selectedAccount, setSelectedAccount] = useState('123456789');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const accounts = ['123456789', '987654321', '112233445'];

  const handleSelectAccount = (account) => {
    setSelectedAccount(account);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Pilih Rekening</Text>
      <TouchableOpacity style={styles.input} onPress={() => setDropdownVisible(!dropdownVisible)}>
        <Text>{selectedAccount}</Text>
        <ChevronDown size={20} color="#333" />
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={accounts}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectAccount(item)}>
                <Text style={styles.dropdownItem}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    zIndex: 10, 
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fff',
  },
  dropdown: {
    position: 'absolute',
    top: 60, 
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
    zIndex: 20, 
    elevation: 10, 
  },
  dropdownItem: {
    padding: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default PilihRekening;
