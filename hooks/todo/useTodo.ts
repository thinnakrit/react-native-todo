// libs
import { useState } from "react"

const useTodo = () => {
  const [todoTextInput, setTodoTextInput] = useState<string>('')
  const [todoList, setTodoList] = useState<string[]>([])
  const [editingIndex, setEditingIndex] = useState<number | undefined>(undefined)

  const handleUpdateTodoTextInput = (value: string) => {
    setTodoTextInput(value)
  }

  const handleAddTodo = () => {
    const updateTodoList = todoList
    updateTodoList.push(todoTextInput)
    setTodoList(updateTodoList)
    setTodoTextInput('')
  }

  const handleEditTodo = () => {
    const updateTodoList = todoList
    updateTodoList[editingIndex as number] = todoTextInput
    setTodoList(updateTodoList)
    setTodoTextInput('')
    setEditingIndex(undefined)
  }

  const handleOpenEditTodo = (index: number) => {
    setTodoTextInput(todoList[index])
    setEditingIndex(index)
  }

  const handleDeleteTodo = (index: number) => {
    const updateTodoList = todoList.reduce((prev, curr, currIndex) => {
      if (currIndex !== index) {
        prev.push(curr)
      }
      return prev
    }, [] as string[])
    setTodoList(updateTodoList)
  }

  const isEditMode = editingIndex !== undefined

  return {
    isEditMode,
    todoTextInput,
    todoList,
    editingIndex,
    onUpdateTodoTextInput: handleUpdateTodoTextInput,
    onAddTodo: handleAddTodo,
    onEditTodo: handleEditTodo,
    onOpenEditTodo: handleOpenEditTodo,
    onDeleteTodo: handleDeleteTodo
  }
}

export default useTodo