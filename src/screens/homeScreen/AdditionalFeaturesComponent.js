import { LinearGradient } from "expo-linear-gradient";
import {
  Bookmark,
  ChevronDown,
  CreditCard,
  Gift,
  HandCoins,
  Target,
  TrendingUp,
  Users,
  icons,
} from "lucide-react-native";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

windowWidth = Dimensions.get("window").width;

const data = [
  {
    id: "1",
    title: "Investasi",
    icon: TrendingUp,
  },
  {
    id: "2",
    title: "Life Goals",
    icon: Target,
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
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.secondContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <item.icon color="#006885" size={22} />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 11 }}>
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 62,
    alignSelf: "center",
    justifyContent: 'center',
    // backgroundColor: "#FFFFFF",
  },
  secondContainer: {
    width: (windowWidth - 62) / 4,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4F9FF",
    borderRadius: 15
  },
});

export default AdditionalFeaturesComponent;
