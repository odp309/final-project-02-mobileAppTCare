import { Dimensions, StyleSheet, Text, View } from "react-native";
import usePoppinsFonts from "../theme/fontPoppins";
import { ArrowLeft } from "lucide-react-native";

const windowWidth = Dimensions.get("window").width;

const HeaderComponent = ({ TextHeader, Type, IconColor, TextColor }) => {
  usePoppinsFonts();

  return Type === "withIcon" ? (
    <View style={[styles.headerContainer, styles.headerWithIcon]}>
      <ArrowLeft
        color={IconColor}
        size={22}
        style={{ justifyContent: "center", alignItems: "center" }}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.headerText, { color: TextColor }]}>
          {TextHeader}
        </Text>
      </View>
    </View>
  ) : (
    <View style={[styles.headerContainer, styles.headerWithoutIcon]}>
      <Text style={[styles.headerText, { color: TextColor }]}>
        {TextHeader}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 97,
    alignItems: "center",
    paddingTop: 44,
    paddingHorizontal: 8,
  },
  headerWithIcon: {
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerWithoutIcon: {
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "poppinsSemiBold",
  },
});

export default HeaderComponent;

