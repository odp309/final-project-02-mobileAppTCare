import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Animated
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { X, User, LockKeyhole } from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PrimaryButton } from "../../components/Button";

const LoginModal = ({ modalVisible, setModalVisible }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("123456");
  const navigation = useNavigation();
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible, overlayOpacity]);

  const validationUsername = (username) => {
    const usernameRegex = new RegExp("^\\w[\\w.]{2,18}\\w$");
    return usernameRegex.test(username);
  };

  const validationPassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = async () => {
    if (!validationUsername(username)) {
      Alert.alert("Invalid Username", "Please enter a valid username");
      return;
    }

    if (!validationPassword(password)) {
      Alert.alert("Invalid Password", "Password must be at least 6 characters");
      return;
    }

    try {
      // Simulate API call
      const result = { status: 200, data: { result: { accessToken: "dummyAccessToken" } } };

      console.log("Login response:", result.data.result.accessToken);
      if (result.status === 200) {
        const accessToken = result.data.result.accessToken;
        if (accessToken) {
          await AsyncStorage.setItem("AccessToken", accessToken);
          setModalVisible(false);
          navigation.navigate("Home");
        } else {
          Alert.alert("Login Failed", "No access token received");
        }
      } else {
        Alert.alert("Login Failed", "Invalid username or password");
      }
    } catch (error) {
      Alert.alert("Login Failed", "An error occurred during login");
    }
  };

  return (
    <>
      <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]} pointerEvents={modalVisible ? 'auto' : 'none'} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <X color="#000" size={24} />
                </TouchableOpacity>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Login</Text>
                  <View style={styles.inputContainer}>
                    <User style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Username"
                      value={username}
                      onChangeText={setUsername}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <LockKeyhole style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                    />
                  </View>
                  <PrimaryButton
                    onPress={handleLogin}
                    text="Login"
                  />
                  <Text style={styles.forgotPasswordText}>
                    Lupa Username/Password?
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalContent: {
    width: "100%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#006885",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 15,
  },
  input: {
    flex: 1,
    flex: 1,
    height: 40,
    color: "#858585",
    fontSize: 13,
  },
  icon: {
    color: "#A3A3A3",
    marginRight: 10,
  },
  modalLoginButton: {
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  modalLoginButtonGradient: {
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalLoginButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#006885",
    marginTop: 20,
    fontSize: 12,
  },
});

export default LoginModal;

