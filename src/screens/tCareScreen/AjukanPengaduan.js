import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const AjukanPengaduan = () => {
  return (
    <View style={styles.container}>
   
      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.label}>Pilih Rekening*</Text>
          <View style={styles.input}>
            <Text>18123456789</Text>
          </View>
          <View style={styles.dateRow}>
            <View style={styles.dateInput}>
              <Text style={styles.label}>Tanggal Awal</Text>
              <View style={styles.input}>
                <Text>DD/MM/YYYY</Text>
              </View>
            </View>
            <View style={styles.dateInput}>
              <Text style={styles.label}>Tanggal Akhir</Text>
              <View style={styles.input}>
                <Text>DD/MM/YYYY</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.transactionList}>
          <Text style={styles.sectionTitle}>Daftar Transaksi</Text>
          <View style={styles.transactionItem}>
            <LinearGradient
              colors={['#004F65', '#0092BB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.transactionIcon}
            >
              <Text>Icon</Text>
            </LinearGradient>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionText}>Transfer dari Hana Ham...</Text>
              <Text style={styles.transactionDate}>15 Juni 2024 | 17:00:01</Text>
            </View>
            <Text style={styles.amountPositive}>+Rp25.000</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dateInput: {
    flex: 1,
    marginRight: 10,
  },
  transactionList: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionIcon: {
    padding: 10,
    borderRadius: 8,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionDetails: {
    flex: 1,
  },
  transactionText: {
    fontSize: 14,
    color: '#333',
  },
  transactionDate: {
    fontSize: 12,
    color: '#666',
  },
  amountPositive: {
    color: 'green',
  },
});

export default AjukanPengaduan;
