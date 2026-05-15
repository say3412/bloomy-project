import { useContext } from "react";
import HabbitListContext from "@/contexts/habbit-list-context";

export default function useHabbitListContext() {
  const context = useContext(HabbitListContext);

  if (!context) {
    throw new Error('HbbitListContext Provider is null.');
  }

  return context;
}