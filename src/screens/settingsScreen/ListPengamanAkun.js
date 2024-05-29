import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { KeyRound, RectangleEllipsis, ChevronRight } from "lucide-react-native";

const ListPengamanAkun = () => {
  const accountSecurityItems = [
    { title: "Ubah MPIN", icon: RectangleEllipsis },
    { title: "Password Transaksi", icon: KeyRound },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pengaman Akun</Text>
      {accountSecurityItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.itemContainer,
            index !== accountSecurityItems.length - 1 && { paddingBottom: 16 },
          ]}
        >
          <View style={styles.iconContainer}>
            <item.icon size={20} color="#006885" />
          </View>
          <Text style={styles.itemText}>{item.title}</Text>
          <ChevronRight size={24} color="#007DA0" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 23,
  },
  sectionTitle: {
    fontSize: 15,
    marginBottom: 17,
    color: "#004F65",
    fontFamily: "poppinsSemiBold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#E4F9FF",
    padding: 9,
    borderRadius: 10,
    marginRight: 26,
  },
  itemText: {
    flex: 1,
    fontSize: 13,
    color: "#333",
    fontFamily: "poppinsMedium",
  },
});

export default ListPengamanAkun;
