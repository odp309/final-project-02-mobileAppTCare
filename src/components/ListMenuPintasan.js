import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: 'QRIS' },
  { id: '2', title: 'E-Waller' },
  { id: '3', title: 'Pembelian' },
  { id: '4', title: 'Lainnya' },
];

const ListMenuPintasan = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
            </TouchableOpacity>
            <Text style={styles.label}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ListMenuPintasan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: '16%',
  },
  list: {
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: 50,
    height:50
  },
  label: {
    marginTop: 5,
    color: '#000',
    textAlign: 'center',
  },
});
