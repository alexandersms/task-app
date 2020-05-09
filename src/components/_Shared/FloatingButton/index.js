import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FloatingButton = ({ toggleForm, isFormOpened }) => {
  return (
    <TouchableOpacity onPress={toggleForm} style={styles.container}>
      {isFormOpened ? (
        <Text style={styles.title}>x</Text>
      ) : (
        <Text style={styles.title}>+</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#00cec9",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 30,
    textAlign: "center",
  },
});

export default FloatingButton;
