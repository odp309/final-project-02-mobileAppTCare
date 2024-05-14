import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import ListMenuPintasan from '../../components/ListMenuPintasan';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#006885', '#0092BB']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images/Animasi.png')}
          style={styles.animation}
        />
        <Image
          source={require('../../../assets/images/BNI_Splashscreen.png')}
          style={styles.imageTop}
          resizeMode="contain"
        />
        <Text style={styles.text}>Selamat Datang,{"\n"}di Mobile Banking BNI!</Text>
      </View>
      <Text style={styles.text2}>Menu Pintasan</Text>
      <ListMenuPintasan />
      <TouchableOpacity style={styles.loginButton}
      onPress={() => navigation.navigate('Home')}>
        <LinearGradient
          colors={['#006885', '#0092BB']}
          style={styles.loginButtonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: '50%', 
    left: 0,
    right: 0,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTop: {
    position: 'absolute',
    top: 110,
    left: 35,
    width: 80,
    height: 30,
    margin: 10, 
  },
  text: {
    position: 'absolute',
    top: 150, 
    left: 45,
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
  },
  animation: {
    position: 'absolute',
    top: '45%',
    left: '70%',
    marginLeft: -100, 
    marginTop: -100, 
  },
  text2: {
    position: 'absolute',
    left: '10%', 
    bottom: '37%', 
    color: 'black',
    fontWeight: 'bold',
  },
  loginButton: {
    position: 'absolute',
    bottom: '10%',
    left: '10%',
    width: '80%', 
    borderRadius: 5,
    overflow: 'hidden',
  },
  loginButtonGradient: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
