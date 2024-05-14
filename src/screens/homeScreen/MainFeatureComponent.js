import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowRightLeft,
  ReceiptText,
  ShoppingCart,
  Wallet,
} from "lucide-react-native";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";

windowWidth = Dimensions.get("window").width;

const data = [
  {
    id: "1",
    title: "Transfer",
    icon: ArrowRightLeft,
    colors: ["#F15A22", "#F37142"],
  },
  { id: "2", title: "E-Wallet", icon: Wallet, colors: ["#2096F9", "#135993"] },
  {
    id: "3",
    title: "Pembayaran",
    icon: ReceiptText,
    colors: ["#7965F7", "#473B91"],
  },
  {
    id: "4",
    title: "Pembelian",
    icon: ShoppingCart,
    colors: ["#006885", "#007DA0"],
  },
];

const MainFeatureComponent = () => {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.secondContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <LinearGradient
                colors={item.colors}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
              <item.icon color="#FFFFFF" size={22} />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 11 }}>
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
    width: windowWidth - 32,
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 23,
    paddingVertical: 14,
  },
  secondContainer: {
    width: (windowWidth - 78) / 4,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    borderRadius: 15,
    left: 0,
    right: 0,
    top: 0,
    height: 50,
    height: 50,
  },
});

export default MainFeatureComponent;
