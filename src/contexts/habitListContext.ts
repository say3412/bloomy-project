import { createContext } from 'react';
import { type HabitContent } from '@/types/daytype';

type HabitListContextType = {
  contents: HabitContent[];
  addHabbit: (text: string, startDate?: string, endDate?: string) => void;
  checkDone: (id: string) => void;
  findHabbitsByDate: (date: string) => void;
  findDoneHabbitsByDate: (date: string) => void;
  removeHabbit: (id: string) => void;
}

const HabitListContext = createContext<HabitListContextType | null>(null);
HabitListContext.displayName = 'HabitListContext';

export default HabitListContext;