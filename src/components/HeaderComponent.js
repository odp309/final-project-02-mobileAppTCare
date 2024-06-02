import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from "lucide-react-native";
import { LinearGradient } from 'expo-linear-gradient';
import usePoppinsFonts from "../theme/fontPoppins";

const windowWidth = Dimensions.get('window').width;

const HeaderComponent = ({ TextHeader, Type, IconColor, TextColor, useGradient, gradientColors, solidColor, showBackButton, onBackPress }) => {
  usePoppinsFonts();
  const navigation = useNavigation();

  return (
    <View style={styles.headerWrapper}>
      {useGradient ? (
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerContainer}
        >
          {Type === "withIcon" && showBackButton && (
            <TouchableOpacity onPress={onBackPress ? onBackPress : () => navigation.goBack()}>
              <ArrowLeft color={IconColor} size={22} style={{ justifyContent: 'center', alignItems: 'center' }} />
            </TouchableOpacity>
          )}
          <View style={styles.textContainer}>
            <Text style={[styles.headerText, { color: TextColor }]}>
              {TextHeader}
            </Text>
          </View>
        </LinearGradient>
      ) : (
        <View style={[styles.headerContainer, { backgroundColor: solidColor }]}>
          {Type === "withIcon" && showBackButton && (
            <TouchableOpacity onPress={onBackPress ? onBackPress : () => navigation.goBack()}>
              <ArrowLeft color={IconColor} size={22} style={{ justifyContent: 'center', alignItems: 'center' }} />
            </TouchableOpacity>
          )}
          <View style={styles.textContainer}>
            <Text style={[styles.headerText, { color: TextColor }]}>
              {TextHeader}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
  },
  headerContainer: {
    width: "100%",
    height: 97,
    alignItems: "center",
    paddingTop: 44,
    paddingHorizontal: 8,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "poppinsSemiBold",
  },
});

export default HeaderComponent;
