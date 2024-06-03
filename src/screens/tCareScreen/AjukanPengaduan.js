import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import GradientHeader from '../../components/GradientHeader';
import FilterRekeningdanTanggal from './FilterRekeningdanTanggal';
import DaftarTransaksi from './DaftarTransaksi';

const AjukanPengaduan = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GradientHeader
        TextHeader="Ajukan Pengaduan"
        Type="withIcon"
        IconColor="#fff"
        TextColor="#fff"
        showBackButton={true}
        onBackPress={() => navigation.navigate('TCare')}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <FilterRekeningdanTanggal />
        <DaftarTransaksi />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 15,
  },
});

export default AjukanPengaduan;