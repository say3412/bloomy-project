import { createContext } from 'react';
import { type ContentItem } from '@/types/daytype';

type TodoListContextType = {
  contents: ContentItem[];
  addTodo: (text: string) => void;
  checkDone: (id: string) => void;
  findTodosByDate: (date: string) => void;
  findDoneTodosByDate: (date: string) => void;
  removeTodo: (id: string) => void;
}

const TodoListContext = createContext<TodoListContextType | null>(null);
TodoListContext.displayName = 'TodoListContext';

export default TodoListContext;