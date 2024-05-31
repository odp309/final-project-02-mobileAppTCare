// Buttons.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PrimaryButton = ({ onPress, text, colors, style }) => {
  return (
    <TouchableOpacity style={[styles.primaryButton, style]} onPress={onPress}>
      <LinearGradient
        colors={colors || ["#006885", "#0092BB"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({ onPress, text, colors, style }) => {
  return (
    <TouchableOpacity style={[styles.secondaryButton, style]} onPress={onPress}>
      <LinearGradient
        colors={colors || ["#006885", "#0092BB"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.secondaryButtonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const DisabledButton = ({ text, style }) => {
  return (
    <TouchableOpacity style={[styles.disabledButton, style]} disabled={true}>
      <Text style={styles.disabledButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  gradient: {
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  secondaryButton: {
    paddingVertical: 15,
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 20,
  },
  secondaryButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  disabledButton: {
    width: "100%",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButtonText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export { PrimaryButton, SecondaryButton, DisabledButton };