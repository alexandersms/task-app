import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const _onChangeText = (value) => {
    setTitle(value);
  };

  const _onPressBtn = () => {
    if (title.length > 0) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput onChangeText={_onChangeText} value={title} />
      </View>
      <Button onPress={_onPressBtn} title="Ajouter" color="#00cec9" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  containerInput: {
    width: "75%",
    height: 35,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 7,
  },
});

export default TaskForm;
