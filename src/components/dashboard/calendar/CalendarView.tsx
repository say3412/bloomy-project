'use client'
import dayjs from 'dayjs';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import useHabbitListContext from '@/hooks/useHabitListContext';
import useTodoListContext from '@/hooks/useTodoListContext';

export default function CalendarView() {
  const { contents: habbits } = useHabbitListContext();
  const { contents: todos } = useTodoListContext();

  // 완료된 habit을 doneDates 배열 기반으로 날짜별 개수 집계
  const groupedHabbit = habbits.reduce((acc, habbit) => {
    // doneDates 배열이 존재할 때만 루프를 돕니다.
    if (habbit.doneDates && Array.isArray(habbit.doneDates)) {
      habbit.doneDates.forEach((dateStr: string) => {
        // 날짜 포맷 규격화 (안전장치)
        const formattedDate = dayjs(dateStr).format('YYYY-MM-DD');
        acc[formattedDate] = (acc[formattedDate] || 0) + 1;
      });
    }
    return acc;
  }, {} as Record<string, number>);

  const habbitEvents = Object.entries(groupedHabbit).map(([date, count]) => ({
    title: `${count}`,
    date,
  }));

  // 완료된 todos만 날짜별로 개수 집계 (기존 유지)
  const groupedTodo = todos.reduce((acc, todo) => {
    if (!todo.done) {
      return acc;
    }
    const date = dayjs(todo.createdAt).format('YYYY-MM-DD');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const todoEvents = Object.entries(groupedTodo).map(([date, count]) => ({
    title: `${count}`,
    date,
  }));

  const events = [
    ...todoEvents.map(e => ({ ...e, extendedProps: { type: 'todo' } })),
    ...habbitEvents.map(e => ({ ...e, extendedProps: { type: 'habbit' } })),
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: ''
      }}
      buttonText={{ today: 'Today' }}
      buttonIcons={{ prev: 'chevron-left', next: 'chevron-right' }}
      height="auto"
      fixedWeekCount={false}
      dayMaxEventRows={true}
      events={events}
      eventBackgroundColor="transparent"
      eventBorderColor="transparent"
      eventContent={(eventInfo) => {
        const isHabbit = eventInfo.event.extendedProps.type === 'habbit';

        const themeColor = isHabbit ? {
          bg: 'rgba(228, 123, 166, 0.12)',
          text: '#E47BA6',
          border: '#E47BA6'
        } : {
          bg: 'rgba(216, 180, 226, 0.15)',
          text: '#B189BE',
          border: '#D8B4E2'
        };

        return (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0px 8px',
            margin: '0px 2px',
            borderRadius: '6px',
            backgroundColor: themeColor.bg,
            borderLeft: `3px solid ${themeColor.border}`,
            transition: 'all 0.2s ease',
          }}>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: '800',
              color: themeColor.text,
              opacity: 0.8
            }}>
              {isHabbit ? 'H' : 'T'}
            </span>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              color: '#313749',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {eventInfo.event.title}
            </span>
          </div>
        );
      }}
    />
  );
}