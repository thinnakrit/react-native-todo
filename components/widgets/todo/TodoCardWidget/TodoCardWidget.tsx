// libs
import { View, Text, Button } from "react-native"

// styles
import styles from './TodoCardWidget.style'

// types
import type { ITodoCardWidget } from "./TodoCardWidget.type"

const TodoCardWidget = (props: ITodoCardWidget) => {
  return (
    <View style={styles.todoCardView}>
      <View>
        <Text>#{props.no}</Text>
        <Text>{props.content}</Text>
      </View>
      <View style={styles.todoCardActionView}>
        <Button title="Edit" color={'#333333'} onPress={props.onEdit} />
        <Button title="Delete" color="red" onPress={props.onDelete} />
      </View>
    </View>
  )
}

export default TodoCardWidget