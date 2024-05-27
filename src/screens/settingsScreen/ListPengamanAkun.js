import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { KeyRound, RectangleEllipsis, ChevronRight } from 'lucide-react-native';

const ListPengamanAkun = () => {
  const accountSecurityItems = [
    { title: 'Ubah MPIN', icon: RectangleEllipsis },
    { title: 'Password Transaksi', icon: KeyRound },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pengaman Akun</Text>
      {accountSecurityItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.itemContainer}>
          <item.icon size={24} color="#007AFF" />
          <Text style={styles.itemText}>{item.title}</Text>
          <ChevronRight size={24} color="#007AFF" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemIcon: {
    width: 24,
    height: 24,
  },
  itemText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default ListPengamanAkun;
