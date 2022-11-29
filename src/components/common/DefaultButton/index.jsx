import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DefaultButton({ buttonText, handlePress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
    width: 200,
    height: 60,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 21,
  },
});