import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CreditCard, FileText, Shield, LockKeyholeOpen, BellRing, ChevronRight } from 'lucide-react-native';

const ListKartudanTransaksional = () => {
  const menuItems = [
    { title: 'Atur Kartu Debit', icon: CreditCard },
    { title: 'Bukti Transaksi', icon: FileText },
    { title: 'Aktivasi Transaksi Kartu', icon: Shield },
    { title: 'Blokir Saldo', icon: LockKeyholeOpen },
    { title: 'Aktivasi SMS Notifikasi', icon: BellRing },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Kartu dan Transaksional</Text>
      {menuItems.map((item, index) => (
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

export default ListKartudanTransaksional;
