import { StyleSheet, Text, View } from "react-native";
import usePoppinsFonts from "../theme/fontPoppins";

const HeaderComponent = ({ TextHeader }) => {
  usePoppinsFonts();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{TextHeader}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 97,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
  },
  headerText: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
    fontFamily: "poppinsSemiBold",
    paddingTop: 44,
  },
});

export default HeaderComponent;
