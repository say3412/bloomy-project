import React from 'react';
import { Box, Typography, Card, Grid } from '@mui/material';
import { Dayjs } from 'dayjs';
import { MiniCalendar } from './MiniCalendar';
import useHabbitListContext from '@/hooks/useHabitListContext';
import { CardHabits } from './CardHabits';

interface MyDaySectionProps {
  selectedDate: Dayjs;
  onDateChange: (newDate: Dayjs) => void;
}

export default function HabbitSection({ selectedDate, onDateChange }: MyDaySectionProps) {
  const { contents } = useHabbitListContext();

  return (
    <Box>
      <Box sx={{ pb: 3 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', color: '#313749', }}>
          아주 작은 습관의 힘
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mt: 0.7, }}>
          성공하는 습관이 내 몸에 기억되요.
        </Typography>
      </Box>

      <Card sx={{ borderRadius: '24px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', overflow: 'hidden'}}>
        <Grid container>
          {/* 왼쪽: Todo 리스트 (7.5 비율로 조금 더 넓게 배치) */}
          <Grid size={{ xs: 12, md: 7.5 }} sx={{ borderRight: { md: '1px solid #f0f0f0' } }}>
            <Box sx={{ p: 1 }}>
              <CardHabits selectedDate={selectedDate} />
              {/* <CardHabits /> */}
            </Box>
          </Grid>

          {/* 오른쪽: 미니 달력 영역 (4.5 비율) */}
          <Grid size={{ xs: 12, md: 4.5 }} sx={{ bgcolor: '#fafafa' }}>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* <Typography variant="caption" color="text.secondary" sx={{ mb: 2 }}>
                날짜 선택
              </Typography> */}
              <MiniCalendar value={selectedDate} onChange={onDateChange} contents={contents} isHabit={true}/>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}