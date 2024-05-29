import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { PhoneCall, Mail, Inbox, Instagram, Twitter, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ListKontakKami = () => {
  const contactItems = [
    { title: '1500046', description: 'Layanan Telepon', icon: PhoneCall, url: 'tel:1500046' },
    { title: '0821 30500046', description: 'Layanan SMS', icon: Mail, url: 'sms:0821 30500046' },
    { title: 'bnicall.bni.co.id', description: 'Email', icon: Inbox, url: 'mailto:bnicall.bni.co.id' },
    { title: '@bni_46', description: 'Instagram', icon: Instagram, url: 'https://instagram.com/bni_46' },
    { title: '@BNICustomerCare', description: 'Twitter', icon: Twitter, url: 'https://twitter.com/BNICustomerCare' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Kontak Kami</Text>
      {contactItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.contactCard} onPress={() => Linking.openURL(item.url)}>
          <LinearGradient
            colors={['#E4F9FF', '#E4F9FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.iconContainer}
          >
            <item.icon size={24} color="#006885" />
          </LinearGradient>
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactText}>{item.title}</Text>
            <Text style={styles.contactDescription}>{item.description}</Text>
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
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#004F65',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 7,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 8,
    marginRight: 15,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  contactDescription: {
    fontSize: 10,
    color: '#666',
    marginTop: 7,
  },
});

export default ListKontakKami;
