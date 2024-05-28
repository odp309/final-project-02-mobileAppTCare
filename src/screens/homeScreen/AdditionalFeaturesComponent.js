import { Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import {
  Bookmark,
  ChevronDown,
  CreditCard,
  Gift,
  Goal,
  HandCoins,
  Target,
  TrendingUp,
  Users,
  icons,
} from "lucide-react-native";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import usePoppinsFonts from "../../theme/fontPoppins";

windowWidth = Dimensions.get("window").width;

const data1 = [
  {
    id: "1",
    title: "Investasi",
    icon: TrendingUp,
  },
  {
    id: "2",
    title: "Life Goals",
    icon: Goal,
  },
  {
    id: "3",
    title: "Digital Loan",
    icon: HandCoins,
  },
  {
    id: "4",
    title: "Bookmarks",
    icon: Bookmark,
  },
];

const data2 = [
  {
    id: "5",
    title: "Dikado",
    icon: Gift,
  },
  {
    id: "6",
    title: "Rekeningku",
    icon: Users,
  },
  {
    id: "7",
    title: "My Credit Card",
    icon: CreditCard,
  },
  {
    id: "8",
    title: "Lainnya",
    icon: ChevronDown,
  },
];

const AdditionalFeaturesComponent = () => {
  usePoppinsFonts();

  return (
    <View style={styles.container}>
      <FlatList
        data={data1}
        renderItem={({ item }) => (
          <View style={styles.secondContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <item.icon color="#006885" size={22} />
            </TouchableOpacity>
            <Text style={{ fontFamily: "poppinsMedium", fontSize: 11 }}>
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
      <FlatList
        data={data2}
        renderItem={({ item }) => (
          <View style={styles.secondContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <item.icon color="#006885" size={22} />
            </TouchableOpacity>
            <Text style={{ fontFamily: "poppinsMedium", fontSize: 11 }}>
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingHorizontal: 16,
    alignSelf: "center",
  },
  secondContainer: {
    width: (windowWidth - 32) / 4,
    alignItems: "center",
    paddingBottom: 15,
    gap: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4F9FF",
    borderRadius: 15,
  },
});

export default AdditionalFeaturesComponent;
