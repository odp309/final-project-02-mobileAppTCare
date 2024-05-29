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
        <TouchableOpacity key={index} style={[styles.itemContainer, index !== menuItems.length - 1 && {paddingBottom: 16}]}>
          <View style={styles.iconContainer}>
            <item.icon size={20} color="#006885" />
          </View>
          <Text style={styles.itemText}>{item.title}</Text>
          <ChevronRight size={24} color="#007DA0" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 23,
  },
  sectionTitle: {
    fontSize: 15,
    marginBottom: 17,
    color: '#004F65',
    fontFamily: 'poppinsSemiBold'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#E4F9FF',
    padding: 9,
    borderRadius: 10,
    marginRight: 26,
  },
  itemText: {
    flex: 1,
    fontSize: 13,
    color: '#333',
    fontFamily: 'poppinsMedium'
  },
});

export default ListKartudanTransaksional;
