import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tCare from '../screens/tCareScreen/tCare';
import history from '../screens/historyScreen/history';
import setting from '../screens/settingScreen/Settings';
import Qr from '../screens/qrScreen/Qr';
import HomeScreen from '../screens/homeScreen/home';
import { LinearGradient } from 'expo-linear-gradient';
import { Home,History,QrCode,FileHeart,Settings } from 'lucide-react-native';

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
      height: 100,
      backgroundColor: "#fff",
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
          width: Platform.OS === 'ios' ? 80 : 80,
          height: Platform.OS === 'ios' ? 80 : 80,
          top: Platform.OS === 'ios' ? -25 : -25,
          borderRadius: Platform.OS === 'ios' ? 40 : 30,
          borderWidth: 8, 
          borderColor: '#A8ECFF',
        }}
      >
        <QrCode size={30} color="#fff"/>
      </LinearGradient>

      <Image
          source={require('../../assets/images/logo_qris.png')}
          style={{
            position: 'absolute',
            bottom: -0,
            width: 46,
            height: 17,
            resizeMode: 'contain'
          }}
        />
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
                <Home size={24} color={focused ? "#007DA0" : "#111"} />
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
                <History
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
                <FileHeart
                  size={24}
                  color={focused ? "#007DA0" : "#4D4D4D"}
                />
                <Text style={{ fontSize: 12, color: "#000" }}>T-Care</Text>
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
                <Settings
                  size={24}
                  color={focused ? "#007DA0" : "#4D4D4D"}
                />
                <Text style={{ fontSize: 12, color: "#000" }}>Pengaturan</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  };


export default ButtonTabNavigator

const styles = StyleSheet.create({})