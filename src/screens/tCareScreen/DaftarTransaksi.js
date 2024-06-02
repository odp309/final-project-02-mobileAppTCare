import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DaftarTransaksi = () => {
  const transactions = [
    { description: 'Transfer dari Hana Ham...', amount: '+Rp25.000', date: '15 Juni 2024 | 17:00:01', status: '' },
    { description: 'Transfer ke Hana Ham...', amount: '-Rp17.500', date: '1 Juli 2024 | 16:49:01', status: '' },
    { description: 'Top-Up ke SPY Yovita M...', amount: '-Rp18.500', date: '19 Desember 2024 | 16:49:01', status: '' },
    { description: 'Top-Up ke DNA Yovita M...', amount: '-Rp18.500', date: '19 Desember 2024 | 16:49:01', status: 'Dalam Proses' },
    { description: 'Transfer dari Farididan I...', amount: '-Rp95.000', date: '19 Desember 2024 | 17:00:01', status: '' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Daftar Transaksi</Text>
      <View style={styles.transactionList}>
        {transactions.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <Text style={styles.transactionText}>
              {transaction.description} <Text style={styles.transactionAmount}>{transaction.amount}</Text>
              {transaction.status && <Text style={styles.transactionStatus}> {transaction.status}</Text>}
            </Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  transactionList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  transactionItem: {
    marginBottom: 15,
  },
  transactionText: {
    fontSize: 14,
    color: '#333',
  },
  transactionAmount: {
    fontWeight: 'bold',
    color: '#25C889',  // Change color based on transaction type
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionStatus: {
    fontWeight: 'bold',
    color: '#FF3B30',
  },
});

export default DaftarTransaksi;
