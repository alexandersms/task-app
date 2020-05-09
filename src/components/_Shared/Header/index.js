import React from "react";
import { View, Text, StyleSheet } from "react-native";

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mecredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const months = [
  "Janv",
  "Fev",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const Header = () => {
  const date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${days[date.getDay()]}, ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Header;
