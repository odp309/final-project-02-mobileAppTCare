import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/loginScreen/login.js';
import HomeScreen from "./screens/homeScreen/home.js";
import splashscreen from './screens/splashScreen/splashscreen.js';

const Stack = createStackNavigator();

const AppSrc = () => {
  return (
    <NavigationContainer initialRouteName="Splashscreen">
        <Stack.Navigator>
            <Stack.Screen name="Splashscreen" 
                component={splashscreen} 
                options={{ headerShown: false }}/>
            <Stack.Screen name="Login" 
                component={LoginScreen}
                options={{headerLeft: null, headerShown: false}} />
            <Stack.Screen name="Home" component={HomeScreen}
            options={{headerLeft: null}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppSrc

const styles = StyleSheet.create({})