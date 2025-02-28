export interface ITodoCardWidget {
  no: string,
  content?: string
  onEdit?: () => void
  onDelete?: () => void
}