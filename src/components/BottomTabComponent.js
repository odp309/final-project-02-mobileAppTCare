import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Ionicons, Octicons } from '@expo/vector-icons';
import tCare from '../screens/tCareScreen/tCare';
import history from '../screens/historyScreen/history';
import setting from '../screens/settingScreen/setting';
import Qr from '../screens/qrScreen/Qr';
import HomeScreen from '../screens/homeScreen/home';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff",
    },
  };

  const QRIconWithImage = ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
        colors={['#006885', '#007DA0']}
        style={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          width: Platform.OS === 'ios' ? 50 : 60,
          height: Platform.OS === 'ios' ? 50 : 60,
          top: Platform.OS === 'ios' ? -25 : -25,
          borderRadius: Platform.OS === 'ios' ? 25 : 30,
          borderWidth: 5, 
          borderColor: '#A8ECFF',
        }}
      >
        <Ionicons name="qr-code" size={24} color="#fff" />
        <Image
          source={require('../../assets/images/logo_qris.png')}
          style={{
            position: 'absolute',
            bottom: -30,
            width: 60,
            height: 30,
          }}
        />
      </LinearGradient>
    </View>
  );

  const ButtonTabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center",
               justifyContent: "center" }}>
                <Entypo name="home" size={24} color={focused ? "#007DA0" : "#111"} />
                <Text style={{ fontSize: 12, color: "#000" }}>Beranda</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={history}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Octicons
                  name="history"
                  size={24}
                  color={focused ? "#007DA0" : "#4D4D4D"}
                />
                <Text style={{ fontSize: 12, color: "#000" }}>Riwayat</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="QR"
          component={Qr}
          options={{
            tabBarIcon: QRIconWithImage
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={tCare}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="star-outlined"
                  size={24}
                  color={focused ? "#007DA0" : "#4D4D4D"}
                />
                <Text style={{ fontSize: 12, color: "#000" }}>Favorit</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={setting}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name="settings"
                  size={24}
                  color={focused ? "#007DA0" : "#4D4D4D"}
                />
                <Text style={{ fontSize: 12, color: "#000" }}>Setting</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };


export default ButtonTabNavigator

const styles = StyleSheet.create({})