// libs
import { SafeAreaView, View, Text, TextInput, Button } from 'react-native';

// styles
import styles from './HomeScreen.style'

// widgets
import TodoListWidget from '@/components/widgets/todo/TodoListWidget/TodoListWidget';

// hooks
import useTodo from '@/hooks/todo/useTodo';

export default function HomeScreen() {
  const {
    isEditMode,
    todoTextInput,
    todoList,
    editingIndex,
    onUpdateTodoTextInput,
    onAddTodo,
    onEditTodo,
    onOpenEditTodo,
    onDeleteTodo
  } = useTodo()

  return (
    <SafeAreaView>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>To-Do List</Text>
      </View>
      <View style={styles.formView}>
        {isEditMode && editingIndex !== undefined && <Text>Editing no. #{editingIndex + 1}</Text>}
        <TextInput 
          value={todoTextInput}
          onChangeText={onUpdateTodoTextInput}
          style={styles.textInput} placeholder='Write new to-do ...' />
        {!isEditMode && <Button title='+Add' onPress={onAddTodo} />}
        {isEditMode && <Button title='Update' onPress={onEditTodo} />}
      </View>
      <TodoListWidget
        data={todoList}
        onOpenEditTodo={onOpenEditTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </SafeAreaView>
  );
}
