import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ListPengaduan from './ListPengaduan';
import ListKontakKami from './ListKontakKami';

const TCare = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>T-Care</Text>
      </View>
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
  headerContainer: {
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  scrollViewContent: {
    padding: 15,
  },
});

export default TCare;