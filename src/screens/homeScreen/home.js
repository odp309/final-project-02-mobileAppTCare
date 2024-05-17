import { Image, StyleSheet, View } from "react-native";
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
        source={require("../../../assets/images/BackgroundHomeScreen.png")}
        style={styles.gradient}
      />
      <ProfileComponent />
      <CardComponent />
      <MainFeatureComponent />
      <AdditionalFeaturesComponent />
      <BannerComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 48,
    gap: 24,
  },
  gradient: {
    position: "absolute",
    width: '100%',
    flex: 1,
  },
});

export default HomeScreen;
