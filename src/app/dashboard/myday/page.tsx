'use client'; // 클라이언트 컴포넌트 선언

import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Stack, Typography, Box } from '@mui/material';
import TodoSection from '@/components/dashboard/myday/TodoSection';
import HabitSection from '@/components/dashboard/myday/HabitSection';

export default function MyDayPage(): React.JSX.Element {
  // 1. 전체 페이지의 기준 날짜 상태 (여기서 관리해야 Todo/Habit이 동기화됨)
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const isToday = selectedDate.isSame(dayjs(), 'day');

  return (
    <Stack spacing={5} sx={{ p: 3, minHeight: '100vh' }}>
      
      {/* 2. 페이지 헤더: 현재 상태 알림 */}
      <Stack spacing={0.5}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: '-0.02em', color: '#19191B' }}>
          My Day
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isToday ? (
            <>오늘의 할 일과 습관을 체크하며 <Box component="span" sx={{ fontFamily: '"Cascadia Mono", monospace', fontWeight: 600, color: 'primary.main' }}>Bloomy</Box>한 하루를 만드세요.</>
          ) : (
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
              {selectedDate.format('YYYY년 MM월 DD일')}의 기록을 확인하고 있습니다.
            </Box>
          )}
        </Typography>
      </Stack>

      {/* 3. 메인 섹션들 (날짜 상태와 변경 함수를 Props로 전달) */}
      <Stack spacing={6}>
        {/* TodoSection과 HabitSection은 내부에 Grid(7:3) 구조를 가짐 */}
        <TodoSection selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <HabitSection selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </Stack>
    </Stack>
  );
}