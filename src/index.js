import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/loginScreen/login.js";
import splashscreen from "./screens/splashScreen/splashscreen.js";
import TCare from "./screens/tCareScreen/tCare.js";
import ButtonTabNavigator from "./components/BottomTabComponent.js";
import AjukanPengaduan from "./screens/tCareScreen/AjukanPengaduan.js"; 

const Stack = createStackNavigator();

const AppSrc = () => {
  return (
    <NavigationContainer initialRouteName="Splashscreen">
      <Stack.Navigator>
        <Stack.Screen
          name="Splashscreen"
          component={splashscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerLeft: null, headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={ButtonTabNavigator}
          options={{ headerLeft: null, headerShown: false }}
        />
        <Stack.Screen
          name="TCare"
          component={TCare}
        />
        <Stack.Screen
          name="AjukanPengaduan" n
          component={AjukanPengaduan}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppSrc;

const styles = StyleSheet.create({});
