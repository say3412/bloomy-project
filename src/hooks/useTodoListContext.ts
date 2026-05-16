import { useContext } from "react";
import TodoListContext from "@/contexts/todoListContext";

export default function useTodoListContext() {
  const context = useContext(TodoListContext);

  if (!context) {
    throw new Error('TodoListContext Provider is null.');
  }

  return context;
}