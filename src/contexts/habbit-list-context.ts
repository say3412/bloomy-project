import { createContext } from 'react';
import { type ContentItem } from '@/types/daytype';

type HabbitListContextType = {
  contents: ContentItem[];
  addHabbit: (text: string) => void;
  checkDone: (id: string) => void;
  findHabbitsByDate: (date: string) => void;
  findDoneHabbitsByDate: (date: string) => void;
  removeHabbit: (id: string) => void;
}

const HabbitListContext = createContext<HabbitListContextType | null>(null);
HabbitListContext.displayName = 'TodoListContext';

export default HabbitListContext;