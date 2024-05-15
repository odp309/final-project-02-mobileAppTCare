import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileComponent from "./ProfileComponent";
import { LinearGradient } from "expo-linear-gradient";
import CardComponent from "./CardComponent";
import MainFeatureComponent from "./MainFeatureComponent";
import AdditionalFeaturesComponent from "./AdditionalFeaturesComponent";
import BannerComponent from "./BannerComponent";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#007DA0", "#0092BB"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
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
    backgroundColor: '#FFFFFF',
    paddingTop: 48,
    gap: 24,
  },
  gradient: {
    position: "absolute",
    top: 0,
    bottom: "65%",
    left: 0,
    right: 0,
    flex: 1,
  },
});

export default HomeScreen;
