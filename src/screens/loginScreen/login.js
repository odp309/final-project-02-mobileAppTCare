import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Fingerprint } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ListMenuPintasan from '../../components/ListMenuPintasan';
import LoginModal from './loginModal';

const LoginScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLoginPress = () => {
    setModalVisible(true);
  };

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
        <Image
          source={require('../../../assets/images/Ellipse_top.png')}
          style={styles.imageEllipseTop}
        />
        <Image
          source={require('../../../assets/images/Ellipse_bottom.png')}
          style={styles.imageEllipseBottom}
        />
      </View>
      <Text style={styles.text2}>Menu Pintasan</Text>
      <ListMenuPintasan />
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <LinearGradient
          colors={['#006885', '#0092BB']}
          style={styles.loginButtonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.loginButtonContent}>
            <Fingerprint color="#FFF" size={24} />
            <Text style={styles.loginButtonText}>Login</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <LoginModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
    position: 'relative',
  },
  imageTop: {
    position: 'absolute',
    top: 110,
    left: 35,
    width: 80,
    height: 30,
    margin: 10,
    zIndex: 1, 
  },
  text: {
    position: 'absolute',
    top: 150,
    left: 45,
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
    zIndex: 1, 
  },
  animation: {
    position: 'absolute',
    top: '46%',
    left: '65%',
    marginLeft: -100,
    marginTop: -100,
    zIndex: 2
  },
  text2: {
    position: 'absolute',
    left: '10%',
    bottom: '37%',
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  loginButton: {
    position: 'absolute',
    bottom: '15%',
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
  loginButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imageEllipseTop: {
    position: 'absolute',
    top: 0,
    left: 0, 
    width: 180,
    height: 210, 
    zIndex: 1,
  },
  imageEllipseBottom: {
    position: 'absolute',
    bottom: -30,
    right: 0, 
    width: 100,
    height: 110, 
    zIndex: 1,
  },
});

export default LoginScreen;
