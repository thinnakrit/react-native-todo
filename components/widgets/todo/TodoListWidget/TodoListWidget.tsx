// libs
import { TouchableOpacity, FlatList } from 'react-native';

// styles
import styles from './TodoListWidget.style'

// widgets
import TodoCardWidget from '@/components/widgets/todo/TodoCardWidget/TodoCardWidget';

// types
import type { ITodoListWidget } from './TodoListWidget.type';

const TodoListWidget = (props: ITodoListWidget) => {

  return (
    <FlatList 
      style={styles.todoListView}
      data={props.data}
      renderItem={({item, index}) => (
        <TodoCardWidget
          no={String(index + 1)}
          content={item}
          onEdit={() => props.onOpenEditTodo(index)}
          onDelete={() => props.onDeleteTodo(index)}
        />
      )}
    />
  );
}

export default TodoListWidget
