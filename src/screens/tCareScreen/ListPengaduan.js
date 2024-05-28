import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MessageCircleQuestion, FileSearch, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ListPengaduan = () => {
  const menuItems = [
    { title: 'Ajukan Pengaduan', description: 'Ajukan pengaduan untuk masalah atau kendala terkait layanan mobile banking.', icon: MessageCircleQuestion },
    { title: 'Pengaduan Saya', description: 'Pantau status pengaduan masalah atau kendala pada menu ini.', icon: FileSearch },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pengaduan</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => {}}>
          <LinearGradient
            colors={['#004F65', '#0092BB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconContainer}
          >
            <item.icon size={24} color="#fff" />
          </LinearGradient>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
          <ChevronRight size={24} color="#007AFF" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004F65',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 8,
    marginRight: 15,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 10,
    color: '#666',
  },
});

export default ListPengaduan;
