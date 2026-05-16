'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContentItem from './CardContenItem';
import useHabitListContext from '@/hooks/useHabitListContext';
import dayjs, { Dayjs } from 'dayjs';

interface CardHabitsProps {
  selectedDate: Dayjs;
}

export function CardHabits({selectedDate}: CardHabitsProps): React.JSX.Element {
  const { contents, checkDone, addHabbit, removeHabbit } = useHabitListContext();

  // 전체 습관 중 '생성일(createdAt)'이 '선택된 날짜(selectedDate)'와 같은 것만 필터링
  const filteredContents = contents.filter((todo) => {
    const todoDate = dayjs(todo.createdAt).format('YYYY-MM-DD');
    const targetDate = selectedDate.format('YYYY-MM-DD');
    return todoDate === targetDate;
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {/* <Card sx={{ minHeight: 400, }}> */}
      <CardContentItem contents={filteredContents} checkDone={checkDone} addHandler={addHabbit} removeHandler={removeHabbit} isHabit={true} />
      {/* </Card> */}
    </form>
  );
}
