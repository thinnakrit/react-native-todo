export type TTodoAction = {
  onAddTodo: () => void
  onOpenEditTodo: (index: number) => void
  onEditTodo: (index: number) => void
  onDeleteTodo: (index: number) => void
}