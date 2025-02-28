import type { TTodoAction } from "@/types/features/todo.type";

export interface ITodoListWidget extends Pick<TTodoAction, 'onDeleteTodo' | 'onOpenEditTodo'> {
  data?: string[]
}

