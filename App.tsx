import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Task } from "./src/components/Task";
import { useState } from "react";

export default function App(){
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<string[]>([]);

  function handleAddTask(){
    setTaskItems([...taskItems, task]);
    setTask("");
  }

  function taskDone(index: number){
    let itemsCopy = [...taskItems]; 
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return(
    <View style={styles.container}>
      <View style={styles.AppContainer}>
        <Text style={styles.title}>As tarefas de hoje</Text>
      
        <View style={styles.header}>
        <TextInput 
          placeholder="Adicione uma tarefa"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity style={styles.AddButton} onPress={() => handleAddTask()}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => taskDone(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              ) 
            })
          }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },

  AppContainer: {
    marginHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 80,
    textAlign: "center",
  },

  input: {
    width: "60%",
    backgroundColor: "#FFF",
    borderRadius: 60,
    padding: 15,
  },

  AddButton: {
    backgroundColor: "#FFF",
    width: 60,
    height: 60,
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
  },

  textButton:{
    fontSize: 40,
  },

  header:{
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginBottom: 40,
  }
});