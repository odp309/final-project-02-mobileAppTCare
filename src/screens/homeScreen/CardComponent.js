import {
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { Copy, Eye, IterationCcw } from "lucide-react-native";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import poppinsFonts from "../../theme/fontPoppins";

const DATA = [
  { id: 1, saldo: 5000000, noRek: 16035553034, type: "BNI Taplus Muda" },
  { id: 2, saldo: 15000000, noRek: 17035553034, type: "BNI Taplus" },
  { id: 3, saldo: 25000000, noRek: 18035553034, type: "BNI Taplus Pegawai" },
  { id: 4, saldo: 35000000, noRek: 19035553034, type: "BNI Private Bank" },
];

const RenderCard = ({ item, index }) => {
  poppinsFonts();

  const [showBalance, setShowBalance] = useState(false);

  return (
    <View
      style={[
        styles.cardContainer,
        index === DATA.length - 1 && styles.lastCardContainer,
      ]}
    >
      <LinearGradient
        colors={["#004F65", "#0092BB"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
      <View>
        <View style={styles.logoBNIContainer}>
          <Image
            source={require("../../../assets/images/BNI_Splashscreen.png")}
            style={styles.logoBNI}
          />
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "poppinsMedium",
            fontSize: 10,
          }}
        >
          Saldo Rekening
        </Text>
        <View style={styles.balanceContainer}>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "poppinsBold",
              fontSize: 20,
            }}
          >
            Rp
          </Text>
          {showBalance ? (
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "poppinsBold",
                fontSize: 20,
              }}
            >
              {item.saldo}
            </Text>
          ) : (
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "poppinsBold",
                fontSize: 20,
              }}
            >
              ***********
            </Text>
          )}
          <TouchableOpacity>
            <Eye
              size={17}
              color="#FFFFFF"
              style={{ justifyContent: "center" }}
              onPress={() => setShowBalance(!showBalance)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textAndMasterCardContainer}>
        <View>
          <View style={styles.textRekeningAndCopy}>
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "poppinsMedium",
                fontSize: 12,
              }}
            >
              {item.noRek}
            </Text>
            <TouchableOpacity>
              <Copy size={15} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "poppinsMedium",
              fontSize: 10,
            }}
          >
            {item.type}
          </Text>
        </View>
        <Image
          source={require("../../../assets/images/Mastercard-Logo 1.png")}
          style={styles.logoMasterCard}
        />
      </View>
    </View>
  );
};

const CardComponent = () => {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ gap: 13, height: 174 }}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({ item, index }) => (
          <RenderCard item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 317,
    height: 174,
    paddingTop: 17,
    paddingRight: 18,
    paddingBottom: 19,
    paddingLeft: 23,
    justifyContent: "space-between",
    marginLeft: 13,
  },
  lastCardContainer: {
    marginRight: 13,
  },
  background: {
    position: "absolute",
    borderRadius: 10,
    left: 0,
    right: 0,
    top: 0,
    height: 317,
    height: 174,
  },
  logoBNIContainer: {
    alignItems: "flex-end",
  },
  logoBNI: {
    width: 72,
    height: 22,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textRekeningAndCopy: {
    flexDirection: "row",
    gap: 4,
  },
  textAndMasterCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CardComponent;
