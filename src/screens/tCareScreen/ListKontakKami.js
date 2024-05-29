import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { PhoneCall, MessageCircle, Mail, Instagram, Twitter, ChevronRight } from 'lucide-react-native';

const ListKontakKami = () => {
  const contactItems = [
    { title: '1500046', description: 'Layanan Telepon', icon: PhoneCall, url: 'tel:1500046' },
    { title: '0821 30500046', description: 'Layanan SMS', icon: MessageCircle, url: 'sms:082130500046' },
    { title: 'bnicall.bni.co.id', description: 'Email', icon: Mail, url: 'mailto:bnicall.bni.co.id' },
    { title: '@bni_46', description: 'Instagram', icon: Instagram, url: 'https://instagram.com/bni_46' },
    { title: '@BNICustomerCare', description: 'Twitter', icon: Twitter, url: 'https://twitter.com/BNICustomerCare' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Kontak Kami</Text>
      {contactItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.contactCard} onPress={() => Linking.openURL(item.url)}>
          <item.icon size={24} color="#006885" />
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#006885',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  contactDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ListKontakKami;