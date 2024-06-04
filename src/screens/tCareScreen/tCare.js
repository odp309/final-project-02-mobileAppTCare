import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ListPengaduan from './ListPengaduan';
import ListKontakKami from './ListKontakKami';
import HeaderComponent from '../../components/HeaderComponent';

const TCare = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent TextHeader="T-Care" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ListPengaduan />
        <ListKontakKami />
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

export default TCare;
