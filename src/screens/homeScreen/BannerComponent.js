import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Container, Tag } from "lucide-react-native";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const DATA = [
  {
    id: "1",
    banner: require("../../../assets/images/Banner1.png"),
  },
  {
    id: "2",
    banner: require("../../../assets/images/Banner2.png"),
  },
  {
    id: "3",
    banner: require("../../../assets/images/Banner1.png"),
  },
  {
    id: "4",
    banner: require("../../../assets/images/Banner2.png"),
  },
];

const windowWidth = Dimensions.get("window").width;

const ImageBanner = ({ item, index }) => {
  return (
    <TouchableOpacity
      style={
        index === DATA.length - 1
          ? styles.lastBannerContainer
          : styles.bannerContainer
      }
      key={index}
    >
      <Image source={item.banner} style={styles.imageBanner} />
    </TouchableOpacity>
  );
};

const BannerComponent = () => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Tag size={12} color="#006885" />
        <Text style={styles.textStyle}>Promo dan Informasi</Text>
      </View>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({ item, index }) => (
          <ImageBanner item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    gap: 8,
  },
  textContainer: {
    paddingLeft: 16,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "Poppins_600SemiBold",
    color: "#333333",
    fontSize: 14,
  },
  bannerContainer: {
    paddingLeft: 16,
  },
  lastBannerContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageBanner: {
    width: 319,
    height: 116,
    resizeMode: "cover",
  },
});

export default BannerComponent;
