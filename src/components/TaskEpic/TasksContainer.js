import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import CountersContainer from "./CountersContainer";
import FloatingButton from "../_Shared/FloatingButton";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);

  const [isFormOpened, setIsFormOpened] = useState(false);

  /**
   *
   * @param {string} title
   */
  const onAddTask = (title) => {
    const newTask = { id: new Date().getTime(), title, completed: false };
    setTasks([newTask, ...tasks]);
  };

  /**
   *
   * @param {number} id
   */
  const onChangeStatus = (id) => {
    let newTasks = [];

    tasks.forEach((task) => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  };

  const onDeleteTask = (id) => {
    let filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
  };

  const getTasksCompleted = () => {
    let counter = 0;

    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });
    return counter;
  };

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm onAddTask={onAddTask} />}
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
      />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDeleteTask={onDeleteTask}
      />
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
};

export default TasksContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    position: "relative",
    backgroundColor: "#fafafa",
  },
});
