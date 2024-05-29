import { StyleSheet, Text, View } from "react-native";

const HeaderComponent = ({ TextHeader }) => {
  return (
    <View style={styles.headerContainer}>
      <Text>{TextHeader}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 97,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
  },
});

export default HeaderComponent;
