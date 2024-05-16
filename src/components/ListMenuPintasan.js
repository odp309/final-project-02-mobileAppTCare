import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { QrCode, Wallet, ShoppingCart, ChevronDown } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const data = [
  { id: '1', title: 'QRIS', icon: QrCode, colors: ['#CB400D', '#F15A22'] },
  { id: '2', title: 'E-Wallet', icon: Wallet, colors: ['#2096F9', '#135993'] },
  { id: '3', title: 'Pembelian', icon: ShoppingCart, colors: ['#006885', '#007DA0'] },
  { id: '4', title: 'Lainnya', icon: ChevronDown, colors: ['#FF4352', '#BB000F'] },
];

const ListMenuPintasan = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={item.colors}
                style={styles.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <item.icon color="#FFF" size={24} />
              </LinearGradient>
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
    marginHorizontal: 17,
  },
  button: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  buttonGradient: {
    padding: 10,
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    color: '#000',
    textAlign: 'center',
    fontSize: 13
  },
});
