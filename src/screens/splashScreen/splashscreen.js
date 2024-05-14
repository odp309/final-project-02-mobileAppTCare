import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
 const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); 
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#006885', '#0092BB']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Image
          source={require('../../../assets/images/BNI_Splashscreen.png')}
          style={styles.imageTop}
          resizeMode="contain"
        />
        <Text style={styles.text}>Melayani Negeri, Kebanggaan Bangsa</Text>
        <Image
          source={require('../../../assets/images/logo_lps.png')}
          style={styles.imageBottom}
          resizeMode="contain"
        />
        <Text style={styles.textHak}>Hak Cipta © 2024 BNI Mobile Banking</Text>
        <Image
          source={require('../../../assets/images/wave.png')}
          style={styles.imageWave}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
    textAlign: 'center',
    position: 'absolute', 
    top: '57%', 
    transform: [{ translateY: -50 }],
  },
  imageTop: {
    width: 200,
    height: 60,
  },
  imageBottom: {
    width: 110,
    height: 100,
    position: 'absolute', 
    bottom:95, 
  },
  textHak: {
    color: 'white',
    fontSize: 11,
    marginTop: 20,
    textAlign: 'center',
    position: 'absolute', 
    top: '89%', 
    transform: [{ translateY: -50 }],
  },
  imageWave: {
    width: 400,
    position: 'absolute', 
    bottom:0,
  },
});

export default SplashScreen;