import { View, Text } from "react-native";
import { styles } from "./styles";

type TaskProps = {
    text: string;
}

export function Task(props: TaskProps){
    return(
        <View style={styles.TaskContainer}>
            <View style={styles.taskItem}>
                <View style={styles.itemIcon}></View>
                <Text style={styles.taskTitle}>{props.text}</Text>
            </View>
        </View>
    );
}