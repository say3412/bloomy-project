'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContentItem from './CardContenItem';
import useTodoListContext from '@/hooks/useTodoListContext';
import dayjs, { Dayjs } from 'dayjs';

interface CardTodosProps {
  selectedDate: Dayjs;
}

export default function CardTodos({ selectedDate }: CardTodosProps) {
  const { contents, checkDone, addTodo, removeTodo } = useTodoListContext();

  // 전체 일정 중 '생성일(createdAt)'이 '선택된 날짜(selectedDate)'와 같은 것만 필터링
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
        <CardContentItem contents={filteredContents} checkDone={checkDone} addHandler={addTodo} removeHandler={removeTodo} />
      {/* </Card> */}
    </form>
  );
}

{/* <Stack direction="row" spacing={3}>
      <Stack direction="row" spacing={2} sx={{ flex: '1 1 auto', justifyContent: 'space-between', alignItems: 'center', }}>
        <CardHeader
          title="오늘의 아주 작은 계획"
          subheader="매일 1% 성장하는 나를 기대해요."
          slotProps={{
            title: { sx: { fontWeight: 700, fontSize: '1.3rem', }, },
            subheader: { sx: { fontSize: '0.9rem', color: 'text.secondary', }, },
          }} />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">Add</Button>
        </CardActions>
      </Stack>
    </Stack>
    <Divider /> */}