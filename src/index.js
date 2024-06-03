import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/loginScreen/login";
import SplashScreen from "./screens/splashScreen/splashscreen";
import ButtonTabNavigator from "./components/BottomTabComponent";
import TCare from './screens/TCareScreen/TCare'; 
import AjukanPengaduan from './screens/TCareScreen/AjukanPengaduan'; 

const Stack = createStackNavigator();

const AppSrc = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splashscreen">
        <Stack.Screen
          name="Splashscreen"
          component={SplashScreen}
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AjukanPengaduan"
          component={AjukanPengaduan}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppSrc;

const styles = StyleSheet.create({});
