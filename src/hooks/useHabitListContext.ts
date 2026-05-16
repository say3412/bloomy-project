import { useContext } from "react";
import HabitListContext from "@/contexts/habitListContext";

export default function useHabitListContext() {
  const context = useContext(HabitListContext);

  if (!context) {
    throw new Error('HbbitListContext Provider is null.');
  }

  return context;
}