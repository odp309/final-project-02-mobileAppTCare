import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import ProfileComponent from "./ProfileComponent";
import CardComponent from "./CardComponent";
import MainFeatureComponent from "./MainFeatureComponent";
import AdditionalFeaturesComponent from "./AdditionalFeaturesComponent";
import BannerComponent from "./BannerComponent";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/BackgroundProfileHomeScreen.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <ProfileComponent />
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View style={styles.containerScroll}>
          <Image
            source={require("../../../assets/images/BackgroundCardHomeScreen.png")}
            style={styles.imageBackground}
          />
          <CardComponent />
          <MainFeatureComponent />
          <AdditionalFeaturesComponent />
          <BannerComponent />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    backgroundColor: "#FFFFFF",
    gap: 20,
  },
  imageBackground: {
    position: "absolute",
    width: "100%",
    flex: 1,
  },
});

export default HomeScreen;
