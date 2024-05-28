import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CreditCard, FileText, CheckCheck, ShieldX, BellRing, ChevronRight } from 'lucide-react-native';

const ListKartudanTransaksional = () => {
  const menuItems = [
    { title: 'Atur Kartu Debit', icon: CreditCard },
    { title: 'Bukti Transaksi', icon: FileText },
    { title: 'Aktivasi Transaksi Kartu', icon: CheckCheck },
    { title: 'Blokir Saldo', icon: ShieldX },
    { title: 'Aktivasi SMS Notifikasi', icon: BellRing },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Kartu dan Transaksional</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <item.icon size={22} color="#006885" />
          </View>
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
  },
  sectionTitle: {
    fontSize: 15,
    marginBottom: 10,
    color: '#004F65',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  iconContainer: {
    backgroundColor: '#E4F9FF',
    padding: 10,
    borderRadius: 8,
    marginRight: 15,
  },
  itemText: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },
});

export default ListKartudanTransaksional;
